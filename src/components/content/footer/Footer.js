import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <p>© Agroslužby Novotný s.r.o.</p>
      <p>Tel.: 775 496 320, e-mail: zemedelske.sluzby@email.cz</p>
      <p>IČO: 09209557, DIČ: CZ9559084293</p>
    </div>
  );
};

export default Footer;
