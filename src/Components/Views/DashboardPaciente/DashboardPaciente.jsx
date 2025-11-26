import React from "react";

//CSS
import "./DashboardPaciente-styles.css";

//Components
import ProfileCard from "./ProfileCard";
import ReceipesCard from "./ReceipesCard";
import HistorialComponent from "./HistorialComponent";
import CalendarContainer from "./CalendarContainer";

const DashboardPaciente = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="container-one">
          <ProfileCard />
          <ReceipesCard />
        </div>
        <div className="container-two">
          <HistorialComponent />
          <CalendarContainer />
        </div>
      </div>
    </>
  );
};

export default DashboardPaciente;
