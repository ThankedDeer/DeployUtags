import React from "react";
import './purpose.scss'

export default function Prupose(props) {
  const { BgColor, title, text, icon } = props;

  const divStyle = {
    backgroundColor: BgColor,
  };

  return (
    <div className="purpose" style={divStyle}>
      <h5 className="purpose_title">{title}</h5>
      <p className="purpose_text">{text}</p>
      <img className="purpose_img" src={icon} alt="icono" />
    </div>
  );
}
