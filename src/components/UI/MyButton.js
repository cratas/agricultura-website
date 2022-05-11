import React from "react";
import {Button} from 'react-bootstrap';

import classes from './MyButton.module.css';

const MyButton = props => {
  return <Button className={classes.myButton}>{props.text}</Button>;
};

export default MyButton;
