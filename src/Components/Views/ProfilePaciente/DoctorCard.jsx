import React, { useState } from "react";

//React router dom
import { Link } from "react-router-dom";

const DoctorCard = () => {
  return (
    <>
      <div className="doctor-card-container">
        <h3>Médico de Cabecera</h3>
        <div className="container">
          <img
            src="https://i.ibb.co/P6CdGBr/doc-Toterolli.jpg"
            alt="doctor-img"
          />
          <div className="doctor-description">
            <span>José Toterolli</span>
            <span>Cardiólogo</span>
            <Link
              style={{ color: "#2fca76", textDecoration: "none" }}
              to="/profiledoctor"
            >
              Ver perfil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
