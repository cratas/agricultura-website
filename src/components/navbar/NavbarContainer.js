import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyButton from "../UI/MyButton";
import classes from "./NavbarContainer.module.css";

const NavbarContainer = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" className={classes.navbarContainer}>
        <Container>
          <Navbar.Brand href="#home">AGROslužby Novotný</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link to="/" className={`${classes.links} nav-link`}>
                Úvod
              </Link>
              <Link to="/services" className={`${classes.links} nav-link`}>
                Služby
              </Link>
              <Link to="/gallery" className={`${classes.links} nav-link`}>
                Galérie
              </Link>

              <MyButton text="Kontakt" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
