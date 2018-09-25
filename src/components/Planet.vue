<template>
  <div class="main">
      <router-link to="/">back</router-link>
      <h1>{{planetData.name}}</h1>
      <p>climate: <b>{{planetData.climate}}</b></p>
      <p>diameter: <b>{{planetData.diameter}}</b></p>
      <p>population: <b>{{planetData.population}}</b></p>
      <p>gravity: <b>{{planetData.gravity}}</b></p>
      <p>terrain: <b>{{planetData.terrain}}</b></p>
      <p>water: <b>{{planetData.surface_water}}</b></p>

  </div>
</template>

<script>

export default {
  name: 'Planet',
  computed: {
    planetData () {
      return this.$store.state.planetData
    }
  }
}
</script>

<style scoped>
</style>
