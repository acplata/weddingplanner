import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MembresiaCliente = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="membresiacliente container">
                <div className="row">
                    <div className="card col-6">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Plan Basico</strong></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-white">Escoge Basico</a>
                        </div>
                    </div>
                    <div className="card col-6">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Plan Luxe</strong></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-white">Escoge Luxe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
