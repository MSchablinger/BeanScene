<template>
<main>
  <HomeNews>
  </HomeNews>
</main>
</template>

<script>
import HomeNews from "./HomeNews.vue";
export default {
  name: "LandingPage",
  components: {
    HomeNews
  }
}
</script>

<style scoped>
main {
  background-color: #F3E5BC;
  scroll-behavior: smooth;
}
</style>