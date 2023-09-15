import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const initialValue = {

    vestimenta: false,
    nombreNovio: "",
    nombreNovia: "",
    fecha: "",
    cantidadInvitados: 0,
    hora: "",
    lugar: "",
    presupuesto: 0,
    comida: false,
    musica: false,
    fotovideo: false,
    tramites: false,

}

export const PlanillaCliente = () => {
    const { actions } = useContext(Context);

    const param = useParams();

    const [newWedding, setNewWedding] = useState(initialValue);

    const handleChange = (event) => {
        const inputRegister = { ...newWedding, [event.target.name]: event.target.value };
        setNewWedding(inputRegister);
    };

    const addNewWedding = () => {
        // actions.addWedding(newWedding);
        console.log(newWedding)
    };

    const handleChangeRadio = (event, value) => {
        const radioChange = { ...newWedding, [event.target.name]: value };
        setNewWedding(radioChange);
    };

    return (
        <div className="planilla">
            <div className="planilla2 container">
                <div className="planillatitle d-flex justify-content-center align-items-center">
                    <h3 className="mb-3 mt-3" ><strong>¡Informacion de tu Boda!</strong></h3>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre de la Novia</label>
                    <input type="text" className="form-control" name="nombreNovia" id="formGroupExampleInput" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Nombre del Novio</label>
                    <input type="text" className="form-control" name="nombreNovio" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Fecha del Matrimonio</label>
                    <input type="text" className="form-control" name="fecha" id="formGroupExampleInput2" placeholder="DD/MM/YYYY" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Cantidad de Invitados Estimado</label>
                    <input type="text" className="form-control" name="cantidadInvitados" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">¿Boda Diurna o Nocturna?</label>
                    <input type="text" className="form-control" name="hora" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Lugar y descripcion del venue soñado</label>
                    <input type="text" className="form-control" name="lugar" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Presupuesto Total</label>
                    <input type="text" className="form-control" name="presupuesto" id="formGroupExampleInput2" placeholder="$0 - $5,000" onChange={handleChange} />
                </div>
                <p className="mb-4 mt-4">Marque los siguientes campos en los que esté interesado en obtener proveedores:</p>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Comida</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="comida" id="gridRadios1" checked={newWedding.comida} onClick={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="comida" id="gridRadios2" checked={!newWedding.comida} onClick={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Musica</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="musica" id="gridRadios1" checked={newWedding.musica} onClick={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="musica" id="gridRadios2" checked={!newWedding.musica} onClick={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Fotografia y/o Video</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="fotovideo" id="gridRadios1" checked={newWedding.fotovideo} onClick={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="fotovideo" id="gridRadios2" checked={!newWedding.fotovideo} onClick={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Tramites Legales y/o Religiosos</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="tramites" id="gridRadios1" checked={newWedding.tramites} onClick={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="tramites" id="gridRadios2" checked={!newWedding.tramites} onClick={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Vestimenta</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="vestimenta" id="gridRadios1" checked={newWedding.vestimenta} onClick={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="vestimenta" id="gridRadios2" checked={!newWedding.vestimenta} onClick={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <div>
                    <button type="submit" className="btn btn-white mb-5" onClick={addNewWedding}>¡Enviar!</button>
                </div>
            </div>
        </div>
    );
};
