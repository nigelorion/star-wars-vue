<template>
  <div class="main">
    <form v-if="!loading">
      <div class="inputBox">
        <label for="userInput">characters</label>
        <input type="text" name="userInput" value="hjfdhjg" v-model="userInput">
      </div>
    

      <button v-on:click.prevent="searchCall()">search</button>
      <button type="button" v-on:click="randomSearch()">random</button>

    </form>
    <div v-if="oops">

      <p>oops! try a different search</p>

    </div>
    <img v-if="loading" src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif" alt="">
    <div v-if="!loading">
    
      <h1>{{peopleData.name}}</h1>
      <p>birth year: <b>{{peopleData.birth_year}}</b></p>
      <p>eye color: <b>{{peopleData.eye_color}}</b></p>
      <!-- <p>{{peopleData.films}}</p> -->
      <p>gender: <b>{{peopleData.gender}}</b></p>
      <p>hair color: <b>{{peopleData.hair_color}}</b></p>
      <p>height: <b>{{peopleData.height}}</b></p>
      <p>homeworld: <router-link to="/planet">{{planetData.name}}</router-link>
      <p>mass: <b>{{peopleData.mass}}</b></p>
      <p>skin color: <b>{{peopleData.skin_color}}</b></p>
      <p>species: <b>{{speciesData.name}}</b></p>
      <p>language: <b>{{speciesData.language}}</b></p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Home',
  computed: {
    peopleData () {
      return this.$store.state.peopleData
    },
    planetData () {
      return this.$store.state.planetData
    }
  },
  data () {
    return {
      result: '',
      randomNum: 1,
      userInput: '',
      resultsState: true,
      oops: false,
      type: 'people',
      peopleShips: '',
      shipsData: '',
      loading: false,
      speciesURL: '',
      speciesData: '',
      planetURL: ''
    }
  },
  // mounted () {
  //   this.searchCall()
  // },
  methods: {
    searchCall: function () {
      this.oops = false
      this.loading = true
      axios.get('https://swapi.dev/api/' + this.type + '/?search=' + this.userInput).then(response => {
        this.result = response.data.results[0]
        this.userInput = this.result.name
        this.$store.state.peopleData = this.result
        console.log(this.result)
        if (this.result == null) {
          this.oops = true
          this.resultsState = false
        } else {
          this.resultsState = true
          this.oops = false
          this.speciesURL = this.result.species[0]
          this.speciesSearch()
          this.planetURL = this.result.homeworld
          this.planetSearch()
        }
        this.loading = false
      }).catch(e => {
         if (e) {
          this.oops = true
          this.loading = false
         }
      })
      // this.loading = false
    },
    randomSearch: function () {
      this.oops = false
      this.loading = true
      this.randomGen()
      axios.get('https://swapi.dev/api/people/' + this.randomNum).then(response => {
        this.result = response.data
        this.userInput = this.result.name
        this.$store.state.peopleData = this.result
        this.speciesURL = this.result.species[0]
        this.speciesSearch()
        this.planetURL = this.result.homeworld
        this.planetSearch()
        this.loading = false
      }).catch(e => {
        if (e) {
          this.oops = true
          this.loading = false
        }
        console.log(e)
      })
    },
    ships: function () {
      axios.get(this.peopleShips).then(response => {
        console.log(response.data)
        this.shipsData = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    speciesSearch: function () {
      axios.get(this.speciesURL).then(response => {
        console.log(response.data)
        this.speciesData = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    planetSearch: function () {
      axios.get(this.planetURL).then(response => {
        console.log(response.data)
        // this.$store.state.testingData = this.planetData
        this.$store.state.planetData = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    randomGen: function () {
      this.randomNum = Math.floor(Math.random() * 87) + 1
    }
  }
}
</script>

<style scoped lang="scss">

a {
  color: #42b983;
  text-decoration: none;
  &:hover {
    color: white;
  };
}

  
input {
  background: none;
  border: none;
  border-bottom: solid 2px grey;
  width: 100%;
  color: white;
  font-size: 1.5em;
}


button {
  border: none;
  background-color: rgb(116, 116, 255);
  color: rgb(192, 192, 192);
  margin: 5px;
  font-size: 1.1em;
  &:hover {
    color: darkgrey;
    background-color: white;
  }


}




</style>
