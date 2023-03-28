<template>
  <main>
    <NavBar id="nav-bar"/>
    <div id="wrapper">
      <HomeNews id="home-news"/>
      <ShopWidget id="shop-widget"/>
    </div>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import HomeNews from "../components/HomeNews.vue";
import ShopWidget from "@/components/ShopWidget.vue";

export default {
  name: "LandingPage",
  components: {
    NavBar,
    HomeNews,
    ShopWidget
  }
}
</script>
<style scoped>
#nav-bar {
  height: 10%;
  position: fixed;
}
#home-news {
  height: 90%;
}
#shop-widget {
  margin-top: 5%;
  margin-bottom: 10%;
}
#wrapper {
  background-color: #F3E5BC;
  height: 100%;
  padding-left: 10%;
  padding-top: 7%;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
main {
  height: 100%;
}
</style>