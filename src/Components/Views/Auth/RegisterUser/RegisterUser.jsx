import React from "react";

//CSS
import "../Auth-styles.css";

//Components
import RegisterFormUser from "./RegisterFormUser";

const RegisterUser = () => {
  return (
    <>
      <div className="auth-container">
        <RegisterFormUser />
      </div>
    </>
  );
};

export default RegisterUser;
