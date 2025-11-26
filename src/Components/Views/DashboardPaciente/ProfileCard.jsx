import React from "react";

//Css
import "./DashboardPaciente-styles.css";

//React Rouer dom
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>
      <div className="profile-card-container">
        <img src="https://i.ibb.co/Xkhy44P/v134-716.jpg" alt="user-img" />
        <p className="username">
          Alejandra D`Miguel
          <span>Mujer, 41 años</span>
          <span>aledmiguel@gmail.com</span>
        </p>
        <p className="user-profile-link">
          <Link to="/profilepaciente">Ver Perfil</Link>
        </p>
      </div>
    </>
  );
};

export default ProfileCard;
