from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=False, nullable=False)
    lastname = db.Column(db.String(200), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    #relations
    wedding = db.relationship("Wedding", backref= "User")
    contacts = db.relationship("Contact", backref="User")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "is_active": self.is_active,
        }
    

class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(200), unique=True, nullable=False)
    company_email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    # relations 
    provider_sheet = db.relationship("Provider_sheet", backref= "Provider")
    contacts = db.relationship("Contact", backref="Provider")

    def __repr__(self):
        return f'<Provider {self.company_email}>'

    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "company_email": self.company_email,
            "is_active": self.is_active,
        }
    

class Wedding(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name_novio = db.Column(db.String(200), nullable=False)
    name_novia = db.Column(db.String(200), nullable=False)
    wedding_date = db.Column(db.Date, nullable=False)
    wedding_time = db.Column(db.String(10),nullable=False)
    presupuesto_estimado = db.Column(db.Integer, nullable=False)
    place = db.Column(db.String(500), nullable=False)
    guests_average = db.Column(db.Integer, nullable=False)
    food_question = db.Column(db.Boolean(),nullable=False)
    music_question = db.Column(db.Boolean(),nullable=False)
    visual_media_question = db.Column(db.Boolean(),nullable=False)
    legal_documentation_question = db.Column(db.Boolean(),nullable=False)
    cloth_question = db.Column(db.Boolean(),nullable=False)

    #relations
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    membership = db.relationship("User_membership", backref= "Wedding")
    
    def __repr__(self):
        return f'<Wedding {self.name_novia}>'

    def serialize(self):
        return {
            "id": self.id,
            "name_novio": self.name_novio, 
            "name_novia": self.name_novia,
            "wedding_date": self.wedding_date,
            "wedding_time": self.wedding_time,
            "presupuesto_estimado": self.presupuesto_estimado,
            "place": self.place,
            "guests_average": self.guests_average,
            "food_question": self.food_question,
            "music_question": self.music_question,
            "visual_media_question": self.visual_media_question,
            "legal_documentation_question": self.legal_documentation_question,
            "cloth_question": self.cloth_question,
        }
    

class Provider_sheet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(200), nullable=False)
    RIF = db.Column(db.Integer, nullable=False)
    company_industry = db.Column(db.String(200), nullable=False)
    company_description = db.Column(db.String(200), nullable=False)
    presupuesto_minimo_de_usuario = db.Column(db.Integer, nullable=False)
    clients_amount_per_month_question = db.Column(db.Boolean(), nullable=False)
    clients_amount_per_month_value = db.Column(db.Integer, nullable=False)
    clients_amount_per_wedding_question = db.Column(db.Boolean(), nullable=False)
    clients_amount_per_wedding_value = db.Column(db.Integer, nullable=False)

    #relations
    provider_id = db.Column(db.Integer, db.ForeignKey("provider.id"), nullable=False)
    membership = db.relationship("Provider_membership", backref= "Provider_sheet")


    def __repr__(self):
     return f'<Provider_sheet {self.company_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "RIF": self.RIF, 
            "company_industry": self.company_industry,
            "company_description": self.company_description,
            "presupuesto_minimo_de_usuario": self.presupuesto_minimo_de_usuario,
            "clients_amount_per_month_question": self.clients_amount_per_month_question,
            "clients_amount_per_month_value": self.clients_amount_per_month_value,
            "clients_amount_per_wedding_question": self.clients_amount_per_wedding_question,
            "clients_amount_per_wedding_value": self.clients_amount_per_wedding_value,
        }
    

class User_membership(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plan_type = db.Column(db.String(10), nullable=False)

    #relations 
    wedding_id = db.Column(db.Integer, db.ForeignKey("wedding.id"), nullable=False)

    def __repr__(self):
        return f'< User_membership{self.plan_type}>'

    def serialize(self):
        return {
            "id": self.id,
            "plan_type": self.plan_type,
        }
    

class Provider_membership(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plan_type = db.Column(db.String(10), nullable=False)

    #relations
    provider_sheet_id = db.Column(db.Integer, db.ForeignKey("provider_sheet.id"), nullable=False)

    
    def __repr__(self):
        return f'< Provider_membership{self.plan_type}>'

    def serialize(self):
        return {
            "id": self.id,
            "plan_type": self.plan_type,
        }


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    provider_id = db.Column(db.Integer, db.ForeignKey("provider.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    interaction = db.Column(db.String(20))

    def __repr__(self):
        return f'< Contact{self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "provider_id": self.provider_id,
            "user_id": self.user_id,
            "interaction": self.interaction,
        }
