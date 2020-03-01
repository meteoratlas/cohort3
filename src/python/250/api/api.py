import time
from flask import Flask, render_template
from flask_restful import Api
import keys
from database import db


# TODO: make sure this works in production
app = Flask(__name__, static_folder="../build/static", template_folder="../build")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = keys.secret_key
# TODO: double check this works when deployed in production
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"

api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    db.init_app(app)
    app.run(port=5000, debug=True)