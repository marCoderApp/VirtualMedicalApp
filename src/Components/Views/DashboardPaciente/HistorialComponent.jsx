import React from "react";

//React router dom
import { Link } from "react-router-dom";

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

const HistorialComponent = () => {
  return (
    <>
      <div className="historial-card-container">
        <div className="title">
          <span style={{ fontWeight: "bold" }}>Historial</span>
          <Link to="historial">Ver todo</Link>
        </div>
        <div className="historial-container">
          <HistorialItem />
          <HistorialItem />
          <HistorialItem />
          <HistorialItem />
        </div>
      </div>
    </>
  );
};

export default HistorialComponent;
