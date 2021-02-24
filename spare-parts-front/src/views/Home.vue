<template>
  <div>
    <app-header></app-header>
    <options-bar></options-bar>
    <main-menu></main-menu>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import OptionsBar from "@/components/OptionsBar";
import MainMenu from "@/components/MainMenu";

export default {
  name: 'Home',
  components: {
    AppHeader,
    OptionsBar,
    MainMenu
  },
  methods: {

  }
}
</script>
