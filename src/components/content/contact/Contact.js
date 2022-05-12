import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Contact.module.css";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <Container>
        <div className={classes.titleSection}>
          <h1>Kontaktujte nás!</h1>
          <p>
            Máte-lin jakékoli dotazy, neváhejte nás kontaktovat prostřednictvím
            dostupných služeb.
          </p>
        </div>
      </Container>
      <div className={classes.contactInfoSection}>
        <Container>
          sdf
        </Container>
      </div>
      {/* <Footer backgroundColor='var(--color-green)'/> */}
    </>
  );
};

export default Contact;
