import React, { useState, useEffect } from "react";

//Css
import "./ProfileDoctor-styles.css";

//React bootstrap
import Form, { Container } from "react-bootstrap/Form";

//React icons
import { AiFillEdit } from "react-icons/ai";

//Components
import DoctorStats from "./DoctorStats";

const DoctorDescription = () => {
  const [telNumber, setTelNumber] = useState(true);
  const [disponibilidadDisabled, setdisponibilidadDisabled] = useState(false);
  const [conAlergiaDisabled, setConAlegiaDisabled] = useState(false);
  const [estaDisponible, setEstaDisponible] = useState(true);
  const [newData, setNewData] = useState({
    phoneNumber: "",
    estaDisponible: false,
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
    const updatedUserData = { ...newData, estaDisponible };

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
        <Form.Group className="mb-3" controlId="matricula-user">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>Matricula</strong>
            </div>
          </Form.Label>
          <Form.Control
            type="text"
            name="matricula"
            readOnly
            defaultValue={`018421548447SG`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="turno-user">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>Turno</strong>
            </div>
          </Form.Label>
          <Form.Control
            type="text"
            name="turno"
            readOnly
            defaultValue={`Mañana`}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tratamiento-boolean">
          <Form.Label style={{ width: "100%" }}>
            {" "}
            <div className="edit-input-icon">
              <strong>Disponible:{estaDisponible ? " Si" : " No"} </strong>
              <AiFillEdit
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  setdisponibilidadDisabled(!disponibilidadDisabled);
                }}
              />
            </div>
          </Form.Label>
          {disponibilidadDisabled ? (
            <>
              <button
                type="button"
                className={estaDisponible ? "bool-button-si" : "bool-button-no"}
                onClick={(e) => setEstaDisponible(!estaDisponible)}
              >
                {estaDisponible ? "Si" : "No"}
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

const ProfileDoctor = () => {
  return (
    <>
      <div className="profile-doctor-container">
        <div className="column-one">
          <div className="doctor-card-container">
            <img
              src="https://i.ibb.co/P6CdGBr/doc-Toterolli.jpg"
              alt="user-img"
            />
            <p className="username">
              Dr. José Toterolli
              <span>Hombre, 52 años</span>
              <span>j_toterolli@gmail.com</span>
            </p>
          </div>
          <DoctorDescription />
        </div>
        <div className="column-two">
          <DoctorStats />
        </div>
      </div>
    </>
  );
};

export default ProfileDoctor;
