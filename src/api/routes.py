"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provider
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