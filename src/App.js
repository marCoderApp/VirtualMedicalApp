import React from "react";

//Css
import "bootstrap/dist/css/bootstrap.min.css";

//Framer Motion
import { AnimatePresence, motion } from "framer-motion";

//React router dom
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

//Components
import Login from "./Components/Views/Auth/Login/Login";
import RegisterUser from "./Components/Views/Auth/RegisterUser/RegisterUser";
import RegisterDoctor from "./Components/Views/Auth/RegisterDoctor/RegisterDoctor";
import DashboardAdmin from "./Components/Views/DashboardAdmin/DashboardAdmin";
import DashboardDoctor from "./Components/Views/DashboardDoctor/DashboardDoctor";
import DashboardPaciente from "./Components/Views/DashboardPaciente/DashboardPaciente";
import ProfilePaciente from "./Components/Views/ProfilePaciente/ProfilePaciente";
import Error404 from "./Components/Views/Error404/Error404";
import AgendarTurno from "./Components/Views/DashboardPaciente/AgendarTurno";
import HistorialView from "./Components/Views/DashboardPaciente/HistorialView";
import NavBarHeader from "./Components/Header/NavBarHeader";
import ProfileDoctor from "./Components/Views/ProfileDoctor/ProfileDoctor";

const pageTransition = {
  in: {
    opacity: 1,
  },

  out: {
    opacity: 0,
  },
};

function App() {
  const location = useLocation();
  return (
    <>
      <NavBarHeader />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <RegisterUser />
              </motion.div>
            }
          ></Route>
          <Route
            path="/registerdoctor"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <RegisterDoctor />
              </motion.div>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Login />
              </motion.div>
            }
          ></Route>
          <Route
            path="/dashboardadmin"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <DashboardAdmin />
              </motion.div>
            }
          ></Route>
          <Route
            path="/dashboarddoctor"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <DashboardDoctor />
              </motion.div>
            }
          ></Route>
          <Route
            path="/dashboardpaciente"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <DashboardPaciente />
              </motion.div>
            }
          ></Route>
          <Route
            path="/profilepaciente"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <ProfilePaciente />
              </motion.div>
            }
          ></Route>
          <Route
            path="/profiledoctor"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <ProfileDoctor />
              </motion.div>
            }
          ></Route>
          <Route
            path="/dashboardpaciente/agendarturno"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <AgendarTurno />
              </motion.div>
            }
          ></Route>
          <Route
            path="/dashboardpaciente/historial"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <HistorialView />
              </motion.div>
            }
          ></Route>
          <Route
            path="*"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Error404 />
              </motion.div>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
