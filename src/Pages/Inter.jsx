import React from 'react';
import "./inter.css";

export default function Interna(){
    return (
        <div> <br /><br /><br /><br /><br /><br />
            <section id='titulo'>
                <p>
                    <span class="primer-texto">Información sobre <br /></span>
                    <span class="segundo-texto"><strong>Internacionalización</strong></span>
                </p>
            </section>
        
            <section id='info'>
                <span id='titulo-tres'><strong>Objetivo</strong></span>
                <p id='texto-info'> El objetivo del Departamento de Internacionalización es establecer vínculos y cooperación 
                bilateral con las instituciones extranjeras con efecto de promover la movilidad estudiantil y docente; así 
                como la creación de redes colaborativas en materia académica, formativa y de investigación. </p>

                <img id='img-estudiantes' src="/imagenes/inter.webp"/><br />
                <p id='texto3-info'>Los programas de movilidad que tenemos disponibles son: <br /></p>
                <section id='lista-info'>
                        <ul class="columnas">
                            <li>Programas internacionales de movilidad.</li>
                            <li>Programas de internacionalización en casa.</li>
                            <li>Programas internacionales de investigación.</li>
                            <li>Programas en México para estudiantes internacionales.</li>
                        </ul>
                        <ul class="columnas">
                            <li>Viajes internacionales de instrucción.</li>
                            <li>Certificaciones de francés y de inglés.</li>
                            <li>Programa de estudios de Licencia Profesional y Tecnológica en Francia.</li>
                        </ul>
                </section>
            </section> <br />

            <section id="info-becas">
                <p>Becas Alianzas del Pacifico 2022</p>
            </section>

            <section id="carrusel">
                    <img class="slider-item" src="/imagenes/ca1.webp"/>
                    <img class="slider-item" src="/imagenes/ca2.webp"/>
                    <img class="slider-item" src="/imagenes/ca3.webp"/>
                    <img class="slider-item" src="/imagenes/ca4.webp"/>
                    <img class="slider-item" src="/imagenes/ca5.webp"/>
                    <img class="slider-item" src="/imagenes/ca6.webp"/>
                    <img class="slider-item" src="/imagenes/ca7.webp"/>
            </section><br />

            <div className="two-column-container">
                <section className="internaa">
                    <h3>Internacionalización</h3>
                    <section id="info-interna">
                    <ul>
                        <li>Victoria Bravo Ahuja Roth</li>
                        <li>Encargada de Internacionalización</li>
                        <li>Telefonos: 910-50-00 Ext. 1153</li>
                        <li>
                        <a href="mailto:victoria.bravo@utags.edu.mx">victoria.bravo@utags.edu.mx</a>
                        </li>
                    </ul>
                    </section>
                    <section id="info-interna">
                    <ul>
                        <li>Dr. Felipe de Jesús Villalobos Delgado</li>
                        <li>PA. Centro de Diseño, Desarrollo e Innovación 4.0 (CICMA)</li>
                        <li>Teléfono: 449 910 50 00  ext. 1605</li>
                        <li>
                        <a href="mailto:felipe.villalobos@utags.edu.mx">felipe.villalobos@utags.edu.mx</a>
                        </li>
                    </ul>
                    </section>
                </section>

                <section>
                    <section>
                    <img id="interna" src="/imagenes/infoo.webp" alt="Imagen de Internacionalización" />
                    </section>
                </section>
            </div><br /> <br />
        </div>
    );
}