import sqlite3
from flask_restful import Resource, reqparse
from database import db

class PostModel(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.Integer, db.ForeignKey("users.id"))
    content = db.Column(db.String)
    datetime_posted = db.Column(db.DateTime)
    likes = db.Column(db.Integer)

    def __init__(self, author, content, datetime_posted, likes):
        self.author = author
        self.content = content
        self.datetime_posted = datetime_posted
        self.likes = likes

    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
