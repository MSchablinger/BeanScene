<template>
  <NavBar/>
  <main>
    <div>
      <img :src="'http://'+ip+'/BeanScene/backend/' + path" alt="">
      <h1>{{ name }}</h1>
      <h2>{{ price }} €/kg</h2>
    </div>
    <div>

    </div>
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import {ref} from "vue";

const products = ref([])
const ip = self.location.hostname;

export default {
  name: 'ProductDetail',
  components: {NavBar},
  props: {
    id: Number
  }
}
</script>
<style>
main {
  background-color: #F3E5BC;
  height: 100vh;
  width: 100%;
  padding-top: 2%;
}
</style>