import React from "react";
import classes from "./Home.module.css";
import { Container } from "react-bootstrap";
import GridComponent from "../../UI/GridComponent";
import { FaRegHandshake } from "react-icons/fa";
import { TiSpannerOutline } from "react-icons/ti";
import { MdMoreTime } from "react-icons/md";

const WhyUs = (props) => {
  return (
    <div className={classes.whyUsSection} ref={props.scrollRef}>
      <Container>
        <h2 data-aos="zoom-in">Proč zvolit naše služby?</h2>
        <GridComponent
          firstIcon={<FaRegHandshake size={70} />}
          secondIcon={<TiSpannerOutline size={70} />}
          thirdIcon={<MdMoreTime size={70} />}
          firstTitle={<h3>Seriózní přístup</h3>}
          secondTitle={<h3>Moderní technologie</h3>}
          thirdTitle={<h3>Zkušenosti</h3>}
          firstText="Nasloucháme zákazníkům a snažíme se vyjít jejím požadavkům maximálně vstříc. Zakládáme si na vzájemně férovém jednání."
          secondText="Nabízíme služby, které využívají moderních trendů zemědělství a náš strojový park odpovídá svým stářím a kvalitou vysoké úrovni."
          thirdText="Nejsme žádnými nováčky v oboru, proto nabízíme služby, které odpovídají dlouholetým zkušenostem v oboru zemědělství."
        />
      </Container>
    </div>
  );
};

export default WhyUs;
