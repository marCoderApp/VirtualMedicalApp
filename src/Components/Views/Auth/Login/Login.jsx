import React from "react";

//CSS
import "../Auth-styles.css";

//Components
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="auth-container">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
