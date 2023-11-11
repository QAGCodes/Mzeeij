from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    conn = sqlite3.connect('test1.db')
    c = conn.cursor()
    c.execute("SELECT * FROM user")
    users = c.fetchall()
    conn.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)