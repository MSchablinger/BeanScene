<template>
<main>
  <ProductListItem name="Ethiopian Espresso" price=30 path="bag.jpg"></ProductListItem>
  <ProductListItem name="Brazilian Premium Espresso" price=50 path="bag.jpg"></ProductListItem>
  <ProductListItem name="Jamaican Espresso" price=32 path="bag.jpg"></ProductListItem>
</main>
</template>

<script>
import ProductListItem from "@/components/ProductListItem.vue";
export default {
  name: "ShopWidget",
  components: {
    ProductListItem
  }
}
</script>

<style scoped>
main {
  background-color: rgba(51, 8, 4, 0.8);;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-areas:
  ". . ."
  ". . .";
  width: 85%;
  height: 12%;
  color:#fff;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
}
</style>