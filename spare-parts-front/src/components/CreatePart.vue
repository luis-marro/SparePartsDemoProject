<template>
  <div>
    <section class="hero is-info" id="banner">
      <div class="hero-body">
        <p class="title is-large">
          Crea un Nuevo Producto
        </p>
      </div>
    </section>
    <!--Section for the input fields-->
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Detalles del Producto</p>
            <div class="content">
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">
                      Nombre del Producto
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Nombre del Producto">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      Descripción
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Descripción del Producto">
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">
                      Precio
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Precio">
                    </div>
                  </div>
                  <div class="field">
                    <label>Categoría</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select>
                          <option disabled>Elige una Categoria</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column item">
                  <div class="field">
                    <p class="control">
                      <button class="button is-info is-fullwidth">
                        Carga aquí tus imágenes
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "CreatePart"
}
</script>

<style scoped>

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
}

.item button {
  margin-top: auto;
}

</style>