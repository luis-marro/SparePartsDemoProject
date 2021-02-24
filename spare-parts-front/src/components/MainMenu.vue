<template>
  <div>
    <div class="columns">
      <div class="column is-two-fifths" id="SelectionBox">
      <!--Div for the car menu lookup-->
          <h2 class="title is-2">Selecciona tu Vehículo</h2>
          <div class="container ml-5 mr-5">
            <div class="select is-success is-fullwidth mb-3">
              <select>
                <option value="" disabled selected> Marca</option>
                <option v-for="make in makes" :key="make">{{make}}</option>
              </select>
            </div>
            <div class="select is-success is-loading is-fullwidth mb-3">
              <select>
                <option value="" disabled selected>Modelo</option>
              </select>
            </div>
            <div class="select is-success is-fullwidth mb-3">
              <select>
                <option value="" disabled selected>Año</option>
                <option v-for="year in years" :key="year">{{year}}</option>
              </select>
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
  data() {
    return {
      cars : [
        {make: "Mitsubishi", model: "Lancer"},
        {make: "Mazda", model: "Mazda3"},
        {make: "Mazda", model: "Mazda6"},
        {make: "Volvo", model: "S40"},
        {make: "Volvo", model: "C30"},
        {make: "Mitsubishi", model: "Eclipse Cross"},
      ],
      years: [
        2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
      ],
      makes : [
          "Mitsubishi",
          "Mazda",
          "Volvo",
      ]
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