import { React } from "react";
import { Container } from "react-bootstrap";
import classes from "./Services.module.css";
import titleClasses from "../contact/Contact.module.css";
import { ServiceCard } from "../../UI/ServiceCard";
import Footer from "../footer/Footer";

const images = [
  "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663990/lis_image_d8jdy3.jpg",
  "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663982/gps_xerqx2.jpg",
  "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663980/odvoz_image_vl50cz.jpg",
];

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
              Vyberte si z naší nabídky služeb mezi které Lisování sena a slámy,
              Odvoz senáže, siláže a GPS a Odvoz obilí.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <ServiceCard
          title="Lisování sena a slámy"
          text="Nabízíme službu lisování seba a slámy do hranolových balíků. Využíváme lisy Krone Big-Pack 1290 Xc High speed. Rozměr balíku: 120x90 50-240. Součástí této služby je možnost řezání balíků."
          leftAlligned={true}
          image={images[0]}
        />
        <ServiceCard
          title="Odvoz senáže, siláže a GPS"
          text="Další nabízenou službou je odvoz senáže, siláže a GPS velkoobjemovými návěsy. Využíváme soupravy tvořeny z traktorů Jcb Fastrac 3230 Xtra s návěsy Bergmann HTW tandem a Metaltech SILO tridem. Oba návěsy mají vyprazdňování pomocí posuvného podlahového dopravníku."
          leftAlligned={false}
          image={images[1]}
        />
        <ServiceCard
          title="Odvoz obilí"
          text="Ovoz obilí je další z našich služeb. Pro odvoz obilí využíváme soupravu traktorů Jcb Fastrac 3230 Xtr spolu s návěsem s Bergmann 20 t s možností vyprazdňování pomocí posuvného podlahového dopravníku."
          leftAlligned={true}
          image={images[2]}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Services;
