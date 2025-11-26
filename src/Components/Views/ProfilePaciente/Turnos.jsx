import React from "react";

//React bootstrap
import Accordion from "react-bootstrap/Accordion";

const Item = () => {
  const eventKeys = ["0", "1", "2", "3", "4", "5"];

  return (
    <>
      {eventKeys.length == 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "gray" }}>No hay turnos agendados</h3>
          </div>
        </>
      ) : (
        <>
          {eventKeys.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item}>
                <Accordion.Header>Fecha: 20/03/2023</Accordion.Header>
                <Accordion.Body>
                  <div className="item-body">
                    <ul>
                      <li>Doctor/a: José Toterolli</li>
                      <li>Sector: Cardiología</li>
                      <li>Horario: 19:30 hs</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </>
      )}
    </>
  );
};

const Turnos = () => {
  return (
    <>
      <div className="contenedor">
        <h3>Próximos Turnos:</h3>
        <div className="turnos-container">
          <Accordion>
            <Item />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Turnos;
