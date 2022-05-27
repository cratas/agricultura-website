import { React } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Footer from "./../footer/Footer";
import titleClasses from "../contact/Contact.module.css";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const images = [];

  for (let i = 1; i < 10; i++) {
    let tmp = require("./../../../assets/img0" + i + ".jpg");
    images.push({ original: tmp, thumbnail: tmp });
  }

  return (
    <>
      <div style={{ backgroundColor: "var(--color-green)" }}>
        <Container>
          <div
            className={titleClasses.titleSection}
            style={{ color: "var(--color-white)" }}
            data-aos="zoom-in"
          >
            <h1 style={{ color: "var(--color-white)" }}>Galérie snímků</h1>
            <p style={{ maxWidth: "35rem" }}>
              Prohlédněte si galerii, která obsahuje spoustu snímku pořízených
              při práci v průběhu sezony roku 2021.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.imageGalleryWrapper} data-aos="zoom-in">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
