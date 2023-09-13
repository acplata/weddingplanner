import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

const initialValue = {
    email: "",
    password: "",
};

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [registerClient, setRegisterClient] = useState(initialValue);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setRegisterClient({ ...registerClient, [e.target.name]: e.target.value })
    };

    const handleSubmit = () => {
        actions.registerUser(registerClient)
        navigate('/login');
    };

    return (
        <div className="register container">
            <form>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" name="lastname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">No compartiremos tu email con nadie.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Soy un humano</label>
                </div>
                <button type="button" className="btn btn-white" onClick={handleSubmit}>¡Regístrate!</button>
            </form>
        </div>

    );
};
