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
          secondText="Nabízíme mechanizační služby sledující nejmodernější trendy zemědělství s patřičným vybavením kvalitou a stářím strojového parku."
          thirdText="Nejsme žádnými nováčky v oboru. Stojí za námi téměř 5 let praktických zkušeností v oboru zemědělských služeb."
        />
      </Container>
    </div>
  );
};

export default WhyUs;
