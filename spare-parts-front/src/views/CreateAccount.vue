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
                <input class="input" type="text" v-model="name">
              </p>
            </div>
          </div>
        </div>
        <!--div class="field is-horizontal">
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
        </div-->
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Correo Electrónico</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="email">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-large">
            <label class="label">Contraseña</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="password" v-model="unsafePassword">
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
                <input class="input" type="text" v-model="phoneNumber">
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
                <input class="input" type="text" v-model="address">
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
                  <input type="radio" name="member" v-model="isCash">
                  Efectivo Contra entrega
                </label>
                <label class="radio is-medium">
                  <input type="radio" name="member" v-model="isCard">
                  Tarjeta de Crédito (Stripe)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <router-link to="/">
            <button class="button is-primary" @click="clickCreateAccount">
              Crear Cuenta
            </button>
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
name: "CreateAccount",
  data: () =>{
    return {
      name : '',
      email : '',
      unsafePassword: '',
      phoneNumber: '',
      address: '',
      payment: 2,
      isCash : false,
      isCard : false,
    }
  },
  methods: {
    clickCreateAccount: async function () {
      // get the payment method
      this.payment = this.isCash ? 0:1
      // create a JSON object
      const userData = JSON.stringify({
        name: this.name,
        email: this.email,
        unsafePassword: this.unsafePassword,
        phoneNumber: this.phoneNumber,
        address: this.address,
        payment: this.payment
      })
      const url = 'https://carssparepartsstore.appspot.com/api/v1/createUser'
      const apiOptions = {
        method: 'POST',
        body: userData
      }
      const response = await fetch(url, apiOptions)
      if(response.status === 200){
        alert("Usuario Creado")
      }else{
        alert("Error al crear la cuenta, por favor revise los datos")
      }
    }
  }
}
</script>

<style scoped>


</style>