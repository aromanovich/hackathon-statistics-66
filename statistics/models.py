from . import db


class Statistics(db.Model):
    __table_args__ = (
        db.UniqueConstraint('first_name', 'last_name', name='unique_name'),
    )

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    height = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    foot_size = db.Column(db.Integer)
    eye_color = db.Column(db.String(1000))
    birthdate = db.Column(db.Date)
    year_started_working = db.Column(db.Integer)
