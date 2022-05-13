import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Contact.module.css";
import Footer from "../footer/Footer";
import GridComponent from "../../UI/GridComponent";
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';
import FormSection from "../../UI/FormSection";

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
          <GridComponent firstTitle="+420 775 454 334"
          secondTitle="Jeseník nad Odrou 1, 742 33 Jeseník n. O."
          thirdTitle="zemedelske.sluzby@email.cz"
          firstIcon={<AiOutlinePhone size={70}/>}
          secondIcon={<GrLocation size={65}/>}
          thirdIcon={<AiOutlineMail size={65}/>}

          />
        </Container>
      </div>

      <FormSection />

      {/* <Footer backgroundColor='var(--color-green)'/> */}
    </>
  );
};

export default Contact;
