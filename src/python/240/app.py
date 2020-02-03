from flask import Flask, jsonify, request, render_template
from process_db import read_workbook, make_JSON

app = Flask(__name__)
stores = [
    read_workbook("data.xlsx")
]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/json")
def get_basic_json():
    return stores[0]

@app.route("/loop")
def loop_data():
    return render_template("loop.html", data=stores[0])


app.run(port=5000)