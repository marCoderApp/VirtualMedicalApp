import React from "react";

//CSS
import "../Auth-styles.css";

//React router dom
import { Link, useNavigate } from "react-router-dom";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

//Yup
import * as Yup from "yup";

const RegisterFormUser = () => {
  const navigate = useNavigate();
  const handleRegister = async (user) => {
    const { email, password } = user;

    console.log(`Logeado`);

    navigate("/dashboardpaciente");
  };

  //Validation Schema
  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Debe ser un email válido").required(required),
    password: Yup.string()
      .min(8, "Debe contener al menos 8 caracteres de largo")
      .required(required),
  });

  return (
    <>
      <div className="register-form-container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            let user = {};

            user = {
              email: values.email,
              password: values.password,
            };

            handleRegister(user);
          }}
        >
          {({ errors }) => (
            <Form>
              <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
                Bienvenido a Virtual
                <span
                  style={{ color: "#2fca76", fontSize: "32px", margin: "0" }}
                >
                  Medical
                </span>
              </h2>
              <h5>Comienza creando una cuenta</h5>

              <div>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className={errors.email ? "input error-border" : "input"}
                />
                <ErrorMessage
                  name="email"
                  component={() => {
                    return <div className="error">{errors.email}</div>;
                  }}
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className={errors.password ? "input error-border" : "input"}
                />
                <ErrorMessage
                  name="password"
                  component={() => {
                    return <div className="error">{errors.password}</div>;
                  }}
                />
              </div>
              <button type="submit" className="sign-button">
                Iniciar sesión
              </button>
              <span>
                No tienes una cuenta? <Link to="/">Registrate!</Link>
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterFormUser;
