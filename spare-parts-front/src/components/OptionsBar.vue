<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">

        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="column">
          <a class="navbar-item">
            Repuestos para Autos
          </a>
          <hr class="navbar-divider">
        </div>
        <div class="column">
          <a class="navbar-item">
            Repuestos para Motos
          </a>
          <hr class="navbar-divider">
        </div>
        <div class="column">
          <a class="navbar-item">
            Repuestos para Cabezales
          </a>
          <hr class="navbar-divider">
        </div>

    </div>
  </nav>
</template>

<script>
export default {
name: "OptionsBar"
}
</script>

<style scoped>

</style>