import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planilla = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Nombre de la Novia</label>
                <input type="text" className="form-control" id="formGroupExampleInput" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Nombre del Novio</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Fecha del Matrimonio</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="DD/MM/YYYY" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">¿Boda Diurna o Nocturna?</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Descripcion del Venue sonado</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" />
            </div>
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Rango de Presupuesto</option>
                <option value="1">0-$1,000</option>
                <option value="2">$1,001 - $5,000</option>
                <option value="3">5,001 - $10,000</option>
            </select>
            <p className="mb-4 mt-4">Marque los siguientes campos en los que esté interesado en obtener proveedores:</p>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Comida</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                            Si
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>

                </div>
            </fieldset>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Musica</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                            Si
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>

                </div>
            </fieldset>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Fotografia y/o Video</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                            Si
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>

                </div>
            </fieldset>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Tramites Legales</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                            Si
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>

                </div>
            </fieldset>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Vestimenta</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                            Si
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                            No
                        </label>
                    </div>

                </div>
            </fieldset>
        </div>

    );
};
