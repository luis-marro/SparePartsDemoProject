<template>
  <div>
    <app-header></app-header>
    <options-bar></options-bar>
    <create-part></create-part>
  </div>
</template>

<script>
import CreatePart from "@/components/CreatePart";
import AppHeader from "@/components/AppHeader";
import OptionsBar from "@/components/OptionsBar";

export default {
name: "CreateNewPart",
  components: {
    AppHeader,
    OptionsBar,
    CreatePart
  }
}
</script>

<style scoped>

</style>