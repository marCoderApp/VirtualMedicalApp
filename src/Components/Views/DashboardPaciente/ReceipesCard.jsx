import React from "react";

const ReceipeItem = () => {
  return (
    <>
      <div className="receipe">
        <span className="medicine">Enalapril</span>
        <span className="dosis">24mg al dia</span>
      </div>
    </>
  );
};

const ReceipesCard = () => {
  return (
    <>
      <div className="receipes-card-container">
        <div className="title">
          <h3>Recetas</h3>
        </div>
        <div className="receipes-container">
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
          <ReceipeItem />
        </div>
      </div>
    </>
  );
};

export default ReceipesCard;
