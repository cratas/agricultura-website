import { useState, React } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import MyButton from "../UI/MyButton";
import classes from "./NavbarContainer.module.css";

import logo from "../../assets/logo.png";

const NavbarContainer = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleChangeSection = (e) => {
    setActiveLink(e.target.id);
  };

  const handleButtonClick = (e) => {
    setActiveLink("contact");
  };

  const nonActiveStyle = `${classes.links} nav-link`;
  const activeStyle = `${classes.links} nav-link ${classes.active}`;

  const homeClasses = activeLink === "home" ? activeStyle : nonActiveStyle;
  const servicesClasses =
    activeLink === "services" ? activeStyle : nonActiveStyle;
  const galleryClasses =
    activeLink === "gallery" ? activeStyle : nonActiveStyle;

  return (
    <>
      <Navbar sticky="top" expand="lg" className={classes.navbarContainer}>
        <Container>
          <Navbar.Brand>
            <img src={logo} className={classes.logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link
                to="/"
                className={homeClasses}
                id={"home"}
                onClick={handleChangeSection}
              >
                Úvod
              </Link>
              <Link
                to="/services"
                className={servicesClasses}
                id={"services"}
                onClick={handleChangeSection}
              >
                Služby
              </Link>
              <Link
                to="/gallery"
                className={galleryClasses}
                id={"gallery"}
                onClick={handleChangeSection}
              >
                Galérie
              </Link>
              <Link to="/contact">
                <MyButton text="Kontakt" onButtonClick={handleButtonClick} />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
