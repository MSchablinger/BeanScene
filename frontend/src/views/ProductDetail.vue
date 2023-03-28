<template>
  <NavBar/>

  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'ProductDetail',
  components: {NavBar},
  props: {
    id: Number,
    name: String,
    price: Number,
    path: String
  }
}
</script>