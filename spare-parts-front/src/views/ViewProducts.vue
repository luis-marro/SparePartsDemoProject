<template>
  <div>
    <app-header></app-header>
    <options-bar></options-bar>
    <search-results></search-results>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import OptionsBar from "@/components/OptionsBar";
import SearchResults from "@/components/SearchResults";

export default {
name: "ViewProducts",
  components: {OptionsBar, AppHeader, SearchResults}
}
</script>


<style scoped>

</style>