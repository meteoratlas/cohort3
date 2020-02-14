from flask import Flask, jsonify, request, render_template
from flask_restful import Resource, Api
from process_db import read_workbook, make_JSON

app = Flask(__name__)
api = Api(app)
data = read_workbook("data.xlsx")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/json")
def get_basic_json():
    return data

@app.route("/loop")
def loop_data():
    return render_template("loop.html", data=data)

# application AIP
@app.route("/getall", methods = ['POST','GET'])
def all():
    return jsonify(data), 200 

@app.route("/get", methods = ['POST'])
def get():
    content = request.get_json()
    if 'key' not in content:
        return jsonify({"msg":"You must provide the 'key' attribute."}),400
    if 'sheet' not in content:
        return jsonify({"msg":"You must provide the 'sheet' attribute."}),400
    item = get_entry_by_key(content["key"], content["keyval"], content["sheet"])
    return jsonify(item), 200  

@app.route("/add", methods = ["POST"])
def add():
    key_list = {"Customers":"customer_id", "Products":"product_id","Invoice Items":"invoice_item_id", "Invoices":"invoice_id"}
    content = request.get_json()
    if 'key' not in content:
        return jsonify({"msg":"You must provide the 'key' attribute."}), 400
    if 'sheet' not in content:
        return jsonify({"msg":"You must provide a sheet name to add to."}), 400
    sheet = content.sheet
    key = content.key
    
    if key in data:
        return jsonify({"msg":"An object matching the provided key already exists."}), 400
    data[key] = content

    return jsonify({}), 200

@app.route("/delete", methods = ['POST'])
def delete():
    content = request.json()
    return jsonify(content), 200

def get_entry_by_key(keyname, key, sheet):
    collection = data[sheet]
    try:
        item = next(filter(lambda x:x[keyname] == key, collection), None)
    except KeyError:
        return None
    return item

app.run(port=5000, debug=True)