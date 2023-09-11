from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=False, nullable=False)
    lastname = db.Column(db.String, unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }
    

class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String, unique=True, nullable=False)
    company_email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Provider {self.company_email}>'

    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "company_email": self.company_email,
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }