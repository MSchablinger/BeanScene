<template>
  <main>
    <div id="text">
      <img src="../assets/homepage.svg" alt="">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
    <div id="imgwrapper">
      <img src="../assets/homepage.jpg" alt="">
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeNews"
}
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  width: 90%;
  height: 10%;
  color:#fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
}
#text {
  background-color: rgba(51, 8, 4, 0.8);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}
#imgwrapper img {
  margin-top: 30%;
  margin-bottom: 20%;
}
#imgwrapper {
  background-color: #000;
}
</style>