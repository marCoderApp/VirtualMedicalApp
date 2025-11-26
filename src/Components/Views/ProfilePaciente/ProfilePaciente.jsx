import React from "react";

//React bootstrap
import Form from "react-bootstrap/Form";

//CSS
import "./ProfilePaciente-styles.css";

//Components
import PacienteDescription from "./PacienteDescription";
import DoctorCard from "./DoctorCard";
import Turnos from "./Turnos";

const ProfilePaciente = () => {
  return (
    <>
      <div className="profile-paciente-container">
        <div className="container-one">
          <div className="profile-card-container">
            <img src="https://i.ibb.co/Xkhy44P/v134-716.jpg" alt="user-img" />
            <p className="username">
              Alejandra D`Miguel
              <span>Mujer, 41 años</span>
              <span>aledmiguel@gmail.com</span>
            </p>
          </div>
          <DoctorCard />
        </div>
        <div className="container-two">
          <PacienteDescription />
          <Turnos />
        </div>
      </div>
    </>
  );
};

export default ProfilePaciente;
