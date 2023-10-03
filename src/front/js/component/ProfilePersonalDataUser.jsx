import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfilePersonalDataUser = () => {
    const { store, actions } = useContext(Context)


    return (

        <>

            <div className="col-3 h-100">
                <div className="profile-layout1 mt-2 p-3">
                    <div className="card-body">
                        <div className="container d-flex justify-content-center align-items-center mb-3 mt-3">
                            <img src="https://cdn.caratsandcake.com/_images/cache/Brittany-and-Jack-Fitzroy-Gardens-013-253618-1683228504.jpg" className="card-profile-img" alt="..." />
                        </div>
                        <div className="container text-center">
                            <h5 className="mt-3"><b>Boda de:</b> {store.userData?.name}</h5>
                        </div>

                        <ul className="list-group list-group-flush mt-3">
                            <li className="list-group-item border-top border-bottom"><b>Novia & Novio:</b> {store.weddingData?.name_novia} & {store.weddingData?.name_novio} </li>
                            <li className="list-group-item "><b>Fecha:</b> {store.weddingData?.wedding_date}</li>
                            <li className="list-group-item"><b>Lugar:</b> {store.weddingData?.place}</li>
                        </ul>

                    </div>
                </div>

            </div>

        </>
    )

}