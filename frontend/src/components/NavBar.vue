<template>
  <nav>
    <img src="../assets/Logo.png" alt="Logo">
    <h1>Bean Scene</h1>
    <a href="">Shop</a>
    <a href="">Merch</a>
    <a href=""><img src="../assets/shopping_cart.svg" alt="basket" height="54px" width="auto"></a>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
nav {
  display: flex;
  background-color: #45170C;
  justify-content: flex-end;
  width: 100%;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  font-size: 3rem;
}
nav * {
  height: 100%;
}
img {
  height: 100%;
  width: auto;
}
a {
  color:#ffffff;
  text-decoration: none;
  padding-right: 1%;
  padding-left: 1%;
  text-align: center;
}
a:hover {
  background-color: #f6ecc3;
  color: #130100;
}
a:hover img:hover {
  filter: invert(1);
}
h1 {
  font-family: "Edwardian Script ITC 2";
  font-size: 5rem;
  margin: 0 auto 0 0 ;
}

</style>