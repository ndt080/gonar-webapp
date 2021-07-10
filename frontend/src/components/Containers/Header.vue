<template>
  <section class="container container-header">
    <div class="wrapper shadow">
      <h1 class="header-title">{{ data?.Title }}</h1>
      <p class="header-body">{{ data?.Content }}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: "Header",
  mounted() {

  },
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    data() {
      let obj = this.$store.getters.homePage['Body']?.find(x => x['__component'] === "blocks.header")
      return {
        Title: obj?.['Title'] || 'none',
        Content: obj?.['Content'] || 'none',
        Image: `${this.url}${obj?.['Preview']?.['url'] || 'none'}`
      }
    }
  }
}
</script>

<style scoped>
.container-header .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  min-height: 29.5rem;
  padding: 50px;
  background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
              url("./../../assets/img/header.gif") no-repeat;
  background-position: 0 30%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  font-size: 1.4em;
  line-height: 1.1;
}

.container-header .header-title {
  font-size: 1.6em;
  padding-bottom: 10px;
}

@media (max-width: 968px) {
  .container-header .wrapper {
    background-position: center center;
    padding: 20px;
    font-size: 1.2em;
  }
}
</style>
