import React from "react";
import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegHandshake } from "react-icons/fa";
import {TiSpannerOutline} from 'react-icons/ti';
import {MdMoreTime} from 'react-icons/md';

const WhyUs = () => {
  return (
    <div className={classes.whyUsSection}>
      <Container>
        <h2>Proč zvolit naše služby?</h2>

        <Row>
          <Col>
            <div className={classes.colContent}>
              <div className={classes.circleService}>
                <FaRegHandshake size={70}/>
              </div>
              <h3>Seriózní přístup</h3>
              <p>
                Nasloucháme zákazníkům a snažíme se vyjít jejIm požadavkům
                maximálně vstříc. Zakládáme si na vzájemně férovém jednání.
                Nikomu neslibujeme nic, co nedokážeme splnit.
              </p>
            </div>
          </Col>
          <Col>
            <div className={classes.colContent}>
              <div className={classes.circleService}><TiSpannerOutline size={70}/></div>
              <h3>Moderní technologie</h3>
              <p>
                Nasloucháme zákazníkům a snažíme se vyjít jejIm požadavkům
                maximálně vstříc. Zakládáme si na vzájemně férovém jednání.
                Nikomu neslibujeme nic, co nedokážeme splnit.
              </p>
            </div>
          </Col>
          <Col>
            <div className={classes.colContent}>
              <div className={classes.circleService}>
                <MdMoreTime size={70}/>
              </div>
              <h3>Zkušenosti</h3>
              <p>
                Nasloucháme zákazníkům a snažíme se vyjít jejIm požadavkům
                maximálně vstříc. Zakládáme si na vzájemně férovém jednání.
                Nikomu neslibujeme nic, co nedokážeme splnit.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
