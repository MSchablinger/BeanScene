<template>
  <nav>
    <img src="@/assets/Logo.png" alt="Logo">
    <router-link to="/" id="home">
      <h1 >Bean Scene</h1>
    </router-link>
    <router-link to="/shop" class="nav-button">
      <a href="">Shop</a>
    </router-link>
    <a href="" class="nav-button">Merch</a>
    <a href="" class="nav-button"><img src="@/assets/shopping_cart.svg" alt="basket" height="54px" width="auto"></a>
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
}
.nav-button {
  padding-right: 1%;
  padding-left: 1%;
  text-align: center;
}
.nav-button:hover {
  background-color: #f6ecc3;
  color: #130100;
}
.nav-button:hover img:hover {
  filter: invert(1);
}
#home {
  font-family: "Edwardian Script ITC 2";
  font-size: 3.8rem;
  margin: 0 auto 0 0;
}
h1 {
  margin: 0;
}

</style>