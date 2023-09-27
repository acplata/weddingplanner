import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import { ProfilePersonalData } from "../component/ProfilePersonalData.jsx";
import { ProfileTodos } from "../component/ProfileTodos.jsx";
import { ProfileInfo } from "../component/ProfileInfo.jsx";
import { ProfileGuides } from "../component/ProfileGuides.jsx";
import { ProfileListaProveedores } from "../component/ProfileListaProveedores.jsx";


export const ProfileCliente = () => {

    return (
        <>

            <div>
                <div className="container">
                    <div class="row">

                        <ProfilePersonalData />

                        <div className="col-9 profile-layout1 mt-2">
                            <div>
                                <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                                    <li className="nav-item " role="presentation">
                                        <button className="nav-link active text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">To Do Lists</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Perfil</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Guías</button>
                                    </li>
                                </ul>

                                {/*  Todos */}
                                <div className="tab-content" id="myTabContent">

                                    <ProfileTodos />

                                    <ProfileInfo />

                                    <ProfileGuides />

                                </div>
                            </div>
                        </div>

                    </div>

                    <ProfileListaProveedores />

                </div>
            </div>

        </>
    );
};