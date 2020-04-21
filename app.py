import sqlalchemy
import sqlalchemy as db
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

from query import gatherData


app = Flask(__name__)

@app.route("/")
def index():
    data = gatherData()
    return render_template("C:/COVID-19/COVID-19-Clinical-Trials/static/index.html", data=data)

if __name__ == "__main__":
    app.run(debug=True)
