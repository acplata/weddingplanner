import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const ProfileCliente = () => {

    return (
        <div>
            <div className="container">
                <div class="row">
                    <div class="col-4">
                        <div className="container d-flex justify-content-center align-items center">
                            <h2>Tu Boda</h2>
                        </div>
                        <div className="container d-flex justify-content-center align-items center mb-3 mt-3">
                            <img src="https://cdn.caratsandcake.com/_images/cache/Brittany-and-Jack-Fitzroy-Gardens-013-253618-1683228504.jpg" className="card-profile-img" alt="..." />
                        </div>
                        <div className="container text-center">
                            <h4>Bettina & Gustavo</h4>
                            <p>1 de Octubre de 2023</p>
                            <p>Caracas, Venezuela</p>
                        </div>
                    </div>
                    <div class="col-8">
                        <div>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-todo-tab" data-bs-toggle="pill" data-bs-target="#pills-todo" type="button" role="tab" aria-controls="pills-todo" aria-selected="true">To Do List</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-proveedor-tab" data-bs-toggle="pill" data-bs-target="#pills-proveedor" type="button" role="tab" aria-controls="pills-proveedor" aria-selected="false">Proveedores</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-guia-tab" data-bs-toggle="pill" data-bs-target="#pills-guia" type="button" role="tab" aria-controls="pills-guia" aria-selected="false">Guias y Consejos</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-todo" role="tabpanel" aria-labelledby="pills-todo-tab">


                                </div>
                                <div className="tab-pane fade" id="pills-proveedor" role="tabpanel" aria-labelledby="pills-proveedor-tab">


                                </div>
                                <div className="tab-pane fade" id="pills-guia" role="tabpanel" aria-labelledby="pills-guia-tab">
                                    <div className="card-profile-guia">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card-profile-guia">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card-profile-guia">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};