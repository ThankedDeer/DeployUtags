import React from 'react';
import "./Bolsatrabajo.css";


export default function Bolsa() {
return (
    <div>
        <section id="intro">
            <h4>Bienvenidos</h4>
            <h1>Bolsa de Trabajo y Seguimiento de Egresados</h1>
        </section><br></br><br></br>

        <div className="two-column-container">
        <section id="objetivo" className="objetivo-column">
        <h1>Objetivo</h1>
            <p>Promover y vincular a los egresados en el mercado laboral de acuerdo a los requerimientos de las empresas públicas y 
                privadas, para ocupar puestos vinculados con los programas educativos, así como la recopilación de indicadores que 
                permitan medir los servicios de nuestra institución.</p>
        </section>

            <section id="contacto" className="contacto-column">
                <ul>
                    <div className='contacto'>
                    <ol>
                        <h2>Contacto</h2>
                                    <h3>Lic. Ana Laura Flores Murillo</h3>
                                    <p>Universidad Tecnologica de Aguascalientes</p>
                                    <p>(449)910 50 00 Ext. 1124</p>
                                    <p>alflores@utags.edu.mx</p>
                    </ol>
                    </div>
                </ul>
            </section>
            </div><br></br>

<div className="two-column-container">
<section id="ofertas" className="column">
    <ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSekH_lFT6hhWy7PyUCdsDCtDISCDCrcGYNaGrXn2017hsD1HQ/viewform?pli=11" target="_blank" rel="noopener noreferrer">
        <img src='/imagenes/V.webp'/>
        </a>
        <a href='/vacantes'>
        <img src='/imagenes/N.webp'/>
        </a>
        <a href='https://docs.google.com/forms/d/1ju5QJ65VL-FQWeqBMieR7TrQksk8pzVcovPLlpl_clg/viewform?edit_requested=true&usuario=raul.alfaro'>
        <img src='/imagenes/A.webp'/>
        </a>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe7nJ5mbotCObVKzYFs4aqZKsMyGVbBDnA1sn9dDaKW-oOvkw/viewform'>
        <img src='/imagenes/M.webp'/>
        </a>
    </ul>
</section>

<section id="info" className="column">
    <h4>Resultados</h4>
    <ul>
        <div className='trabajos'>
        <ol>
        <a href='https://www.occ.com.mx/empresas?ads_cmpid=20341207587&ads_adid=&ads_matchtype=&ads_network=x&ads_creative=&utm_term=&ads_targetid=&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gad_source=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM2nqDb6KqjnUFn9siPxBXxRYpQEORSyrc9n3r-Jc5GnMf8yhvf6uNBoCDz0QAvD_BwE'>
            <h2>Ingeniero en tecnologías de la información</h2>
                    <li>
                        <p>Prestaciones de ley (IMSS, vacaciones, aguinaldo)</p>
                    </li>
                    <li>
                        <p>Fondo de ahorro</p>
                    </li>
                    <li>
                        <p>Estabilidad laboral</p>
                    </li>
        <h4>FRIGORIFICO Y EMPACADORA DE AGUASCALIENTES SA DE CV</h4>
        <h4>San Francisco de los Romo, Aguascalientes</h4>
        </a>
        </ol>
        </div>
        <div className='trabajos'>
        <ol>
        <a href='https://www.occ.com.mx/empresas?ads_cmpid=20341207587&ads_adid=&ads_matchtype=&ads_network=x&ads_creative=&utm_term=&ads_targetid=&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gad_source=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM2nqDb6KqjnUFn9siPxBXxRYpQEORSyrc9n3r-Jc5GnMf8yhvf6uNBoCDz0QAvD_BwE'>
            <h2>JR. Accountant-Remote </h2>
                    <li>
                        <p>Vales de despensa y de restaurante.</p>
                    </li>
                    <li>
                        <p>Fondo de ahorro.</p>
                    </li>
                    <li>
                        <p>Seguro de gastos medicos mayores y menores.</p>
                    </li>
        <h4>GORDIAN STAFFING</h4>
        <h4>Aguascalientes, Aguascalientes</h4>
        </a>
        </ol>
        </div>
        <div className='trabajos'>
        <ol>
            <a href='https://www.occ.com.mx/empresas?ads_cmpid=20341207587&ads_adid=&ads_matchtype=&ads_network=x&ads_creative=&utm_term=&ads_targetid=&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gad_source=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM2nqDb6KqjnUFn9siPxBXxRYpQEORSyrc9n3r-Jc5GnMf8yhvf6uNBoCDz0QAvD_BwE'>
            <h2>REMOTE Finacial Assistant (AP/AR)</h2>
                    <li>
                        <p>Trabajo remoto</p>
                    </li>
                    <li>
                        <p>Fondo de ahorro</p>
                    </li>
                    <li>
                        <p>Prestaciones superiores a las de ley </p>
                    </li>
        <h4>GORDIAN STAFFING</h4>
        <h4>Aguascalientes, Aguascalientes</h4>
        </a>
        </ol>
        </div>
        </ul>
</section>
</div><br></br>
    </div>
  );
}
