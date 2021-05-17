<template>
  <div>
    <section class="hero">
      <div class="hero-body pb-0">
        <div class="columns">
          <div class="column is-two-thirds">
            <img src="../../public/SVGs/Logo+Name.svg" height="163" width="730">
          </div>
          <div class="column is-one-third">
            <img src="../../public/SVGs/Gears_Down.svg" width="298" height="236">
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-half has-text-centered">
          <h1 class="title is-1">Bienvenido</h1>
        </div>
        <!--div for the tile for the login information-->
        <div class="column is-half">
          <div class="tile is-ancestor is-half">
            <div class="tile is-parent ">
              <div class="tile is-child has-text-centered box">
                <h1 class="title is-2 ">Inicio de Sesión</h1><br>
                <h2 class="title is-4">Por favor ingresa a tu cuenta</h2>
                <!--Input Fields-->
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input is-info is-medium" type="email" placeholder="Correo Electrónico" v-model="this.email">
                    <span class="icon is-small is-left">
                      <img src="../../public/SVGs/email.svg">
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input is-info is-medium" type="password" placeholder="Contraseña" v-model="this.password">
                    <span class="icon is-small is-left">
                      <img src="../../public/SVGs/lock.svg">
                    </span>
                  </p>
                </div>
                <div class="columns">
                  <div class="column is-half">
                    <div class="field">
                      <div class="control">
                        <label class="radio">
                          <input type="radio" name="RememberMe">
                          Recuérdame
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <router-link to="/login/recoverPassword">
                      <div>
                        <p>Olvidé mi contraseña</p>
                      </div>
                    </router-link>
                  </div>
                </div>
                <router-link to="/">
                  <div class="field mb-3">
                    <div class="control is-fullwidth">
                      <button class="button is-info" v-on:click="doLogin">Iniciar Sesión</button>
                    </div>
                  </div>
                </router-link>
                <router-link to="/createAccount">
                  <div class="field">
                    <div class="control is-fullwidth">
                      <button class="button is-info">Crear una Cuenta</button>
                    </div>
                  </div>
                </router-link>
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
name: "Login",
  data: () => {
    return {
      email : '',
      password: ''
    }
  },
  methods: {
    doLogin: async function(){
      const loginUrl = 'https://carssparepartsstore.appspot.com/api/v1/findUser'
      const body = JSON.stringify({
        unsafePassword : this.password,
        email: this.email
      })
      console.log('user: ' + body)
      const options = {
        method: 'POST',
        body: body
      }
      try {
        const response = await fetch(loginUrl, options)
        const resData = await response.text()
        alert(resData)
        console.log(resData)
        alert('Bienvenida ' + resData.name)
      }catch(error){
        console.log(error)
        alert('Error al iniciar sesión, vuelve a intentarlo')
      }
    }
  }
}
</script>

<style scoped>

</style>