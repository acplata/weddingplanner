import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Register = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="register container">
            <form>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">No compartiremos tu email con nadie.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Soy un humano</label>
                </div>
                <button type="submit" class="btn btn-white">¡Regístrate!</button>
            </form>
        </div>

    );
};
