import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const ProfileListaProveedoresUser = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getUserProviders()
    }, [])

    return (
        <div className="mb-3 mt-5">
            <h4 className="mb-3">PROVEEDORES</h4>
            <div>
                <div className="slider container d-flex overflow-x-scroll gap-3 mb-5">

                    {store.userProviders.map((provider) => {
                        return (
                            <div className="col-12 col-md-4 mb-3" key={`${provider.id}-provider`} >
                                <img src="https://cdn.caratsandcake.com/_images/cache/Hannah-and-Max-Rainbow-Room-040-249357-1680209932.jpg" className="card-img-top card-profile" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-text-inspo"><i><strong>{provider.company_name}</strong></i></h2>
                                    <p className="fw-2">{provider.company_industry}</p>
                                    <p>{provider.company_description}</p>
                                    <button className="btn  me-3" onClick={() => actions.createContact(provider.id)}>Contacto</button>
                                    <button className="btn  me-3"><i className="fa-regular fa-star"></i></button>
                                    <button className="btn"><i className="fa-regular fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}