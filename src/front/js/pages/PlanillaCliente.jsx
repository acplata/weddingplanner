import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const initialValue = {

    name_novio: "",
    name_novia: "",
    wedding_date: "",
    guests_average: 0,
    wedding_time: "",
    place: "",
    presupuesto_estimado: 0,
    food_question: false,
    music_question: false,
    visual_media_question: false,
    legal_documentation_question: false,
    cloth_question: false,

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
        actions.addWedding(newWedding);
        console.log(newWedding)
    };

    const handleChangeRadio = (event, value) => {
        const radioChange = { ...newWedding, [event.target.name]: value };
        setNewWedding(radioChange);
    };

    return (
        <div className="planilla">
            <div className="row">
                <div className="planilla2 container col-12">
                    <div className="planillatitle d-flex justify-content-center align-items-center">
                        <h3 className="mb-3 mt-3" ><strong>¡Informacion de tu Boda!</strong></h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Nombre de la Novia</label>
                        <input type="text" className="form-control" name="name_novia" id="formGroupExampleInput" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Nombre del Novio</label>
                        <input type="text" className="form-control" name="name_novio" id="formGroupExampleInput2" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Fecha del Matrimonio</label>
                        <input type="text" className="form-control" name="wedding_date" id="formGroupExampleInput2" placeholder="YYYY-MM-DD" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Cantidad de Invitados Estimado</label>
                        <input type="text" className="form-control" name="guests_average" id="formGroupExampleInput2" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">¿Boda Diurna o Nocturna?</label>
                        <input type="text" className="form-control" name="wedding_time" id="formGroupExampleInput2" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Lugar y descripcion del venue soñado</label>
                        <input type="text" className="form-control" name="place" id="formGroupExampleInput2" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Presupuesto Total</label>
                        <input type="text" className="form-control" name="presupuesto_estimado" id="formGroupExampleInput2" placeholder="$0 - $100,000" onChange={handleChange} />
                    </div>
                    <p className="mb-4 mt-4">Marque los siguientes campos en los que esté interesado en obtener proveedores:</p>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Comida</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="food_question" id="gridRadios1" checked={newWedding.food_question} onClick={(event) => handleChangeRadio(event, true)} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Si
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="food_question" id="gridRadios2" checked={!newWedding.food_question} onClick={(event) => handleChangeRadio(event, false)} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                                <input type="text" className="form-control" name="food_description" id="formGroupExampleInput2" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Musica</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="music_question" id="gridRadios1" checked={newWedding.music_question} onClick={(event) => handleChangeRadio(event, true)} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Si
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="music_question" id="gridRadios2" checked={!newWedding.music_question} onClick={(event) => handleChangeRadio(event, false)} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                                <input type="text" className="form-control" name="music_description" id="formGroupExampleInput2" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Fotografia y/o Video</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="visual_media_question" id="gridRadios1" checked={newWedding.visual_media_question} onClick={(event) => handleChangeRadio(event, true)} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Si
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="visual_media_question" id="gridRadios2" checked={!newWedding.visual_media_question} onClick={(event) => handleChangeRadio(event, false)} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                                <input type="text" className="form-control" name="visual_media_description" id="formGroupExampleInput2" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Tramites Legales y/o Religiosos</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="legal_documentation_question" id="gridRadios1" checked={newWedding.legal_documentation_question} onClick={(event) => handleChangeRadio(event, true)} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Si
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="legal_documentation_question" id="gridRadios2" checked={!newWedding.legal_documentation_question} onClick={(event) => handleChangeRadio(event, false)} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                                <input type="text" className="form-control" name="legal_documentation_description" id="formGroupExampleInput2" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Vestimenta</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="cloth_question" id="gridRadios1" checked={newWedding.cloth_question} onClick={(event) => handleChangeRadio(event, true)} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Si
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="cloth_question" id="gridRadios2" checked={!newWedding.cloth_question} onClick={(event) => handleChangeRadio(event, false)} />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    No
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion / Keywords:</label>
                                <input type="text" className="form-control" name="cloth_description" id="formGroupExampleInput2" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <button type="submit" className="btn btn-white mb-5" onClick={addNewWedding}>¡Enviar!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
