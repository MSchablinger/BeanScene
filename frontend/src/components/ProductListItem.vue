<template>
<div>
  <div :style="image"></div>
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
  },
  data() {
    return {
      image: {backgroundImage: 'url(' + this.path + ')'}
    };
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

}
</style>