import { React } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Footer from "./../footer/Footer";
import titleClasses from "../contact/Contact.module.css";
import classes from "./Gallery.module.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-green)" }}>
        <Container>
          <div
            className={titleClasses.titleSection}
            style={{ color: "var(--color-white)" }}
          >
            <h1 style={{ color: "var(--color-white)" }}>Galérie snímků</h1>
            <p style={{ maxWidth: "35rem" }}>
              Vyberte si z naší nabídky služeb mezi které patří Rozmetání
              průmyslových hnojiv,Odvoz siláže,senáže,GPS, Lisování sena, slámy
              Hranolové balíky
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.imageGalleryWrapper}>
        <ImageGallery items={images} showPlayButton={false} />
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;
