import React from "react";

const DoctorStatsItem = ({ number, tag }) => {
  return (
    <>
      <div className="item-container">
        <h3>{number}</h3>
        <span>{tag}</span>
      </div>
    </>
  );
};

const DoctorStats = () => {
  return (
    <>
      <div className="doctor-stats-container">
        <DoctorStatsItem number={"70"} tag={"Promedio Pacientes semanales"} />
        <DoctorStatsItem number={"280"} tag={"Promedio Pacientes mensuales"} />
        <DoctorStatsItem number={"15"} tag={"Cirugías"} />
        <DoctorStatsItem number={"40"} tag={"Internados"} />
        <DoctorStatsItem number={"+20 años."} tag={"Experiencia"} />
        <DoctorStatsItem number={"4/5 puntos."} tag={"Valoración"} />
      </div>
    </>
  );
};

export default DoctorStats;
