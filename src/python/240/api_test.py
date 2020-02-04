from flask import Flask, jsonify, request, render_template
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from security import authenticate, identity
import keys

app = Flask(__name__)
app.secret_key = keys.secret_key
api = Api(app)

jwt = JWT(app, authenticate, identity) #/auth

items = []

class Item(Resource):
    @jwt_required()
    def get(self, name):
        item = next(filter(lambda x:x['name'] == name, items), None)
        return {"item":None}, 200 if item else 404
                
    def post(self, name):
        if next(filter(lambda x:x['name'] == name, items), None) is not None:
            return {"message": f'An item with the name {name} already exists.'}, 400

        data = request.get_json()
        item = {"name":name, "price":data["price"]}
        items.append(item)
        return item, 201

class ItemList(Resource):
    def get(self):
        return {"items":items}

api.add_resource(Item, '/item/<string:name>') 
api.add_resource(ItemList, '/items') 

app.run(port=5000, debug=True)