<template >
  <Navbar v-if="!loader"/>
  <router-view v-if="!loader"/>
  <Footer v-if="!loader"/>
  <div class="loaderBox" v-if="loader">
    <Loader />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
  name: 'App',
  components: {
    Loader,
    Navbar, Footer
  },
  mounted() {
    this.$store.commit('setLoaderStatus', true)
    try{
      this.$store.dispatch('fetchPagesData')
      this.$store.dispatch('fetchArticlesData')
      this.$store.commit('setLoaderStatus', false)
    }catch (e){
      console.log(e)
    }

  },
  computed: {
    loader(){
      return this.$store.getters.loader
    }
  }
}
</script>

<style scoped>
.loaderBox{
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
</style>
