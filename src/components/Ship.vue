<template>
  <div class="main">

      <h1>{{shipData.name}}</h1>
      <!-- <p>climate: <b>{{shipData.climate}}</b></p>
      <p>diameter: <b>{{shipData.diameter}}</b></p>
      <p>population: <b>{{shipData.population}}</b></p>
      <p>gravity: <b>{{shipData.gravity}}</b></p>
      <p>terrain: <b>{{shipData.terrain}}</b></p>
      <p>water: <b>{{shipData.surface_water}}</b></p> -->

  </div>
</template>

<script>

export default {
  name: 'Ship',
  computed: {
    shipData () {
      return this.$store.state.shipData
    }
  }
}
</script>

<style scoped>
</style>
