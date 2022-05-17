import { React } from "react";
import { Container } from "react-bootstrap";
import classes from "./Services.module.css";
import titleClasses from "../contact/Contact.module.css";
import { ServiceCard } from "../../UI/ServiceCard";
import Footer from "../footer/Footer";

import firstImage from "../../../assets/title-image.png";

const Services = () => {
  return (
    <>
      <div className={classes.servicesSection}>
        <Container>
          <div
            className={titleClasses.titleSection}
            style={{ color: "var(--color-white)" }}
          >
            <h1 style={{ color: "var(--color-white)" }}>Nabízené služby</h1>
            <p style={{ maxWidth: "35rem" }}>
              Vyberte si z naší nabídky služeb mezi které patří Rozmetání
              průmyslových hnojiv,Odvoz siláže,senáže,GPS, Lisování sena, slámy
              Hranolové balíky
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <ServiceCard leftAlligned={true} image={firstImage} />
        <ServiceCard leftAlligned={false} image={firstImage} />
        <ServiceCard leftAlligned={true} image={firstImage} />
        <ServiceCard leftAlligned={false} image={firstImage} />
      </Container>
      <Footer />
    </>
  );
};

export default Services;
