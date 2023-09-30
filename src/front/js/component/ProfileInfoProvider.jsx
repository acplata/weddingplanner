import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ProfileInfoProvider = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <p className="mt-3"><b>Presupuesto mínimo de trabajo:</b> {store.sheetData?.presupuesto_minimo_de_usuario}</p>
            <p><b>Límite de clientes por mes:</b>  {store.sheetData?.clients_amount_per_month_value == 0 ? "Ninguno" : store.sheetData?.clients_amount_per_month_value} </p>
            <p><b>Límite de clientes por boda:</b> {store.sheetData?.clients_amount_per_wedding_value == 0 ? "Ninguno" : store.sheetData?.clients_amount_per_wedding_value} </p>
        </div>
    )
}