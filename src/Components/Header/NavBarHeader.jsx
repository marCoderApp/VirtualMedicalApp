import React from "react";

//Css
import "./Header-styles.css";

//React bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "./SearchBar";

const NavBarHeader = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" variant="light" expand={"xl"} className="mb-1">
        <Container fluid>
          <Navbar.Brand
            href="/"
            style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}
          >
            Virtual
            <Navbar.Brand
              style={{ color: "#2fca76", fontWeight: "bold", fontSize: "25px" }}
            >
              Medical
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xl"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"xxl"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${"xl"}`}
                style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}
              >
                Virtual
                <span
                  style={{
                    color: "#2fca76",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  Medical
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <SearchBar />
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown
                  title="Menu"
                  id={`offcanvasNavbarDropdown-expand-${"xl"}`}
                  align="end"
                >
                  <NavDropdown.Item href="/dashboardpaciente">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profilepaciente">
                    Profle
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dashboardpaciente/agendarturno">
                    Agendar turno
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/dashboardpaciente/historial">
                    Historial
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarHeader;
