<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <img src="../../public/StockPhotos/CreateGroupImage.svg">
      </div>
      <div class="column is-two-fifths mt-6">
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Nombre</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Fecha de nacimiento</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-right">
                <input class="input" type="date">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Correo Electrónico</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Teléfono</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Dirección de Entrega</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Método de Pago</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <label class="radio is-medium">
                  <input type="radio" name="member">
                  Efectivo Contra entrega
                </label>
                <label class="radio is-medium">
                  <input type="radio" name="member">
                  Tarjeta de Crédito (Stripe)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <router-link to="/">
            <a class="button is-primary">
              Crear Cuenta
            </a>
            </router-link>
          </p>
          <p class="control">
            <router-link to="/login">
            <a class="button is-light">
              Cancelar
            </a>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "CreateAccount"
}
</script>

<style scoped>


</style>