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
            data-aos="zoom-in"
          >
            <h1 style={{ color: "var(--color-white)" }}>Nabízené služby</h1>
            <p style={{ maxWidth: "35rem" }}>
              Vyberte si z naší nabídky služeb mezi které Lisování sena a slámy, Odvoz senáže, siláže a GPS a Odvoz obilí.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <ServiceCard
          title="Lisování sena a slámy"
          text=""
          leftAlligned={true}
          image={firstImage}
        />
        <ServiceCard
          title="Odvoz senáže, siláže a GPS"
          text=""
          leftAlligned={false}
          image={firstImage}
        />
        <ServiceCard
          title="Odvoz obilí"
          text=""
          leftAlligned={true}
          image={firstImage}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Services;
