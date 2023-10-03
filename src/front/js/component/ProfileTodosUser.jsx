import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const ProfileTodosUser = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getContacts()
    }, [])

    return (
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            <ul className="mt-3 row">
                {
                    store.contacts.map((contact) => {
                        return (
                            <div className="col-4">
                                <div className="card border-warning mb-3">
                                    <div className="card-header" key={contact.id}> <b>{contact.company_name}</b></div>
                                    <div className="card-body">
                                        <p className="card-text">{contact.company_email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}