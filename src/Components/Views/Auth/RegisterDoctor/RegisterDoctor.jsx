import React from "react";

//CSS
import "../Auth-styles.css";

//Components
import RegisterDoctorForm from "./RegisterDoctorForm";

const RegisterDoctor = () => {
  return (
    <>
      <div className="auth-container">
        <RegisterDoctorForm />
      </div>
    </>
  );
};

export default RegisterDoctor;
