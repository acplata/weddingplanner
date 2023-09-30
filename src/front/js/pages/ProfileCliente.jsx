import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import { ProfilePersonalDataUser } from "../component/ProfilePersonalDataUser.jsx";
import { ProfileTodosUser } from "../component/ProfileTodosUser.jsx";
import { ProfileInfoUser } from "../component/ProfileInfoUser.jsx";
import { ProfileGuidesUser } from "../component/ProfileGuidesUser.jsx";
import { ProfileListaProveedoresUser } from "../component/ProfileListaProveedoresUser.jsx";


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
                    <div className="row mb-5">

                        <ProfilePersonalDataUser />

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

                                <div className="tab-content mh-100" id="myTabContent">

                                    <ProfileTodosUser />

                                    <ProfileInfoUser />

                                    <ProfileGuidesUser />

                                </div>
                            </div>
                        </div>

                    </div>

                    <ProfileListaProveedoresUser />

                </div>

            )
                :
                <div>
                    No information on system
                </div>}

        </>
    );
};