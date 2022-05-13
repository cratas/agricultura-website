import React from "react";
import { Col, Row } from "react-bootstrap";

import classes from "./../content/home/Home.module.css";

export const GridComponent = (props) => {
  return (
    <div>
      <Row >
        <Col>
          <div className={classes.colContent}>
            <div className={classes.circleService}>{props.firstIcon}</div>
            <h3>{props.firstTitle}</h3>
            {props.firstText && <p>{props.firstText}</p>}
          </div>
        </Col>
        <Col>
          <div className={classes.colContent}>
            <div className={classes.circleService}>{props.secondIcon}</div>
            <h3>{props.secondTitle}</h3>
            { props.secondText && <p>{props.secondText}</p>}
          </div>
        </Col>
        <Col>
          <div className={classes.colContent}>
            <div className={classes.circleService}>{props.thirdIcon}</div>
            <h3>{props.thirdTitle}</h3>
            {props.thirdText && <p>{props.thirdText}</p>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GridComponent;
