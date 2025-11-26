import React, { useState, useEffect } from "react";

//React bootstrap
import Form, { Container } from "react-bootstrap/Form";

//React icons
import { AiFillEdit } from "react-icons/ai";

const PacienteDescription = () => {
  const [telNumber, setTelNumber] = useState(true);
  const [social, setSocial] = useState(true);
  const [enTratamientoDisabled, setEnTratamientoDisabled] = useState(false);
  const [conAlergiaDisabled, setConAlegiaDisabled] = useState(false);
  const [enTratamiento, setEnTratamiento] = useState(true);
  const [conAlergia, setConAlergia] = useState(false);
  const [newData, setNewData] = useState({
    phoneNumber: "",
    obraSocial: "",
    enTratamiento: false,
    conAlergia: false,
  });

  console.log("fuera de useEFFECT");

  const handleInputChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { ...newData, conAlergia, enTratamiento };

    console.log(updatedUserData);
  };

  return (
    <>
      {" "}
      <Form className="paciente-description-container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="phone-number">
          <Form.Label style={{ width: "100%" }}>
            <div className="edit-input-icon">
              <strong>Número de teléfono</strong>
              <AiFillEdit
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  setTelNumber(!telNumber);
                }}
              />
            </div>
          </Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            disabled={telNumber}
            value={newData.phoneNumber}
            onChange={handleInputChange}
            placeholder={`+454545445454`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="obra-social-user">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>Obra social</strong>
              <AiFillEdit
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  setSocial(!social);
                }}
              />
            </div>
          </Form.Label>
          <Form.Control
            type="text"
            name="obraSocial"
            disabled={social}
            value={newData.obraSocial}
            onChange={handleInputChange}
            placeholder={`Obra social Paciente`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tratamiento-boolean">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>En tratamiento:{enTratamiento ? " Si" : " No"} </strong>
              <AiFillEdit
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  setEnTratamientoDisabled(!enTratamientoDisabled);
                }}
              />
            </div>
          </Form.Label>
          {enTratamientoDisabled ? (
            <>
              <button
                type="button"
                className={enTratamiento ? "bool-button-si" : "bool-button-no"}
                onClick={(e) => setEnTratamiento(!enTratamiento)}
              >
                {enTratamiento ? "Si" : "No"}
              </button>
            </>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="alergia-boolean">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>
                Alérgico/a a algún medicamento:{conAlergia ? " Si" : " No"}{" "}
              </strong>
              <AiFillEdit
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  setConAlegiaDisabled(!conAlergiaDisabled);
                }}
              />
            </div>
          </Form.Label>
          {conAlergiaDisabled ? (
            <>
              <button
                className={conAlergia ? "bool-button-si" : "bool-button-no"}
                type="button"
                onClick={(e) => setConAlergia(!conAlergia)}
              >
                {conAlergia ? "Si" : "No"}
              </button>
            </>
          ) : (
            <></>
          )}
        </Form.Group>
        <button type="submit" className="save-changes-button">
          Guardar cambios
        </button>
      </Form>
    </>
  );
};

export default PacienteDescription;
