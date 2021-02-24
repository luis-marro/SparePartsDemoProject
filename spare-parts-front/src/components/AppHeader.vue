<template>
  <section class="hero">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-two-fifths">
          <img src="../../public/SVGs/Logo+Name.svg" width="670" height="103">
        </div>
        <div class="column is-half">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input is-info" type="text" placeholder="Qué repuesto estas buscando?">
            </div>
            <div class="control">
              <a class="button is-info">
                <img src="../../public/SVGs/search-24px.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <router-link to="/login">
          <img src="../../public/SVGs/account_circle-24px.svg" width="35" height="35" title="Iniciar Sesión">
          </router-link>
        </div>
        <div class="column">
          <img src="../../public/SVGs/shopping_cart-24px.svg" width="35" height="35" title="Ver carrito de compras">
        </div>
        <router-link to="/createProduct">
          <img src="../../public/SVGs/add_box-black-18dp.svg" width="35" height="35" title="Crear un Nuevo Producto">
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "AppHeader",
  methods: {

  }
}
</script>

<style scoped>

</style>