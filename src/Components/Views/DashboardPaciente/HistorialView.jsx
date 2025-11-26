import React, { useState } from "react";

//React router dom
import { Link } from "react-router-dom";

//Components
import HistorialComponent from "./HistorialComponent";

const HistorialItem = () => {
  return (
    <>
      <div className="historial-item">
        <div className="row-container">
          <span>Endocrinología</span>
          <span>30 de marzo 2023</span>
        </div>
        <span>Dr. José Toterolli</span>
      </div>
    </>
  );
};

const HistorialView = () => {
  return (
    <>
      <div className="historial-view-container">
        <h2>Historial de Alejandra D`Miguel</h2>
        <div className="historial-card-container">
          <div className="historial-container">
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
            <HistorialItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistorialView;
