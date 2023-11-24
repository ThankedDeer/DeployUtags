import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-content">
        <div className="footer__main-content--info">
          
          <p className="footer-info-start footer--mainText">
            Universidad Tecnológica de Aguascalientes
          </p>
        </div>
        <div className="footer__main-content--info">
          <p className="footer-title">Enlaces</p>
          <a href="/">Inicio</a>
          <a href="/tsu">Carreras</a>
          <a href="/becas">Becas</a>
          <a href="/estadias">Estadias</a>
          {/* Agrega otros enlaces relevantes de la universidad */}
        </div>
        <div className="footer__main-content--info">
          <p className="footer-title">Horario de atención</p>
          <p className="footer-info">Lunes a Viernes: 8:00 am - 6:00 pm</p>
          <p className="footer-info">Sábado: 9:00 am - 2:00 pm</p>
          <p className="footer-info">Domingo: Cerrado</p>
        </div>
        <div className="footer__main-content--info">
          <p className="footer-title">Contacto</p>
          <a href="https://www.uta.edu.mx" target="_blank" rel="noopener noreferrer">
            <span className="footer-loc">
              Dirección: Dirección de la universidad, Aguascalientes, México
            </span>{" "}
          </a>
          <a href="tel:+123456789" className="footer-info">
            Teléfono: +123456789
          </a>
        </div>
      </div>
    </footer>
  );
}
