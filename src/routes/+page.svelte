<script>
  import Menu from "../componentes/menu.svelte";
  import contacto from "./contacto/+page.svelte";
  import nosotros from "./nosotros/+page.svelte";
  import footer from '../componentes/footer.svelte';
  import Footer from "../componentes/footer.svelte";
// variables
let titulo = "Mi pagina web";
</script>

<!-- SEO IN SVELTE -->
<svelte:head>
  <title>Inicio</title>
  <meta name="description" content="Nosotros • SvelteKit documentation" />
</svelte:head>

<h2>Inicio</h2>
<p>{ titulo }</p>
<Menu />


<div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Ajustes de jumbotron</h1>
    <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
    <button class="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
  </div>

  <Footer>
  </Footer>