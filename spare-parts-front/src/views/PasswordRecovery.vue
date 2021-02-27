<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <img src="../../public/SVGs/Logo+Name.svg">
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-half">
          <h1 class="title is-large">Recupera tu Contraseña</h1>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-info is-large" type="email" placeholder="Correo Electrónico">
              <span class="icon is-small is-left">
                <img src="../../public/SVGs/email.svg">
              </span>
            </p>
            <div class="field mt-3 ">
              <div class="control is-fullwidth">
                <button class="button is-info">Recuperar Contraseña</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "PasswordRecovery"
}
</script>

<style scoped>

</style>