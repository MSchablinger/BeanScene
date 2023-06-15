<template>
<router-link :to="{ name: 'ProductDetail', params: { id: 1 } }">
  <img :src="'http://'+ip+'/BeanScene/backend/' + path" alt="">
  <h1>{{ name }}</h1>
  <h2>{{ price }} €/kg</h2>
</router-link>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    prodId: Number,
    name: String,
    price: Number,
    path: String
  },
  data() {
    return {
      ip: self.location.hostname
    }
  }
}
</script>

<style scoped>
a {
  width: 365px;
  height: 463px;
  background-color: #330804;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
img {
  margin-top: 5%;
  width:80%;
  height:auto;
}
</style>