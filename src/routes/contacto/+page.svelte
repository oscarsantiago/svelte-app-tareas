<script>
  import Menu from "../../componentes/menu.svelte";
</script>

<!-- SEO IN SVELTE -->
<svelte:head>
  <title>Contacto</title>
  <meta name="description" content="Nosotros • SvelteKit documentation" />
</svelte:head>

<h2>Contacto</h2>
<Menu />

<div class="mt-3">
  <p>Formulairo de contacto</p>

  <form method="post" autocomplete="off">
    <p>Nombre</p>
    <input type="text" name="nombre" class="form-control" />
    <p>Mensaje</p>
    <textarea name="mensaje" cols="30" rows="10" class="form-control" />
    <button class="btn btn-primary">Enviame mensaje</button>
  </form>
</div>
