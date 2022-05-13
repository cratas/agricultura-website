import React from "react";
import { Button } from "react-bootstrap";

import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <Button
      className={classes.myButton}
      onClick={props.onButtonClick}
      style={props.style}
      type={props.type}
    >
      {props.text}
    </Button>
  );
};

export default MyButton;
