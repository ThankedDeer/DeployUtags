import React from 'react';

function Estadias() {
    return (
        <div>
            <section id='titulo'>
                <p>
                    <span className="primer-texto">Información sobre <br /></span>
                    <span className="segundo-texto"><strong>Estadías profesionales</strong></span>
                </p>
            </section>
        
            <section id='info'>
                <span id='titulo-uno'>¿Qué es una <br /></span>
                <span id='titulo-dos'><strong>Estadía</strong> <br /></span>
                <span id='titulo-tres'><strong>Profesional?</strong></span>
                <p id='texto-info'> La Universidad Tecnológica de Aguascalientes, atendiendo a su modelo educativo, el cual está enfocado a que el estudiante 
                ponga en práctica sus conocimientos teórico/prácticos adquiridos durante sus estudios, implementa periódicamente un programa que vincula al 
                estudiante en la práctica laboral, denominado “Estadía Profesional”. </p>
                <img id='img-estudiantes' src="/imagenes/estudiantes.webp" alt="Estudiantes en acción"/>
                <p id='texto2-info'>El programa “Estadía Profesional” está diseñado para que el estudiante en su último cuatrimestre realice un proyecto de 
                tiempo completo dentro de una empresa durante un período máximo de quince semanas, cumpliendo las horas establecidas en el mapa curricular 
                de su programa educativo. El estudiante trabajará en la empresa (sin compromiso laboral) bajo la asesoría de un profesor de la universidad y 
                de un tutor por parte de la empresa, quien coordinará y supervisará al estudiante. <br /></p>
                <p id='texto3-info'>El proyecto de “Estadía Profesional” lo define la empresa en conjunto con la Universidad, el cual tendrá las siguientes 
                características: <br /></p>
                <section id='lista-info'>
                    <li>Que resuelva un problema real de la organización.</li>
                    <li>Que promueva la adquisición de experiencia para el estudiante.</li>
                    <li>Que sea acorde al perfil del programa educativo del estudiante.</li>
                    <li>Que implique una aportación técnica o tecnológica.</li>
                </section>
            </section>
            <section id='info-estadias'>
                <section id='info-colegio'>
                    <img id='colegio' src="/imagenes/colegio.png"/><br />
                </section>
                <section id='info-graduacion'>
                    <img id='graduacion' src="/imagenes/graduacion.png"/>
                </section>
                <section id='info-fabrica'>
                    <img id='fabrica' src="/imagenes/fabrica.png"/>
                </section>
            </section>
            <section id='titulo-iconos'>
                <span id='titu-colegio'><strong>La Universidad adquirirá los siguientes <br /> compromisos:</strong></span>
                <span id='titu-graduacion'><strong>Los Estudiantes adquirirán los siguientes <br /> compromisos:</strong></span>
                <span id='titu-fabrica'><strong>La Empresa adquirirá los siguientes <br /> compromisos:</strong></span>
            </section>
            <section id='listas-info' class='lista-acomodada'>
                <ul id='lista-universidad'>
                    <li>Asignar un estudiante con formación en un campo específico, para realizar el proyecto.</li>
                    <li>Asignar un profesor que fungirá como asesor del alumno y vínculo directo con el tutor designado por la empresa.</li>
                    <li>Ofrecer al alumno la infraestructura de la Universidad según disponibilidad, para el desarrollo del proyecto convenido.</li>
                    <li>Asegurar ante el IMSS al alumno hasta el término de la estadía.</li>
                </ul>
                <ul id='lista-graduacion'>
                    <li>Sujetarse a las normas y políticas definidas por la empresa.</li>
                    <li>Mantener informados a su tutor y asesor de los avances de su proyecto.</li>
                    <li>Mantener absoluta confidencialidad de la información que la empresa defina.</li>
                    <li>Cumplir con calidad y en tiempo con las actividades señaladas en el programa.</li>
                    <li>En caso de incumplimiento o cancelación del proyecto asignado, el estudiante deberá notificar inmediatamente a su asesor y a la Dirección del Programa Educativo correspondiente; quienes serán responsables de informar esta situación al Departamento de Prácticas y Estadías.</li>
                </ul>
                <ul id='lista-empresa'>
                    <li>Dar al estudiante las facilidades necesarias para el desarrollo del proyecto.</li>
                    <li>Asignar un tutor como autoridad directa del estudiante que funja como responsable del desarrollo del proyecto.</li>
                    <li>Emitir las evaluaciones parciales y final sobre el desempeño del estudiante.</li>
                    <li>Dar respuesta a los sondeos vía telefónica de seguimiento y evaluación de satisfacción de estadía.</li>
                    <li>Cubrir los gastos, en caso de que el proyecto así lo requiera, del desarrollo de prototipos.</li>
                </ul>
            </section>
            <section id='texto-final'>
                <p>Al tener en su empresa un estudiante desarrollando un proyecto de “Estadía Profesional”, usted colabora con la educación profesional que imparte la Universidad Tecnológica de Aguascalientes y a la vez obtiene grandes beneficios para su empresa al contribuir a la formación de Capital Humano de Calidad.</p>
            </section>
            <section id='fondo-final'>
                <p id='titulo-img'>¿Como solicitar una estadía profesional?</p>
                <img src="/imagenes/internet.png"/>
                <img src="/imagenes/exterior(1).png"/>
                <img src="/imagenes/organigrama(1).png"/>
                <p id='texto1'><a href="http://vinculacion.utags.edu.mx/">Ingresa al portal de vinculación</a></p>
                <p id='texto2'><a href="http://vinculacion.utags.edu.mx/">Registra tu empresa</a></p>
                <p id='texto3'><a href="http://vinculacion.utags.edu.mx/">Solicita tu proyecto</a></p>
                <p id='titulo-fin'>Plataformas</p>
                <button type="button" class="btn btn-primary"><a href="https://www.utags.edu.mx/index.php/vinculacion/empresas"><i class="bi bi-box-arrow-up-right"></i>Vinculación</a></button>
                <button type="button" class="btn btn-primary"><i class="bi bi-box-arrow-up-right"></i>Edist</button>
                <button type="button" class="btn btn-primary"><i class="bi bi-box-arrow-up-right"></i>Sito</button>
            </section>
        </div>
    )
}

export default Estadias;

