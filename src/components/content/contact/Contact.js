import { React } from "react";
import { Container } from "react-bootstrap";
import classes from "./Contact.module.css";
import Footer from "../footer/Footer";
import GridComponent from "../../UI/GridComponent";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import FormSection from "../../UI/FormSection";

const Contact = () => {


  return (
    <>
      <Container>
        <div className={classes.titleSection} data-aos="zoom-in">
          <h1>Kontaktujte nás!</h1>
          <p>
            Máte-lin jakékoli dotazy, neváhejte nás kontaktovat prostřednictvím
            dostupných služeb.
          </p>
        </div>
      </Container>
      <div className={classes.contactInfoSection}>
        <h2 data-aos="zoom-in">Kontaktní informace</h2>
        <Container>
          <GridComponent
            firstTitle={<h5>+420 775 454 334</h5>}
            secondTitle={<h5>Jeseník nad Odrou 1, 742 33 Jeseník n. O.</h5>}
            thirdTitle={<h5>zemedelske.sluzby@email.cz</h5>}
            firstIcon={<AiOutlinePhone size={70} />}
            secondIcon={<GrLocation size={65} />}
            thirdIcon={<AiOutlineMail size={65} />}
          />
        </Container>
      </div>
      {/* Section with contact form */}
      <FormSection />
      {/* Section with google map api */}
      <iframe
        title="google api map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.2770282607394!2d18.049371115935266!3d49.66792015131828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713ebe4d12c0f3f%3A0xf8a26f1995547382!2sBarto%C5%A1ovice%20393%2C%20742%2054%20Barto%C5%A1ovice!5e0!3m2!1scs!2scz!4v1652778382203!5m2!1scs!2scz"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        style={{marginBottom: '-8px', borderTop: "2px solid var(--color-green)"}}
      />
      {/* <LocationMap /> */}
      {/* Section with website footer */}
      <Footer
        backgroundColor="var(--color-green)"
        textColor="var(--color-white)"
      />
    </>
  );
};

export default Contact;
