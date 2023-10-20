<script>
  import Icono from "../imagenes/logo-ee.png";
  import Fondo from "../imagenes/fondo-ee.png";
//   import Icono2 from "../../static/logo-ee.png";
//   import Fondo2 from "../../static/fondo-ee.png";
</script>

<!-- SEO IN SVELTE -->
<svelte:head>
  <title>Inicio</title>
  <meta name="description" content="English Explorers" />
</svelte:head>
<!-- ec+ -->

<html lang="en" class="h-100">
  <head>
    <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="preload" as="style" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />

    <style>
        * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }
      body {
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: green;
        font-family: 'Nunito';
        font-size:100%;
      }

      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, 0.1);
        border: solid rgba(0, 0, 0, 0.15);
        border-width: 1px 0;
        box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
          inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -0.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .max-w-900 {
        max-width: 800px !important;
        margin: 0px auto !important;
      }

      .btn-crear-cuenta {
        background-color: #c70039 !important;
        color: white !important;
        border: 0px solid white !important;
      }

      .btn-iniciar-sesion {
        background-color: white !important;
        color: #333 !important;
        border: 0px solid white !important;
      }
      .lead {
        font-weight: bold !important;
        font-size: 16px !important;
      }
      .btn-iniciar-sesion:hover {
        background-color: #f1f2f2 !important;
      }
      .btn-crear-cuenta:hover {
        background-color: #f1f2f2 !important;
        color: #333 !important;
      }
      .btn-secondary {
        border: 0px solid white;
        background-color: #52be80 !important;
      }
      .modal-texto {
        font-size: 12px;
      }
      .modal-body {
        color: #333 !important;
      }
      .text-white-home {
        color: #19398f;
        background-color: white;
        padding: 8px;
        border-radius: 8px;
        font-size: 45px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .text-red-home {
        color: white;
        background-color: #f92447;
        padding: 8px;
        border-radius: 5px;
        font-size: 30px;
        padding-top: 3px;
      }
      .text-white-home-description {
        color: #19398f;
        background-color: white;
        padding: 5px;
        border-radius: 8px;
      }
      /* nuevo centro */
      .div_contenedor {
        background: crimson;
        height: 100vh;
      }
      .div_centrado {
        max-width: 800px;
        height: 200px;
        position: absolute;
        top: 48%;
        left: 39%;
        margin-top: -100px;
        margin-left: -100px;
      }
      .div_centrado h2{
        margin-top:-45px;
        margin-bottom:10px;
      }
      .icono{
        max-width: 600px !important;
      }
      @media (max-width: 768px) {
        .icono{
            width: 100% !important;
        }
        .div_centrado h2{
            margin-top:0px;
        }
        .div_centrado {
        max-width: auto;
        top: 48%;
        left: 20%;
        margin-top: -100px;
        margin-left: -90px;
      }
      }
    </style>
  </head>

  <body class="d-flex h-100 text-center text-bg-dark" style="background-image: url(' { Fondo } ');">
    <div class="div_contenedor">
      <div class="div_centrado">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="icono" src={ Icono }/>
        <h2><b>A colorful learning experience</b></h2>
        <div class="d-grid gap-2 d-md-block">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#"><button class="btn btn-primary btn-iniciar-sesion -btn-block btn-lg -shadow-lg mt-2" type="button">Iniciar sesión <i class="bi bi-box-arrow-in-right"></i></button></a>&nbsp;&nbsp;
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#"><button class="btn btn-primary btn-crear-cuenta -btn-block btn-lg -shadow-lg mt-2" type="button">Crear cuenta <i class="bi bi-person-plus-fill"></i></button></a>
        </div>
      </div>
    </div>
  </body>
</html>
