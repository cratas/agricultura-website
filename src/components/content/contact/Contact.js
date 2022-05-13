import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Contact.module.css";
import Footer from "../footer/Footer";
import GridComponent from "../../UI/GridComponent";
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';
import FormSection from "../../UI/FormSection";
import { LocationMap } from "../../UI/LocationMap";

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
        <h2 >Kontaktní informace</h2>
        <Container>
          <GridComponent firstTitle={<h5>+420 775 454 334</h5>}
          secondTitle={<h5>Jeseník nad Odrou 1, 742 33 Jeseník n. O.</h5>}
          thirdTitle={<h5>zemedelske.sluzby@email.cz</h5>}
          firstIcon={<AiOutlinePhone size={70}/>}
          secondIcon={<GrLocation size={65}/>}
          thirdIcon={<AiOutlineMail size={65}/>}

          />
        </Container>
      </div>
      {/* Section with contact form */}
      <FormSection />
      {/* Section with google map api */}
      <LocationMap />
      {/* Section with website footer */}
      <Footer backgroundColor='var(--color-green)' textColor='var(--color-white)'/>
    </>
  );
};

export default Contact;
