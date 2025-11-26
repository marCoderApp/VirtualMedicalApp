import React, { useState } from "react";

//Css
import "./DashboardPaciente-styles.css";

//React modern calendar datepicker
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";

//React router dom
import { Link } from "react-router-dom";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

//Yup
import * as Yup from "yup";

const AgendarTurnoSelect = () => {
  const hora = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  const minutos = ["00", "15", "30", "45"];

  const handleSelect = (turno) => {
    const { especialidad, doctor, hour, minute } = turno;

    console.log(especialidad + ", " + doctor + ", " + hour + ":" + minute);
  };

  //Validation Schema
  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    especialidad: Yup.string().required(required),
    doctor: Yup.string().required(required),
    hour: Yup.string().required(required),
    minute: Yup.string().required(required),
  });

  return (
    <>
      <div className="container">
        <h2>Agendar un nuevo turno</h2>
        <Formik
          initialValues={{ especialidad: "", doctor: "", hour: "", minute: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();

            let turno = {};

            turno = {
              especialidad: values.especialidad,
              doctor: values.doctor,
              hour: values.hour,
              minute: values.minute,
            };

            handleSelect(turno);
          }}
        >
          {({ errors }) => (
            <Form>
              <div>
                <Field as="select" name="especialidad">
                  <option value="">Especialidad</option>
                  <option value="cardiologia">Cardiología</option>
                  <option value="pediatria">Pediatría</option>
                  <option value="traumatologia">Traumatología</option>
                </Field>
                <ErrorMessage
                  name="especialidad"
                  component={() => {
                    return <div className="error">{errors.especialidad}</div>;
                  }}
                />
              </div>
              <div>
                <Field as="select" name="doctor">
                  <option value="">Doctor/a</option>
                  <option value="cardiologia">Cardiología</option>
                  <option value="pediatria">Pediatría</option>
                  <option value="traumatologia">Traumatología</option>
                </Field>
                <ErrorMessage
                  name="doctor"
                  component={() => {
                    return <div className="error">{errors.doctor}</div>;
                  }}
                />
              </div>
              <label style={{ alignSelf: "self-start" }}>Horario:</label>
              <div className="horario-container">
                <div>
                  <Field as="select" name="hour">
                    <option value="">Hora</option>
                    {hora.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="hour"
                    component={() => {
                      return <div className="error">{errors.hour}</div>;
                    }}
                  />
                </div>
                <div>
                  <Field as="select" name="minute">
                    <option value="">Minutos</option>
                    {minutos.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="minute"
                    component={() => {
                      return <div className="error">{errors.minute}</div>;
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="agendar-button">
                Confirmar Turno
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const AgendarTurno = () => {
  const [availibleDays, setAvailibleDays] = useState([
    {
      year: 2023,
      month: 3,
      day: 22,
    },
    {
      year: 2023,
      month: 3,
      day: 25,
    },
    {
      year: 2023,
      month: 3,
      day: 4,
    },
  ]);

  const notAvailableDays = [
    {
      year: 2023,
      month: 3,
      day: 20,
    },
    {
      year: 2023,
      month: 3,
      day: 21,
    },
    {
      year: 2023,
      month: 3,
      day: 7,
    },
  ];

  const handleDisabledSelect = (disabledDay) => {
    console.log("Tried selecting a disabled day", disabledDay);
    console.log(availibleDays);
  };

  return (
    <>
      <div className="agendar-turno-container">
        <AgendarTurnoSelect />
        <div className="calendar-turnos-container">
          <Calendar
            value={availibleDays}
            shouldHighlightWeekends
            disabledDays={notAvailableDays} // here we pass them
            onDisabledDayError={handleDisabledSelect} // handle error
            minimumDate={utils().getToday()}
            style={{
              borderRadius: "20px",
              boxShadow: `rgba(9, 30, 66, 0.25) 0px 1px 1px 
              rgba(9, 30, 66, 0.13) 0px 0px 1px 1px`,
            }}
          />
          <div className="turnos-disponibles">
            <div></div>
            <h3>Turnos disponibles</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendarTurno;
