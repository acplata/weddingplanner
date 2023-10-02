import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfilePersonalDataProvider = () => {
    const { store, actions } = useContext(Context)


    return (

        <>

            <div className="col-3 h-100">
                <div className="profile-layout1 mt-2">
                    <div className="card-body">

                        <div className="container d-flex justify-content-center align-items center mb-3 mt-3">
                            <img src="https://cdn.caratsandcake.com/_images/cache/Brittany-and-Jack-Fitzroy-Gardens-013-253618-1683228504.jpg" className="card-profile-img" alt="..." />
                        </div>
                        <div className="container text-center">
                            <h5 className="mt-3"><b>Compañía:</b> {store.providerData?.company_name}</h5>
                        </div>

                        <ul className="list-group list-group-flush mt-3">
                            <li className="list-group-item border-top border-bottom border-warning-subtle"><b>RIF:</b> {store.sheetData?.RIF}</li>
                            <li className="list-group-item border-warning-subtle "><b>Industria:</b> {store.sheetData?.company_industry}</li>

                        </ul>

                    </div>
                </div>

            </div>

        </>
    )

}