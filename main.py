from flask import Flask
from flask import request
import json

app = Flask(__name__)


@app.route("/", methods=['GET'])
def get():
    return ("TEST")

@app.route("/", methods=['POST'])
def post():
    res = bytes(request.data)
    decoded = res.decode("utf-8")
    print("I GOT", decoded)
    return "GOT IT"

if __name__ == "__main__":
    app.run()