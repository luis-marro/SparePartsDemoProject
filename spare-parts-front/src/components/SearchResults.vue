<template>
  <div>
    <section class="section">
      <div class="columns">
        <!--First Column, to contain the side menu containing categories-->
        <div class="column is-one-third selection-box">
          <h1 class="title is-large">Tus Vehículos</h1>
          <h3 class="subtitle">No tienes ninguno agregado</h3>
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
            <div class="control is-success is-fullwidth mb-3">
              <button class="button is-fullwidth">Agregar</button>
            </div>
          </div>
        </div>
        <!--Div for the search results-->
        <div class="column">
          <div class="is-ancestor">
            <div class="tile is-vertical">
              <div class="tile box" v-for="product in products" :key="product.name">
                <div class="columns">
                  <div class="column"> <!--Column to display the image-->
                    <img :src="product.img">
                  </div>
                  <div class="column"><!--Column to display the description-->
                    <h1 class="title is-small">{{product.name}}</h1>
                    <h1 class="title is-small">{{product.category}}</h1>
                  </div>
                  <div class="column"><!--Column to display the price-->
                    <h1 class="title is-medium">Q {{product.price}}</h1>
                  </div>
                </div>
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
name: "SearchResults",
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
      ],
      products: [
        {name: "Conector Filtro de Aceite - Saab", category: "Motor", price: 550, img: "../../public/StockPhotos/filterHousing.jpg"},
        {name: "Turbocargador", category: "Motor", price: 2300, img: "../../public/StockPhotos/turbo.jpg"},
        {name: "Supercargador", category: "Motor", price: 2000, img: "../../public/StockPhotos/SuperCharger.png"},
        {name: "Termostato", category: "Motor", price: 400, img: "../../public/StockPhotos/thermostat.jpg"}
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.selection-box {
  background-color: black;
}

.selection-box h1 {
  color: white;
}

.selection-box h3 {
  color: white;
}

</style>