<template>
  <NavBar/>
  <main>
    <div>
      <img :src="'http://'+ip+'/BeanScene/backend/' + path" alt="">
      <h1>{{ products[id - 1].name }}</h1>
      <h2>{{ products[id - 1].price }} €/kg</h2>
    </div>
    <div>
    </div>
  </main>
</template>
<script defer>
import NavBar from "@/components/NavBar.vue";
import { onMounted, ref } from 'vue'

export default {
  name: 'ProductDetail',
  components: {NavBar},
  props: {
    id: Number
  },
  setup() {
    const products = ref([])
    const ip = self.location.hostname;

    onMounted(() => {
      fetch('http://' + ip + '/BeanScene/backend/product.php')
          .then(response => response.json())
          .then(data => {
            products.value = data.products
          })
    })

    return {
      products
    }
  },
  data() {
    return {
      ip: self.location.hostname
    }
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