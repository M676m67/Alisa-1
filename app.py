from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get-name")
def get_name():
    return jsonify({"name": "مريومة ♥"})

if __name__ == "__main__":
    app.run(debug=True)
