import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

const initialValue = {
    company_name: "",
    company_email: "",
    password: "",
};


export const RegisterProveedor = () => {
    const { store, actions } = useContext(Context);
    const [registerProvider, setRegisterProvider] = useState(initialValue);
    const [isHuman, setIsHuman] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegisterProvider({ ...registerProvider, [e.target.name]: e.target.value })
    };

    const handleSubmit = () => {
        const result = actions.registerProvider(registerProvider);
        if (result) return navigate('/login/provider');
        toast.error("Hay un error en el registro");
    };


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="registerproveedor col-12 col-md-6">
                    <form>
                        <h2 className="registerprovtitle mb-4 mt-4"><strong>Registro de proveedor</strong></h2>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Nombre de la Compania</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" name="company_name" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="company_email" onChange={handleChange} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                        </div>
                        <div className="mb-3 form-check d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={isHuman} onClick={() => {
                                setIsHuman(!isHuman)
                            }} />

                            <label className="form-check-label" htmlFor="exampleCheck1">Soy un humano</label>
                        </div>
                        <button type="button" className="btn btn-white mb-3" disabled={!isHuman} onClick={handleSubmit}>¡Regístrate!</button>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Hannah-and-Wyatt-Mansion-on-Turtle-Creek-35-254037-1683491086.jpg" alt="flower" height="600" />
                </div>
            </div>
        </div>

    );
};