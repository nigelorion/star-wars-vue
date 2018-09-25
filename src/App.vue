<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans');


body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Work Sans', sans-serif;
  color: rgb(196, 48, 48);
  margin-top: 60px;
  background-image: url('https://fsmedia.imgix.net/e3/65/af/fe/f8db/4252/8dec/c3f9f06d72ee/lifeinspacejpeg.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 900px) {
    width: 100%;
    height: 100%;
  }
}

.container {
  background-color: rgba(2, 2, 2, 0.68);
  width: 40%;
  padding: 10px;
  min-height: 850px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  @media(max-width: 900px) {
    min-height: none;
    width: 100%;
    height: 100%;
  }
}


</style>
