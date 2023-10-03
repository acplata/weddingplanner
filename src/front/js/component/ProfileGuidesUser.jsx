import React from "react";

export const ProfileGuidesUser = () => {
    return (
        <div className=" profile-row container overflow-y-scroll tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">

            <div className="profile-guide-layout mt-2">
                <div className="card-profile-guia">
                    <div className="card-body">
                        <h5 className="card-title"><strong>5 pasos para tu boda soñada</strong></h5>
                        <p className="card-text mt-3">Cada equipo de proveedores de bodas se crea de manera un poco diferente. En esta serie exploramos cómo y por qué cada pareja seleccionó el equipo de proveedores de bodas adecuado para el día de su boda.</p>
                        <a href="#" className="card-link">Más información</a>
                    </div>
                </div>
            </div>

            <div className="profile-guide-layout mt-2">
                <div className="card-profile-guia">
                    <div className="card-body">
                        <h5 className="card-title"><strong>Arma tu boda en un 2 x 3</strong></h5>
                        <p className="card-text mt-3">Si alguna vez hubo un momento para hacer una gran entrada frente a todos sus seres más cercanos y queridos, es caminar hacia el altar en su boda. Pero además de considerar qué canción debería sonar y obviamente qué usarás, ¡otro factor clave en este gran debut es cómo se decorará el pasillo!</p>
                        <a href="#" className="card-link">Clic para ver artículo</a>
                    </div>
                </div>
            </div>

            <div className="profile-guide-layout mt-2">
                <div className="card-profile-guia">
                    <div className="card-body mb-2">
                        <h5 className="card-title"><strong>Errores comunes en tu boda</strong></h5>
                        <p className="card-text mt-3">Bienvenido a Wedding Day Countdown, una serie en la que les pedimos a amigos y creadores de tendencias que echen un vistazo a lo que *realmente* sucedió en su gran día. Desde la mañana hasta la cuenta regresiva final y el minuto siguiente, le brindamos un vistazo exclusivo a algunas de sus bodas favoritas que no debe perderse.</p>
                        <a href="#" className="card-link">Artículo completo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}