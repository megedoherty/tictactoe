#!flask/bin/python
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    board = db.Column(db.JSON, nullable=False)
    result = db.Column(db.String(80), nullable=False)

db.create_all()

@app.route('/savegame', methods=['POST'])
def save_game():
    if not request.is_json:
        return flask.abort(400)
    
    json = request.get_json()
    new_game = Game(board=json['board'], result=json['result'])

    db.session.add(new_game)
    db.session.commit()

    return ('', 200)

if __name__ == '__main__':
    app.run()
