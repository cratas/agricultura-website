import { useRef, React } from "react";
import MyButton from "../../UI/MyButton";
import classes from "./Home.module.css";
import titleImage from "./../../../assets/intro_image.jpg";
import WhyUs from "./WhyUs";
import { Container } from "react-bootstrap";
import Footer from "../footer/Footer";
import FormSection from "../../UI/FormSection";

const Home = () => {
  const divRef = useRef(null);

  const handleButtonClick = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <div className={classes.homeSection}>
          <div className={classes.textSide} data-aos="fade-up">
            <h1>
              Profesionální
              <br />
              zemědělské
              <br />
              služby
            </h1>
            <p>
              Jsme firma, která nabízí profesionální zemědělské služby.
              Spokojenost zákazníka je naší hlavní prioritou. Stojí za námi
              téměř 5 let praktických zkušeností.
            </p>
            <MyButton text="Více o nás" onButtonClick={handleButtonClick} />
          </div>
          <div className={classes.imageSide} data-aos="zoom-in-left">
            <div className={classes.imageWrapper}>
              <img
                src={titleImage}
                className={classes.profilePicture}
                alt="Me"
                sizes="500px"
              ></img>
            </div>
          </div>
        </div>
      </Container>
      {/* Why us section */}
      <WhyUs scrollRef={divRef} />
      <FormSection />
      {/* Footer with contact info */}
      <Footer />
    </>
  );
};

export default Home;
