import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RegisterProveedor = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="registerproveedor col-12 col-md-6">
                    <form>
                        <h2 className="registerprovtitle mb-4 mt-4"><strong>A+M Wedding Planners</strong></h2>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Nombre de la Compania</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">RIF</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check d-flex justify-content-center align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Soy un humano</label>
                        </div>
                        <button type="submit" className="btn btn-white mb-3">¡Regístrate!</button>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Hannah-and-Wyatt-Mansion-on-Turtle-Creek-35-254037-1683491086.jpg" alt="flower" height="600" />
                </div>
            </div>
        </div>

    );
};