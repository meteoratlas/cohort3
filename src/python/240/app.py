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

def get_entry_by_key(key, dictionary):
    collection = data[dictionary]
    

app.run(port=5000)