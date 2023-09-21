import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MembresiaCliente = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const selectMembership = (membership) => {
        console.log("membresia", membership)
        const reqBody = { plan_type: membership }

        if (
            actions.addMembership(reqBody) == true
        ) {
            navigate('/profile/user');
        }
        else {
            alert("No escogiste un plan")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="membresiatitle">
                    <h2><strong>Opciones de Membresia al Cliente</strong></h2>
                </div>
                <div className="membresiacliente">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card">
                                <img src="https://cdn.caratsandcake.com/_images/cache/ashley-and-benjamin-martoca-beach-garden-0113-259022-1691165054.jpg" className="card-img-top1" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Plan Basico</strong></h5>
                                    <p className="card-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Mensual</li>
                                        <li>5 guias con tips y 5 listas de todo tipo para planificar tu matrimonio</li>
                                        <li>Acceso 500 proveedores en cada industria</li>
                                        <li>Ayuda paso a paso para construir tu matrimonio sonado</li>
                                    </ul>
                                    <button className="btn btn-white mb-3 mt-3 w-100 d-flex justify-content-center" onClick={() => selectMembership("Basico")}>2% del presupuesto</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card">
                                <img src="https://cdn.caratsandcake.com/_images/cache/merritt-and-spencer-austin-country-club-18-190972-1643350434.jpg" className="card-img-top1" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Plan Luxe</strong></h5>
                                    <p className="card-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Mensual</li>
                                        <li>10 guias y 8 listas con tips de todo tipo para planificar tu matrimonio</li>
                                        <li>Acceso al doble de proveedores que en el basico</li>
                                        <li>Una reunion final con una wedding planner</li>
                                    </ul>
                                    <button className="btn btn-white mb-3 mt-3 w-100 d-flex justify-content-center" onClick={() => selectMembership("Luxe")}>8% del presupuesto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
