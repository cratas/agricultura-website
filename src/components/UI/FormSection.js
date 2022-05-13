import React from "react";
import { Container } from "react-bootstrap";
import classes from "./UICommon.module.css";

export const FormSection = () => {
  return (
    <Container>
      <div className={classes.formSection}>
        <h2>Napište nám!</h2>
      </div>
    </Container>
  );
};

export default FormSection;
