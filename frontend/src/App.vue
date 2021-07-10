<template>
  <metainfo/>
  <Navbar v-if="!loader"/>
  <router-view v-if="!loader"/>
  <Footer v-if="!loader"/>
  <div class="loaderBox" v-show="loader">
    <Loader/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
  name: 'App',
  components: {
    Loader, Navbar, Footer
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchPagesData')
      await this.$store.dispatch('fetchArticlesData')

      this.loader = false
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      loader: true
    }
  },
}
</script>

<style scoped>
.loaderBox {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
</style>
