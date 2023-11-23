import React from "react";
import "./socialMedia.scss";
export default function SocialMedia() {
  return (
    <div className="social__backgorund">
      <a className="social__backgorund_phone" href="tel:+524499105000">Llámanos al 449 910 5000</a>
      <a><img className="social__backgorund_icon" href="https://www.tiktok.com/@utaags" src="/imagenes/tiktok.png" alt="" /></a>
      <img className="social__backgorund_icon" href="https://www.instagram.com/utaags/" src="imagenes/instagram.png" alt="" />
      <img className="social__backgorund_icon" href="" src="imagenes/twiter.png" alt="" />
      <img className="social__backgorund_icon" href="https://www.facebook.com/LobosUTAguascalientes/?locale=es_LA"src="imagenes/facebook.png" alt="" />
    </div>
  );
}
