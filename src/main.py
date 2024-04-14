from flask import Flask, send_from_directory

app = Flask("hackku24")

@app.get("/")
def index():
    return send_from_directory("static/page", "index.html")

@app.get("/ks/kansas-city")
def ks_page():
    return send_from_directory("static/page", "ks-kansas-city.html")
