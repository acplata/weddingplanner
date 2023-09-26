import React, { useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

const initialValue = {
    email: "",
    password: "",
};

export const RegisterCliente = () => {
    const { store, actions } = useContext(Context);
    const [registerClient, setRegisterClient] = useState(initialValue);
    const navigate = useNavigate();
    const [isHuman, setIsHuman] = useState(false)

    const handleChange = (e) => {
        setRegisterClient({ ...registerClient, [e.target.name]: e.target.value })
    };

    const handleSubmit = () => {
        const result = actions.registerUser(registerClient);
        console.log(result)
        if (result) return navigate('/login/user');
        toast.error("Hay un error en el registro");
    };

    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Jennifer-and-George-Housto-Oaks-Country-Club-02-254074-1683495092.jpg" alt="flower" height="600" />
                </div>
                <div className="register col-12 col-md-6">
                    <form>
                        <h2 className="registertitle mb-4 mt-4"><strong>Registro de Cliente</strong></h2>
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

                        <button type="button" className="btn btn-white mb-4" disabled={!isHuman} onClick={handleSubmit}>¡Regístrate!</button>

                    </form>
                </div>
            </div >

        </div >
    );
};
