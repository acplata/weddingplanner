import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const initialValue = {
    company_email: "",
    password: "",
};
export const LoginProveedor = () => {
    const { store, actions } = useContext(Context);
    const [loginInfo, setloginInfo] = useState(initialValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setloginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    };

    const handleSend = async () => {
        const result = await actions.loginProvider(loginInfo);
        console.log(result)
        if (result) return navigate("/planilla/provider");
        alert("Inicio de sesión inválido")
    };


    return (
        <div>
            <div className="logintemplate">
                <div className="row container">
                    <div className="col-12 col-lg-3">
                        <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/carole-and-joseph-marriott-irvine-spectrum-48-207880-1657306429.jpg" alt="flower" height="500" />
                    </div>
                    <form className="col-12 col-lg-6">
                        <h2 className="d-flex justify-content-center fw-bold">Proveedor</h2>
                        <div className="registerproveedor mt-4">
                            <div className="login-title mb-4"><strong>Inicia Sesión</strong></div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email</strong></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="company_email" onChange={handleChange} />
                                <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><strong>Contraseña</strong></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                            </div>
                            <div>
                                <p>¿Se te olvidó tu contraseña?</p>
                            </div>
                            <button type="button" className="btn btn-white mb-3" onClick={handleSend} >Ingresar</button>
                        </div>
                    </form>
                    <div className="col-12 col-lg-3">
                        <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/katie-and-jason-the-mansion-at-natirar-14-198275-1649728330.jpg" alt="flower" height="500" />
                    </div>
                </div>
            </div>
        </div>
    );
};
