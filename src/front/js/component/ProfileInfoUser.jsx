import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ProfileInfoUser = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <p className="mt-3"><b>Cantidad de invitados:</b> {store.weddingData?.guests_average}</p>
            <p><b>Hora de boda:</b> {store.weddingData?.wedding_time}</p>
            <p><b>Presupuesto inicial:</b>  {store.weddingData?.presupuesto_estimado} </p>
            <p><b>Comida:</b> {store.weddingData?.food_question == true ? "Si" : "No"}</p>
            <p><b>Música:</b> {store.weddingData?.music_question == true ? "Si" : "No"}</p>
            <p><b>Fotografía/Video:</b> {store.weddingData?.visual_media_question == true ? "Si" : "No"}</p>
            <p><b>Trámites legales/Matrimonio:</b> {store.weddingData?.legal_documentation_question == true ? "Si" : "No"}</p>
            <p><b>Vestimenta:</b> {store.weddingData?.cloth_question == true ? "Si" : "No"}</p>
        </div>
    )
}