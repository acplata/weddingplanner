import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MembresiaCliente = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const selectMembership = (membership) => {
        console.log("membresia", membership)
        const reqBody = { plan_type: membership }
        const result = actions.addUserMembership(reqBody);
        if (result) return navigate('/profile/user');
        toast.error("No escogiste un plan");
    }

    return (
        <div>
            <div className="container">
                <div className="membresiatitle">
                    <h2><strong>Seleccione una membresía</strong></h2>
                </div>
                <div className="membresiacliente">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="cardmemb">
                                <img src="https://cdn.caratsandcake.com/_images/cache/Caroline-and-Sam-Brooklyn-Courthouse-62-252157-1682090359.jpg" className="cardmemb-img-top1 membership-user-images mb-3" alt="..." />
                                <div className="cardmemb-body">
                                    <h5 className="cardmemb-title"><strong>Plan Basico</strong></h5>
                                    <p className="cardmemb-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Pago mensual.</li>
                                        <li>5 guías con tips para crear tu boda desde cero.</li>
                                        <li>5 listas de secciones necesarias para planificar tu matrimonio.</li>
                                        <li>Acceso a 500 proveedores en cada industria segun tus necesidades.</li>
                                        <li>Solo la experiencia vale la pena.</li>
                                    </ul>
                                    <button className="btn btn-white mb-3 mt-3 w-100 d-flex justify-content-center" onClick={() => selectMembership("Basico")}>2% del presupuesto</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="cardmemb">
                                <img src="https://cdn.caratsandcake.com/_images/cache/merritt-and-spencer-austin-country-club-18-190972-1643350434.jpg" className="cardmemb-img-top1 membership-user-images mb-3" alt="..." />
                                <div className="cardmemb-body">
                                    <h5 className="cardmemb-title"><strong>Plan Luxe</strong></h5>
                                    <p className="cardmemb-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Pago personalizado según metas de la boda.</li>
                                        <li>Guías personalizadas para crear tu boda.</li>
                                        <li>Lista adaptada a las necesidades de tu boda.</li>
                                        <li>Acceso al doble de proveedores que en el plan básico.</li>
                                        <li>Asistencia de una wedding planner para el cumplimiento de objetivos.</li>
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
