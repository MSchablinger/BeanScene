<template>
  <NavBar/>
  <div>
    <ProductListItem v-for="(product, index) of products" :key="index" :name="product.name" :price="product.price" :path="product.path"/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProductListItem from "@/components/ProductListItem.vue";
import { onMounted, ref } from 'vue'

export default {
  name: 'ShopPage',
  components: {NavBar, ProductListItem},
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
  }
}

</script>
<style scoped>
div {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 28%);
  background-color: #f6ecc3;
  padding-left: 2%;
  padding-top: 7%;
}
</style>