<template>
  <div>
    <div class="columns">
      <div class="column is-two-fifths" id="SelectionBox">
      <!--Div for the car menu lookup-->
          <h2 class="title is-2">Selecciona tu Vehículo</h2>
          <div class="container ml-5 mr-5">
            <div class="select is-success is-fullwidth mb-3">
              <select name="modelSelect" @change="makeChanged($event)" v-model="selectedMake">
                <option value="" disabled selected> Marca</option>
                <option v-for="(make, index) in this.makes" :key="`make-${index}`">{{make}}</option>
              </select>
            </div>
            <div class="select is-success is-fullwidth mb-3">
              <select>
                <option value="" disabled selected>Modelo</option>
                <option v-for="(model, index) in this.models" :key="`models-${index}`">{{model}}</option>
              </select>
            </div>
            <div class="select is-success is-fullwidth mb-3">
              <select>
                <option value="" disabled selected>Año</option>
                <option v-for="year in data.years" :key="year">{{year}}</option>
              </select>
            </div>
            <div class="control is-success is-fullwidth mb-3">
              <button class="button is-fullwidth">Agregar</button>
            </div>
        </div>
        <img src="../../public/StockPhotos/VolvoSteering.jpg" height="655" width="871">
      </div>
      <div class="column is-three-fifths mt-5">
        <!-- Div for the image column-->
        <img src="../../public/StockPhotos/LancerGroup.png" height="900" width="920">
      </div>
    </div>
    <!--Here goes the menu images below-->
    <div class="columns">
      <div class="column p-0">
        <img src="../../public/StockPhotos/brakes.png" class="is-hoverable">
      </div>
      <div class="column p-0">
        <img src="../../public/StockPhotos/engine.png" >
      </div>
      <div class="column p-0">
        <img src="../../public/StockPhotos/radiator.png" >
      </div>
      <div class="column p-0">
        <img src="../../public/StockPhotos/shocks.png" >
      </div>
    </div>
    <!--Section for the footer-->
    <footer class="footer">
      <div class="content has-text-centered">
        <h3 class="title is-3">Contáctanos</h3>
        <h3 class="title is-4">Teléfono: 4689-8758</h3>
        <h3 class="title is-4">Correo: repuestos@repuestos.com</h3>
      </div>

    </footer>
  </div>
</template>

<script>
export default {
name: "MainMenu",
  data: () => { // data()
    return {
      data: {
        selectedMake: null,
        makes : [],
        models: [],
        years: []
      }
    }
  },
   async mounted(){
     await this.getCars()
     await this.populateYears()
  },
  methods: {
   async getCars(){
      const res = await fetch('https://carssparepartsstore.appspot.com/api/v1/getAllCars')
      console.log("Retrieved the data")
      const resData = await res.json()
      console.log("Makes: " + resData.Makes)
      return resData.Makes
    },
    async makeChanged(event){
      console.log(event.target.value)
      const res = await fetch('https://carssparepartsstore.appspot.com/api/v1/getSpecificCar?carMake=' + event.target.value)
      this.models = res.json()
      console.log(this.models)
    },
    populateYears(){
      const start = 1998
      const year = new Date().getFullYear()
      this.years.splice(year - start)
      let posCounter = 0
      for (let i = start; i < year; i++){
        this.set(this.years, posCounter, i)
        posCounter++
      }
      console.log(this.years)
    }
  }
}
</script>

<style scoped>
#SelectionBox {
  background-color: black;
}

#SelectionBox h2 {
  color: white;
}

footer {
  background-color: black;
}

footer h3,h4 {
  color: white;
}
</style>