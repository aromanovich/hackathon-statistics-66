from . import db


class Statistics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
