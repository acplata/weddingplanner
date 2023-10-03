"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

from api.models import db, User, Provider, Wedding, User_membership, Provider_sheet, Provider_membership, Contact

from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

#Register User

@api.route('/register/user', methods=['POST'])
def handle_user ():
    data = request.get_json()
    data_name = data.get("name", None)
    data_lastname = data.get("lastname", None)
    data_email = data.get("email", None)
    data_password = data.get("password", None)

    if not data_email or not data_password or not data_name or not data_lastname :
        return jsonify ({"error": "Todos los campos son requeridos (name, lastname, email, password)"}), 400
    
    hashed_password = generate_password_hash(data_password)
    new_user = User(name=data_name, lastname=data_lastname, email=data_email, password=hashed_password, is_active=True)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify("¡Te has registrado correctamente!")
    
    except Exception as error: 
        db.session.rollback()
        return jsonify(error.args)


#Register Providers

@api.route('/register/provider', methods=['POST'])
def handle_provider ():
    data = request.get_json()
    data_company_name = data.get("company_name", None)
    data_company_email = data.get("company_email", None)
    data_password = data.get("password", None)

    if not data_company_email or not data_password or not data_company_name:
        return jsonify ({"error": "Todos los campos son requeridos (company_name, company_email, password)"}), 400
    
    hashed_password = generate_password_hash(data_password)
    new_provider = Provider(company_name=data_company_name, company_email=data_company_email, password=hashed_password, is_active=True)

    try:
        db.session.add(new_provider)
        db.session.commit()
        return jsonify("¡Te has registrado correctamente!")
    
    except Exception as error: 
        db.session.rollback()
        return jsonify(error.args)

# Login User

@api.route('/login/user', methods=['POST'])
def login_user():
    data = request.get_json()

    data_email = data.get("email", None)
    data_password = data.get("password", None)

    if not data_email or not data_password:
        return jsonify({"error": "Todos los campos son requeridos"}), 400
    
    user_login = User.query.filter_by(email = data_email).first()
    if not user_login:
        return jsonify({"error": "Correo inválido"}), 400
    
    password_match = check_password_hash(user_login.password, data_password)
    if password_match:
       token_data = {"id": user_login.id}
       user_token = create_access_token(token_data)
       response_dic = {"token": user_token}
       user_wedding = Wedding.query.filter_by(user_id = user_login.id).first()
       if user_wedding:
           response_dic["wedding_id"] = user_wedding.id
           wedding_membership = User_membership.query.filter_by(wedding_id = user_wedding.id).first()
           if wedding_membership:
               response_dic["membership_id"] = wedding_membership.id
       print(user_token)
       return jsonify(response_dic)
    
    else: 
        return jsonify({"error": "Contraseña inválida"})


@api.route('/profile/user', methods=['GET'])
@jwt_required()
def get_private_information():
    print("hola")
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id["id"]).first()
    print(user.serialize())
    print(user.wedding[0].serialize())
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify({"user_data": user.serialize(), "wedding_data": user.wedding[0].serialize()}), 200
    


#Log in Provider

@api.route('/login/provider', methods=['POST'])
def login_provider():
    data = request.get_json()

    data_company_email = data.get("company_email", None)
    data_password = data.get("password", None)

    if not data_company_email or not data_password:
        return jsonify({"error": "Todos los campos son requeridos"}), 400
    
    user_login = Provider.query.filter_by(company_email = data_company_email).first()
    if not user_login:
        return jsonify({"error": "Correo inválido"}), 400
    
    password_match = check_password_hash(user_login.password, data_password)
    if password_match:
       token_data = {"id": user_login.id}
       user_token = create_access_token(token_data)
       response_dic = {"token": user_token}
       sheet = Provider_sheet.query.filter_by(provider_id = user_login.id).first()
       if sheet:
               response_dic["provider_sheet_id"] = sheet.id
               provider_membership = Provider_membership.query.filter_by(provider_sheet_id = sheet.id).first()
               if provider_membership:
                response_dic["membership_id"] = provider_membership.id
       print(user_token)
       return jsonify(response_dic)
    else: 
        return jsonify({"error": "Contraseña inválida"})
      



#        



@api.route('/profile/provider', methods=['GET'])
@jwt_required()
def get_provider_private_information():
    print("hola")
    provider_id = get_jwt_identity()
    provider = Provider.query.filter_by(id = provider_id["id"]).first()
    print(provider.serialize())
    print(provider.provider_sheet[0].serialize())
    if not provider:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify({"provider_data": provider.serialize(), "sheet_data": provider.provider_sheet[0].serialize()}), 200

#Endpoint de la planilla del cliente

@api.route('/planilla/cliente', methods=['POST'])
@jwt_required()
def add_planillacliente():
    data = request.get_json()  
    data_name_novia = data.get("name_novia", None)
    data_name_novio = data.get("name_novio", None)
    data_wedding_date = data.get("wedding_date", None)
    data_wedding_time = data.get("wedding_time", None)
    data_place = data.get("place", None)
    data_presupuesto_estimado = data.get("presupuesto_estimado", None)
    data_guests_average = data.get("guests_average", None)
    data_food_question = data.get("food_question", None)
    data_music_question = data.get("music_question", None)
    data_visual_media_question = data.get("visual_media_question", None)
    data_legal_documentation_question = data.get("legal_documentation_question", None)
    data_cloth_question = data.get("cloth_question", None)

    user_data=get_jwt_identity()
    new_planillacliente = Wedding(name_novio=data_name_novio, 
                                  name_novia=data_name_novia, 
                                  wedding_date=data_wedding_date,
                                  place=data_place, 
                                  presupuesto_estimado=data_presupuesto_estimado, 
                                  guests_average=data_guests_average,
                                  food_question=data_food_question, 
                                  music_question=data_music_question, 
                                  visual_media_question=data_visual_media_question,
                                  legal_documentation_question=data_legal_documentation_question,
                                  cloth_question=data_cloth_question, 
                                  wedding_time=data_wedding_time,
                                  user_id=user_data["id"])

    try:
        db.session.add(new_planillacliente)  
       
        db.session.commit() 
        return jsonify(new_planillacliente.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 



#Planilla provider

@api.route('/planilla/provider', methods=['POST'])
@jwt_required()
def add_sheet_provider():
    data = request.get_json()  
    data_company_name = data.get("company_name", None)
    data_RIF = data.get("RIF", None)
    data_company_industry = data.get("company_industry", None)
    data_company_description = data.get("company_description", None)
    data_presupuesto_minimo_de_usuario = data.get("presupuesto_minimo_de_usuario", None)
    data_clients_amount_per_month_question = data.get("clients_amount_per_month_question", None)
    data_clients_amount_per_month_value = data.get("clients_amount_per_month_value", None)
    data_clients_amount_per_wedding_question = data.get("clients_amount_per_wedding_question", None)
    data_clients_amount_per_wedding_value = data.get("clients_amount_per_wedding_value", None)

    # if not data_company_name or not data_RIF or not data_company_industry or not data_company_description or not data_presupuesto_minimo_de_usuario or not data_clients_amount_per_month_question or not data_clients_amount_per_wedding_question:
    #     return jsonify({"error": "Todos los campos son requeridos"}), 400

    provider_data=get_jwt_identity()
    new_provider_sheet = Provider_sheet( company_name = data_company_name,
                                         RIF = data_RIF,
                                         company_industry = data_company_industry,
                                         company_description = data_company_description,
                                         presupuesto_minimo_de_usuario = data_presupuesto_minimo_de_usuario,
                                         clients_amount_per_month_question = data_clients_amount_per_month_question,
                                         clients_amount_per_month_value = data_clients_amount_per_month_value,
                                         clients_amount_per_wedding_question = data_clients_amount_per_wedding_question,
                                         clients_amount_per_wedding_value = data_clients_amount_per_wedding_value,
                                         provider_id=provider_data["id"])
    print(new_provider_sheet)
    try:
        db.session.add(new_provider_sheet)  
        db.session.commit() 
        return jsonify(new_provider_sheet.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 



@api.route('/membresia/cliente', methods=['POST'])
@jwt_required()
def add_membresiacliente():
    data = request.get_json()
    data_plan_type = data.get("plan_type", None)

    wedding_data=get_jwt_identity()
    new_membresia_cliente = User_membership(plan_type=data_plan_type, wedding_id=wedding_data["id"])
    
    try:
        db.session.add(new_membresia_cliente)  
        db.session.commit() 
        return jsonify(new_membresia_cliente.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 


@api.route('/membresia/proveedor', methods=['POST'])
@jwt_required()
def add_provider_membership():
    data = request.get_json()
    data_plan_type = data.get("plan_type", None)

    provider_data=get_jwt_identity()
    provider_sheet = Provider_sheet.query.filter_by(provider_id = provider_data["id"]).first()
    new_provider_membership = Provider_membership(plan_type=data_plan_type, provider_sheet_id=provider_sheet.id)
    
    try:
        db.session.add(new_provider_membership)  
       
        db.session.commit() 
        return jsonify(new_provider_membership.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 


@api.route("/user/providers", methods=["GET"])
@jwt_required()
def get_user_providers():
    token_data = get_jwt_identity()
    user_wedding = Wedding.query.filter_by(user_id=token_data["id"]).first()
    wedding_membership = user_wedding.membership[0]
    if wedding_membership.plan_type == "Luxe":
        providers = Provider.query.all()
        formated_providers = []
        for provider in providers:
            provider_sheet = Provider_sheet.query.filter_by(provider_id=provider.id).first()
            if provider_sheet:
                provider_data = provider_sheet.serialize()
                provider_data["company_name"] = provider.company_name
                provider_data["company_email"] = provider.company_email
                if provider_data["presupuesto_minimo_de_usuario"] > user_wedding.presupuesto_estimado:
                    provider_data["budget"] = "No aplica"
                formated_providers.append(provider_data)
        return jsonify(formated_providers)

    providers = Provider_membership.query.filter_by(
        plan_type=wedding_membership.plan_type).all()
    formated_providers = []
    for provider in providers:
        print(provider.serialize())
        provider_sheet = Provider_sheet.query.filter_by(id=provider.provider_sheet_id).first()
        if provider_sheet:
            provider_data = provider_sheet.serialize()
            provider_info = Provider.query.filter_by(id=provider_sheet.provider_id).first()
            provider_data["company_name"] = provider_info.company_name
            provider_data["company_email"] = provider_info.company_email
            if provider_data["presupuesto_minimo_de_usuario"] > user_wedding.presupuesto_estimado:
                provider_data["budget"] = "No aplica"
            formated_providers.append(provider_data)

    return jsonify(formated_providers)


@api.route("/contact/<int:provider_id>", methods=["POST"])
@jwt_required()
def create_contact(provider_id):
    user = get_jwt_identity()
    try: 
        new_contact = Contact(user_id = user["id"], provider_id = provider_id)
        db.session.add(new_contact)
        db.session.commit()
        return jsonify("Contacto creado"), 201
    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 
    

@api.route("/contact", methods=["GET"])
@jwt_required()
def get_contact():
    user = get_jwt_identity()
    contacts = Contact.query.filter_by(user_id = user["id"]).all()
    contacts_info = []
    for contact in contacts:
        provider = Provider.query.filter_by(id = contact.provider_id).first()
        contacts_info.append(provider.serialize())
    print(contacts_info)
    return jsonify({"data": contacts_info }), 200