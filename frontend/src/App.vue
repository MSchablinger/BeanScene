<template>
  <NavBar id="navbar"></NavBar>
  <LandingPage id="landingpage"></LandingPage>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage
  }
}
</script>

<style>
#navbar {
  position: fixed;
}
#landingpage {
  top: 10%;
  background-color: #F3E5BC;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
