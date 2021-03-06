from flask import Flask, jsonify, request, render_template
from process_db import read_workbook, make_JSON

app = Flask(__name__)
stores = [
    {
        "name": "My Store",
        "items":[
            {
            "name":"Item 1",
            "price":15.99
            },
            {
            "name":"Item 2",
            "price":8.99
            }   
        ]
    }
]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/store", methods=["POST"])
def create_store():
    request_data = request.get_json()
    new_store = {
        "name":request_data['name'],
        "items":[]
    }
    stores.append(new_store)
    return jsonify(new_store)

@app.route("/json")
def get_basic_json():
    return read_workbook("data.xlsx")

@app.route("/loop")
def loop_data():
    data = read_workbook("data.xlsx")
    return render_template("loop.html", data=data)

@app.route("/store/")
def get_stores():
    return jsonify({"stores":stores})

@app.route("/store/<string:name>")
def get_store(name):
    for store in stores:
        if store["name"] == name:
            return jsonify(store)
    return jsonify({"message":"Store could not be found."})

@app.route("/store/<string:name>/item", methods=["POST"])
def create_item_in_store(name):
    request_data = request.get_json()
    for store in stores:
        if store["name"] == name:
            new_item = { 
                "name":request_data['name'],
                "price":request_data['price']
            }
            store["items"].append(new_item)
            return jsonify(new_item)
    return jsonify({"message":"Store could not be found."})

@app.route("/store/<string:name>/item")
def get_items_in_store(name):
    for store in stores:
        if store["name"] == name:
            return jsonify({"items":store["items"]})
    return jsonify({"message":"Store could not be found."})

app.run(port=5000)