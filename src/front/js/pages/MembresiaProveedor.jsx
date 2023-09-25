import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MembresiaProveedor = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const selectProviderMembership = (membership) => {
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
                <div className="d-flex justify-content-center text-info-emphasis">
                    <h2><strong>Seleccione una membresia</strong></h2>
                </div>
                <div className="membresiacliente">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card card-membership-provider">
                                <img src="https://cdn.caratsandcake.com/_images/cache/Jessica-and-Nicholas-Lowndes-Grove-06-231348-1671127193.jpg" className="card-img-top1 membership-card-image" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Plan Básico</strong></h5>
                                    <p className="card-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Pago mensual.</li>
                                        <li>Visibilidad estándar de su compañía.</li>
                                        <li>Recomendación estándar de sus servicios.</li>
                                    </ul>
                                    <button className="btn btn-outline-dark mb-3 mt-3 w-100 d-flex justify-content-center" onClick={() => selectProviderMembership("Basico")}> <b>20$</b></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className=" card card-membership-provider">
                                <img src="https://cdn.caratsandcake.com/_images/cache/jw-marriott-edmonton-ice-district-05-204949-1655234269.jpg" className="card-img-top1 membership-card-image" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Plan Luxe</strong></h5>
                                    <p className="card-text">Este plan incluye:</p>
                                    <ul>
                                        <li>Pago anual.</li>
                                        <li>Mayor visibilidad del rating de su empresa.</li>
                                        <li>Mayor recomendación de los servicios de su empresa en su respectiva sección.</li>
                                        <li>Recomendación de sus servicios directamente al cliente según las características de la boda.</li>
                                        <li>Publicidad de sus servicios en todas nuestras plataformas.</li>
                                        <li>Chat con cliente previo a la adquisición de sus servicios (próximamente).</li>
                                    </ul>
                                    <button className="btn btn-outline-dark mb-3 mt-3 w-100 d-flex justify-content-center" onClick={() => selectProviderMembership("Luxe")}><b>200$</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
