import React from "react";
import "./navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SocialMedia from "../SocialMedia/SocialMedia";
export default function NavbarUta() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-body-tertiary "
      id="navbarCustom"
    >
      <SocialMedia />
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="icono" src="/imagenes/2.webp" alt="icono" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="*">Inicio</Nav.Link>
            <Nav.Link href="/bolsa">Bolsa de trabajo</Nav.Link>
            <Nav.Link href="/vacantes">Vacantes</Nav.Link>
            <Nav.Link href="/Inter">Internacionalizacion</Nav.Link>
            <Nav.Link href="/Exito">Historias de exito</Nav.Link>
            <Nav.Link href="#action2">Admisiones</Nav.Link>
            <Nav.Link href="#action2">TSU</Nav.Link>
            <Nav.Link href="#action2">Estadias</Nav.Link>
            <Nav.Link href="#action2">Becas</Nav.Link>
            <Nav.Link href="https://www.utags.edu.mx/images/Archivos/Croquis/CROQUIS-UTA.pdf">Vida en el campus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
