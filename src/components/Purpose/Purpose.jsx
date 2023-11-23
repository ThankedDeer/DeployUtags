import React from "react";
import styles from "./Purpose.module.scss";
import Image from "next/image";
const { purpose, purpose_title, purpose_text, purpose_img } = styles;
export default function Prupose(props) {
  const { BgColor, title, text, icon } = props;

  const divStyle = {
    backgroundColor: BgColor,
  };

  return (
    <div className={purpose} style={divStyle}>
      <h5 className={purpose_title}>{title}</h5>
      <p className={purpose_text}>{text}</p>
      <Image className={purpose_img} src={icon} alt="Icono" width={100} height={100} />
    </div>
  );
}
