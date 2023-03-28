<template>
  <NavBar/>
  <div>
    <ProductListItem v-for="(product, index) of products" :key="index" :name="product.name" :price="product.price" :path="product.path"/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProductListItem from "@/components/ProductListItem.vue";
import { reactive, onMounted } from 'vue'

export default {
  name: 'ShopPage',
  components: {NavBar, ProductListItem},
  setup() {
    const state = reactive({
      products: []
    })

    onMounted(() => {
      fetch('http://localhost/BeanScene/backend/product.php')
          .then(response => response.json())
          .then(data => {
            state.products = data.products
          })
    })

    return {
      products: state.products
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
  grid-template-columns: repeat(3, 0);
}
</style>