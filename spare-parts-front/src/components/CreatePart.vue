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
                      <input class="input" type="text" placeholder="Nombre del Producto" v-model="name">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">
                      Descripción
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Descripción del Producto" v-model="description">
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label class="label">
                      Precio
                    </label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Precio" v-model="price">
                    </div>
                  </div>
                  <div class="field">
                    <label>Categoría</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="selectedCategory">
                          <option value="" disabled selected>Elige una Categoria</option>
                          <option v-for="category in categories" :key="category">{{category}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="container">
                    <div class="select is-fullwidth mb-3">
                      <select v-model="make">
                        <option value="" disabled selected> Marca</option>
                        <option v-for="make in makes" :key="make">{{make}}</option>
                      </select>
                    </div>
                    <div class="select  is-loading is-fullwidth mb-3">
                      <select v-model="model">
                        <option value="" disabled selected>Modelo</option>
                      </select>
                    </div>
                    <div class="select is-fullwidth mb-3">
                      <select v-model="year">
                        <option value="" disabled selected>Año</option>
                        <option v-for="year in years" :key="year">{{year}}</option>
                      </select>
                    </div>
                    <div class="control is-success is-fullwidth mb-3">
                      <button class="button is-fullwidth">Agregar</button>
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
                  <div class="field">
                    <p class="control">
                      <button class="button is-success is-fullwidth" v-on:click="saveProduct">
                        Guardar Producto
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
name: "CreatePart",
  data() {
    return {
      name: "",
      price: "",
      description: "",
      selectedCategory: "",
      make: "",
      model: "",
      year: "",
      categories: [
          "Frenos",
          "Motor",
          "Refrigeración",
          "Suspensión"
      ],
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
  },
  methods: {
    saveProduct: function (){
      // add the product to the local storage
      if(localStorage()){
        var part = {
          name: this.name,
          description: this.description,
          price: this.price,
          category: this.category
        }
        localStorage.setItem(this.name, JSON.stringify(part))
      }else{
        alert("No se puede guardar el producto")
      }
    }
  }
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