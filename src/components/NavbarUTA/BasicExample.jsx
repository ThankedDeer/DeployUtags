import React from 'react'
import Image from 'next/image'
export default function BasicExample() {
  return (
    <div>
      <div className="azul"></div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <Image 
      alt='d'
      src={"/imagenes/2.webp"}
      width={100}
      height={100}
      />
      </a>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nablist">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Bolsatrabajo">Bolsa Trabajo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Admisiones">Admisiones 2023</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Becas">Becas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Estadias">Estadias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/TSU">TSU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Inter">Internacionalización</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/vacantes">Vacantes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/exito">Historias de exito</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.utags.edu.mx/images/Archivos/Croquis/CROQUIS-UTA.pdf">Vida en el campus</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
