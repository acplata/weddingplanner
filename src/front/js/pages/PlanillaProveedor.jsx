import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "../../styles/home.css";

const initialValue = {
    company_name: "",
    RIF: 0,
    company_industry: "",
    company_description: "",
    presupuesto_minimo_de_usuario: 0,
    clients_amount_per_month_question: false,
    clients_amount_per_month_value: "",
    clients_amount_per_wedding_question: false,
    clients_amount_per_wedding_value: "",
}

export const PlanillaProveedor = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [newProvider, setNewProvider] = useState(initialValue);

    const handleChange = (event) => {
        const inputRegister = { ...newProvider, [event.target.name]: event.target.value };
        setNewProvider(inputRegister);
    };

    const addNewProvider = () => {
        actions.addProvider(newProvider);
        console.log(newProvider)
        navigate('/membresia/provider');
    };

    const handleChangeRadio = (event, value) => {
        const radioChange = { ...newProvider, [event.target.name]: value };
        setNewProvider(radioChange);
    };

    return (
        <div className="planilla-provider">
            <div className="planilla2 container col-12">
                <div className="text-info-emphasis d-flex justify-content-center align-items-center gap-2 col-12">
                    <h3 className="mb-3 mt-3" ><strong>Información general de compañía </strong></h3>
                    <div className="btn" id="info"><i className="fa-regular fa-circle-question"></i></div>
                    <Tooltip anchorSelect="#info"> <p>Rellene los siguientes campos de acuerdo a la información de su compañía. Requerimos de dichos datos para conocer sus necesidades </p></Tooltip>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre de compañía</label>
                    <input type="text" className="form-control" name="company_name" id="formGroupExampleInput" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">RIF</label>
                    <input type="text" className="form-control" name="RIF" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Industria de compañía</label>
                    <input type="text" className="form-control" name="company_industry" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Descripción de compañía</label>
                    <input type="text" className="form-control" name="company_description" id="formGroupExampleInput2" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label" >Presupuesto mínimo por cliente</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-white">$</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="$0 - $100,000" name="presupuesto_minimo_de_usuario" onChange={handleChange} />
                    </div>
                </div>

                <p className="mb-4 mt-4">Marque los siguientes campos segun las condiciones de su empresa:</p>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">¿Tiene un mínimo de clientes por mes?</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="clients_amount_per_month_question" id="gridRadios1" checked={newProvider.clients_amount_per_month_question} onChange={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="clients_amount_per_month_question" id="gridRadios2" checked={!newProvider.clients_amount_per_month_question} onChange={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Indique la cantidad aproximada:</label>
                            <input type="text" className="form-control" name="clients_amount_per_month_value" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">¿Tiene un mínimo de clientes por boda? </legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="clients_amount_per_wedding_question" id="gridRadios1" checked={newProvider.clients_amount_per_wedding_question} onChange={(event) => handleChangeRadio(event, true)} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Si
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="clients_amount_per_wedding_question" id="gridRadios2" checked={!newProvider.clients_amount_per_wedding_question} onChange={(event) => handleChangeRadio(event, false)} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Indique cantidad aproximada:</label>
                            <input type="text" className="form-control" name="clients_amount_per_wedding_value" id="formGroupExampleInput2" onChange={handleChange} />
                        </div>
                    </div>
                </fieldset>
                <div>
                    <button type="submit" className="btn btn-white mb-5" onClick={addNewProvider}>¡Enviar!</button>
                </div>
            </div>
        </div>
    );
};
