import sqlite3
from flask_restful import Resource, reqparse
from database import db

class SongModel(db.Model):
    __tablename__ = "songs"
    id = db.Column(db.Integer, primary_key=True)
    artist = db.Column(db.String)
    title = db.Column(db.String)
    album = db.Column(db.String)

    def __init__(self, artist, title, album):
        self.artist = artist
        self.title = title
        self.album = album

    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

    @classmethod
    def find_by_artist(cls, artist):
        return cls.query.filter_by(artist=artist).first()

    @classmethod
    def find_by_album(cls, album):
        return cls.query.filter_by(album=album).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
