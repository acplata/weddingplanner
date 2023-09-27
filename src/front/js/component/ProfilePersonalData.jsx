import React from "react";

export const ProfilePersonalData = () => {
    return (
        <div class="col-3 h-100">
            <div class="profile-layout1 mt-2">
                <div class="card-body">

                    <div className="container d-flex justify-content-center align-items center mb-3 mt-3">
                        <img src="https://cdn.caratsandcake.com/_images/cache/Brittany-and-Jack-Fitzroy-Gardens-013-253618-1683228504.jpg" className="card-profile-img" alt="..." />
                    </div>
                    <div className="container text-center">
                        <h5 className="mt-3"><b>Boda de:</b> Daniela</h5>
                        <h6 className="mt-3"><b>ID:</b> 3000</h6>
                    </div>

                    <ul className="list-group list-group-flush mt-3">
                        <li className="list-group-item border-top border-bottom border-warning-subtle"><b>Novio & Novia:</b> Maria & José </li>
                        <li className="list-group-item border-warning-subtle "><b>Fecha:</b> 25-10-2023</li>
                        <li className="list-group-item border-warning-subtle"><b>Lugar:</b> Caracas, La Castellana</li>
                    </ul>

                </div>
            </div>

        </div>
    )

}