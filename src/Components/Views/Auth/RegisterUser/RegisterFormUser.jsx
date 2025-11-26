import React from "react";

//CSS
import "../Auth-styles.css";

//React router dom
import { Link, useNavigate } from "react-router-dom";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

//Yup
import * as Yup from "yup";

//React toast
import toast, { Toaster } from "react-hot-toast";

const RegisterFormUser = () => {
  const navigate = useNavigate();

  const handleRegister = async (user) => {
    const { name, email, password, obraSocial } = user;

    console.log(`${name}, ${email}, ${password}, ${obraSocial}`);

    navigate("/dashboardpaciente");
  };

  //Validation Schema
  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "El nombre debe contener mas de 5 caracteres")
      .required(required),
    email: Yup.string().email("Debe ser un email válido").required(required),
    password: Yup.string()
      .min(8, "Debe contener al menos 8 caracteres de largo")
      .required(required),
    obraSocial: Yup.string().required(required),
  });

  return (
    <>
      <div className="register-form-container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            obraSocial: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            let user = {};

            user = {
              name: values.name,
              email: values.email,
              password: values.password,
              obraSocial: values.obraSocial,
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
                  name="name"
                  placeholder="Nombre y Apellido"
                  className={errors.name ? "input error-border" : "input"}
                />
                <ErrorMessage
                  name="name"
                  component={() => {
                    return <div className="error">{errors.name}</div>;
                  }}
                />
              </div>
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
              <div>
                <Field
                  type="text"
                  name="obraSocial"
                  placeholder="Obra Social"
                  className={errors.obraSocial ? "input error-border" : "input"}
                />
                <ErrorMessage
                  name="obraSocial"
                  component={() => {
                    return <div className="error">{errors.name}</div>;
                  }}
                />
              </div>
              <button type="submit" className="sign-button">
                Crear cuenta
              </button>
              <span>
                Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterFormUser;
