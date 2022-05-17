import React from "react";
import classes from "./UICommon.module.css";

export const ServiceCard = (props) => {
  const serviceCardStyle = props.leftAlligned
    ? `${classes.serviceCard}`
    : `${classes.serviceCard} ${classes.serviceCardReversed}`;

  const textWrapperStyle = props.leftAlligned
    ? `${classes.textWrapper}`
    : `${classes.textWrapper} ${classes.textWrapperReversed}`;

  return (
    <div className={serviceCardStyle} data-aos="zoom-in">
      <div className={classes.imageWrapper}><img src={props.image} alt="img" /></div>
      <div className={textWrapperStyle}>
        <h3>Rozmetání průmyslových hnojiv</h3>
        <p>
          Vyberte si z naší nabídky služeb mezi které patří Rozmetání
          průmyslových hnojiv,Odvoz siláže,senáže,GPS, Lisování sena,
          průmyslových hnojiv,Odvoz siláže,senáže,GPS, Lisování sena,
          průmyslových hnojiv,Odvoz siláže,senáže,GPS, Lisování sena,
        </p>
      </div>
    </div>
  );
};
