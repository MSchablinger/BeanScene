<template>
  <nav>
    <img src="../assets/Logo.png" alt="Logo">
    <h1>Bean Scene</h1>
    <a href="">Shop</a>
    <a href="">Merch</a>
    <a href=""><img src="../assets/shopping_cart.svg" alt="basket"></a>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style>
nav {
  display: flex;
  height: 88px;
  background-color: #45170C;
}
img {
  height: 100%;
  width: auto;
}
h1 {
  font-family: "Edwardian Script ITC";
  font-size: 70px;
  margin: 0;
  color:#ffffff;
}
</style>