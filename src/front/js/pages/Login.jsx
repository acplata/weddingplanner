import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const initialValue = {
    email: "",
    password: "",
};

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [loginInfo, setloginInfo] = useState(initialValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setloginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    };

    const handleSend = async () => {
        const result = await actions.loginUser(loginInfo);
        console.log(result)
        if (result) return navigate("/profile/user");
        alert("Inicio de sesión inválido")
    };

    return (
        <div>
            <div className="logintemplate">
                <div className="row container mt-5">
                    <div className="col-12 col-lg-3">
                        <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Anna-and-Adam-Private-Residence-47-253992-1683488487.jpg" alt="flower" height="500" />
                    </div>
                    <form className="col-12 col-lg-6">
                        <h2 className="d-flex justify-content-center align-items-center"><strong>CLIENTE</strong></h2>
                        <div className="login mt-4">
                            <div className="login-title mb-4"><strong>Inicia Sesión</strong></div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email</strong></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                                <div id="emailHelp" className="form-text">No compartiremos tu email con nadie.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><strong>Contraseña</strong></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                            </div>
                            <div>
                                <p>¿Se te olvidó tu contraseña?</p>
                            </div>
                            <button type="button" className="btn btn-white mb-3" onClick={handleSend}>Ingresar</button>
                        </div>
                    </form>
                    <div className="col-12 col-lg-3">
                        <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Anna-and-Adam-Private-Residence-51-253998-1683488491.jpg" alt="flower" height="500" />
                    </div>
                </div>
            </div>
        </div>
    );
};
