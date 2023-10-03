import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import { ProfilePersonalDataUser } from "../component/ProfilePersonalDataUser.jsx";
import { ProfileTodosUser } from "../component/ProfileTodosUser.jsx";
import { ProfileInfoUser } from "../component/ProfileInfoUser.jsx";
import { ProfileGuidesUser } from "../component/ProfileGuidesUser.jsx";
import { ProfileListaProveedoresUser } from "../component/ProfileListaProveedoresUser.jsx";
import { ProfilePregFrecuentes } from "../component/ProfilePregFrecuentes.jsx";


export const ProfileCliente = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    useEffect(() => {
        if (store.token === "" || !store.token) {
            navigate("/");
        }
        actions.getUserInfo()
    }, []);

    return (
        <>
            {store.userData != {} ? (

                <div className="container">
                    <div className="profile-fondo">
                        <div className="row mb-5 mt-5 p-3">

                            <ProfilePersonalDataUser />

                            <div className="col-9 profile-layout1 mt-2">
                                <div>
                                    <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                                        <li className="nav-item " role="presentation">
                                            <button className="nav-link active text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><strong>To Do Lists</strong></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><strong>Perfil</strong></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><strong>Guías</strong></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#qa-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><strong>Preguntas Frecuentes</strong></button>
                                        </li>
                                    </ul>

                                    <div className="tab-content mh-100" id="myTabContent">

                                        <ProfileTodosUser />

                                        <ProfileInfoUser />

                                        <ProfileGuidesUser />

                                        <ProfilePregFrecuentes />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container mb-5 mt-5 gap-3">
                            <div className="row">
                                <div className="profile-presu col-12 col-md-6" >
                                    <div>
                                        <h4 className="text-center"><strong>Planificador de Presupuesto de Boda</strong></h4>
                                        <p className="text-center">Es más fácil e inteligente que el típico presupuestador. En realidad.</p>
                                    </div>
                                    <div>
                                        <div class="input-group mb-4 mt-2">
                                            <span className="input-group-text">Venue</span>
                                            <input type="text" aria-label="Presupuesto" className="form-control" placeholder="Presupuesto" />
                                            <input type="text" aria-label="Valor Actual" className="form-control" placeholder="Valor Actual" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="input-group mb-4 mt-2">
                                            <span className="input-group-text">Fotografo</span>
                                            <input type="text" aria-label="Presupuesto" className="form-control" placeholder="Presupuesto" />
                                            <input type="text" aria-label="Valor Actual" className="form-control" placeholder="Valor Actual" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="input-group mb-4 mt-2">
                                            <span className="input-group-text">Musica</span>
                                            <input type="text" aria-label="Presupuesto" className="form-control" placeholder="Presupuesto" />
                                            <input type="text" aria-label="Valor Actual" className="form-control" placeholder="Valor Actual" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="input-group mb-4 mt-2">
                                            <span className="input-group-text">Comida</span>
                                            <input type="text" aria-label="Presupuesto" className="form-control" placeholder="Presupuesto" />
                                            <input type="text" aria-label="Valor Actual" className="form-control" placeholder="Valor Actual" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="input-group mb-4 mt-2">
                                            <span className="input-group-text">Bebidas Alcoholicas</span>
                                            <input type="text" aria-label="Presupuesto" className="form-control" placeholder="Presupuesto" />
                                            <input type="text" aria-label="Valor Actual" className="form-control" placeholder="Valor Actual" />
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-expert col-12 col-md-6">
                                    <div className="row gap-3 ">
                                        <div className="col-12 pb-3 pt-3">
                                            <h4><strong>Asesoramiento & Soporte</strong></h4>
                                            <p>Conéctese con Team-Z, nuestros asesores expertos en bodas. Están aquí para escucharlo y ayudarlo todos los días de su viaje de planificación de bodas.</p>
                                            <button type="button" className="btn">Agenda un cita si tienes tu plan Luxe</button>
                                        </div>
                                        <div className="col-12 pb-3 pt-3">
                                            <h4><strong>Consejos de Proveedores Expertos</strong></h4>
                                            <p>Palabras de sabiduría para cada momento y pregunta.</p>
                                            <button type="button" className="btn">Agenda un cita si tienes tu plan Luxe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-prov-back">

                        <ProfileListaProveedoresUser />

                    </div>
                </div>
            )
                :
                <div>
                    No information on system
                </div>}

        </>
    );
};