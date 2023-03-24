<template>
<div>
  <img :src="'http://localhost/BeanScene/backend/api.php?image='+path" alt="">
  <h1>{{ name }}</h1>
  <h2>{{ price }} €/kg</h2>
</div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    name: String,
    price: Number,
    path: String
  }
}
</script>

<style scoped>
div {
  width: 365px;
  height: 463px;
  background-color: #330804;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
}
img {
  margin-top: 5%;
  width:80%;
  height:auto;
}
</style>