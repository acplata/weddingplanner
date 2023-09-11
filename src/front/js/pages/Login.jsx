import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="row container d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-3">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Anna-and-Adam-Private-Residence-47-253992-1683488487.jpg" alt="flower" height="500" />
                </div>
                <form className="col-12 col-lg-6">
                    <div className="login p-5 mt-5">
                        <div className="login-title mb-4"><strong>A+M Wedding Planners</strong></div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><strong>Email</strong></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><strong>Contrasena</strong></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div>
                            <p>Se te olvido tu contrasena?</p>
                        </div>
                        <button type="submit" className="btn btn-white">Ingresar</button>
                    </div>
                </form>
                <div className="col-12 col-lg-3">
                    <img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/Anna-and-Adam-Private-Residence-51-253998-1683488491.jpg" alt="flower" height="500" />
                </div>
            </div>
        </div>
    );
};
