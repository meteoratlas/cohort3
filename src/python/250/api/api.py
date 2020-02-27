import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return {'serverActive':True, 'time': time.time()}

app.run(port=5000, debug=True)