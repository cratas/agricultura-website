import { useRef, React } from "react";
import MyButton from "../../UI/MyButton";
import classes from "./Home.module.css";
import titleImage from "./../../../assets/title-image.png";
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
          <div className={classes.textSide}>
            <h1>
              Profesionální
              <br />
              zemědělské
              <br />
              služby
            </h1>
            <p>
              Jro zemědělce, ať žijí již malé či velké, soukrémě hospodařící
              nebo zemědělské společnosti hospodařící nebo zemědělské
              společnosti
            </p>
            <MyButton text="Více o nás" onButtonClick={handleButtonClick} />
          </div>
          <div className={classes.imageSide}>
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
      <Footer backgroundColor="var(--color-green)" />
    </>
  );
};

export default Home;
