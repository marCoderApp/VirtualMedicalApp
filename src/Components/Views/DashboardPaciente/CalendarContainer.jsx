import React, { useState } from "react";

//React modern calendar datepicker
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import { Link } from "react-router-dom";

const CalendarContainer = () => {
  const [selectedDays, setSelectedDays] = useState([
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

  const disabledDays = [
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
    console.log(selectedDays);
  };

  return (
    <>
      <div className="calendar-card-container">
        <h3 style={{ fontSize: "14px" }}>Turnos agendados</h3>
        <Calendar
          value={selectedDays}
          shouldHighlightWeekends
          disabledDays={disabledDays} // here we pass them
          onDisabledDayError={handleDisabledSelect} // handle error
          minimumDate={utils().getToday()}
          style={{
            borderRadius: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          }}
        />
        <button className="agendar-button">
          <Link
            to="agendarturno"
            style={{ textDecoration: "none", color: "white" }}
          >
            Agendar turno
          </Link>
        </button>
      </div>
    </>
  );
};

export default CalendarContainer;
