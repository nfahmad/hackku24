from flask import Flask


app = Flask("hackku24")

@app.get("/")
def index():
    return "Hello world!", 200
