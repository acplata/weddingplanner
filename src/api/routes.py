"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provider, Wedding, Provider_sheet
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
       print(user_token)
       return jsonify({"token": user_token})
    
    else: 
        return jsonify({"error": "Contraseña inválida"})


@api.route('/profile/user', methods=['GET'])
@jwt_required()
def get_private_info_from_user():
    user = get_jwt_identity()
    return jsonify({"data": user}), 200


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
       print(user_token)
       return jsonify({"token": user_token})
    
    else: 
        return jsonify({"error": "Contraseña inválida"})


@api.route('/profile/provider', methods=['GET'])
@jwt_required()
def get_private_info_from_provider():
    provider = get_jwt_identity()
    return jsonify({"data": provider}), 200

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
    data_clients_amount_per_wedding_question = data.get("clients_amount_per_wedding_question", None)

    # if not data_company_name or not data_RIF or not data_company_industry or not data_company_description or not data_presupuesto_minimo_de_usuario or not data_clients_amount_per_month_question or not data_clients_amount_per_wedding_question:
    #     return jsonify({"error": "Todos los campos son requeridos"}), 400

    provider_data=get_jwt_identity()
    new_provider_sheet = Provider_sheet( company_name = data_company_name,
                                         RIF = data_RIF,
                                         company_industry = data_company_industry,
                                         company_description = data_company_description,
                                         presupuesto_minimo_de_usuario = data_presupuesto_minimo_de_usuario,
                                         clients_amount_per_month_question = data_clients_amount_per_month_question,
                                         clients_amount_per_wedding_question = data_clients_amount_per_wedding_question,
                                         provider_id=provider_data["id"])
    print(new_provider_sheet)
    try:
        db.session.add(new_provider_sheet)  
        db.session.commit() 
        return jsonify(new_provider_sheet.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 


