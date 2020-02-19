from flask import Flask, jsonify, request, render_template
from flask_restful import Resource, Api
from process_db import read_workbook, make_JSON
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)
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


app.run(port=5000, debug=True)