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

        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Jennifer-and-George-Housto-Oaks-Country-Club-02-254074-1683495092.jpg" alt="flower" height="600" />
                </div>
                <div className="register col-12 col-md-6">
                    <form>
                        <h2 className="registertitle mb-4 mt-4"><strong>A+M Wedding Planners</strong></h2>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" name="name" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" name="lastname" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                        </div>
                        <div className="mb-3 form-check d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Soy un humano</label>
                        </div>
                        <button type="button" className="btn btn-white mb-4" onClick={handleSubmit}>¡Regístrate!</button>
                    </form>
                </div>
            </div>

        </div>

    );
};
