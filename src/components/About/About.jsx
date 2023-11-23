import React from "react";
<<<<<<< HEAD
import  './about.scss'
export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__grid__content">
            <h5 className="about__grid__content_name">Conoce más sobre</h5>
            <h2 className="about__grid__content_title">
              Universidad Tecnológica de Aguascalientes
            </h2>
            <p className="about__grid__content_text">
=======
import styles from "./About.module.scss";
import Prupose from "../Purpose/Purpose";
const {
  about,
  about__grid,
  about__grid__content,
  about__grid__content_name,
  about__grid__content_title,
  about__grid__content_text,
  about__grid__content__prupouses,
  about__grid_img,

} = styles;

export default function About() {
  return (
    <section className={about}>
      <div className="container">
        <div className={about__grid}>
          <div className={about__grid__content}>
            <h5 className={about__grid__content_name}>Conoce más sobre</h5>
            <h2 className={about__grid__content_title}>
              Universidad Tecnológica de Aguascalientes
            </h2>
            <p className={about__grid__content_text}>
>>>>>>> 4689e15f8b7edf0e60495cc7514ca345cc2ee1c0
              En 1989, el Gobierno Federal de México lanzó un programa integral
              de mejora y evaluación de la educación superior, involucrando a
              universidades públicas, instituciones estatales y universidades
              privadas interesadas. El objetivo era ampliar las oportunidades de
              educación superior, fomentar la aplicación de avances científicos
              y tecnológicos en el sector productivo, y ofrecer una modalidad de
              educación superior que permitiera a los graduados ingresar al
              mundo laboral de manera más rápida sin comprometer la calidad
              educativa. Inspirado por modelos exitosos en otros países, como
              los Technical Colleges en EE. UU. y las Polytechnics en el Reino
              Unido, este enfoque dio lugar al nacimiento del modelo educativo
              de las Universidades Tecnológicas en 1991, alineado con las
              políticas de desarrollo nacional y modernización educativa de la
              época.
            </p>
<<<<<<< HEAD
            <div className="about__grid__content__prupouses">
            {/* <Prupose
=======
            <div className={about__grid__content__prupouses}>
            <Prupose
>>>>>>> 4689e15f8b7edf0e60495cc7514ca345cc2ee1c0
            BgColor = "#0C4681" 
            title= "MISIÓN"
            text="Formar profesionistas con educación integral de excelencia y perfil global."
            icon="iconos/mision.svg"
            />
            <Prupose
            BgColor = "#499BEE"
            title= "VISIÓN"
            text="Ser una Institución de educación superior tecnológica con reconocimiento global, que contribuya al desarrollo sustentable de la región."
            icon="iconos/vision.svg"
<<<<<<< HEAD
            /> */}
            </div>
          </div>
          <div className="about__grid_img">
=======
            />
            </div>
          </div>
          <div className={about__grid_img}>
>>>>>>> 4689e15f8b7edf0e60495cc7514ca345cc2ee1c0
            
          </div>
        </div>
      </div>
    </section>
  );
}
