import React from "react";
import "./socialMedia.scss";
export default function SocialMedia() {
  return (
    <div className="social__backgorund">
      <a className="social__backgorund_phone" href="tel:+524499105000">Llámanos al 449 910 5000</a>
      <img className="social__backgorund_icon" src="/imagenes/tiktok.png" alt="" />
      <img className="social__backgorund_icon" src="imagenes/instagram.png" alt="" />
      <img className="social__backgorund_icon" src="imagenes/twiter.png" alt="" />
      <img className="social__backgorund_icon" src="imagenes/facebook.png" alt="" />
    </div>
  );
}
