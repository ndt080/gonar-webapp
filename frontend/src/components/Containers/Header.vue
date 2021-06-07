<template>
  <section class="container container-header">
    <div class="wrapper shadow"
         :style="{
            'background': `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
                          url('${data?.Image}') 0 30% no-repeat`,
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover'
          }">
      <h1>{{ data?.Title }}</h1>
      <p>{{ data?.Content }}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: "Header",
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

  /*background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),*/
  /*url("./../../assets/img/header3000x2250_3.jpg") 0 30% no-repeat;*/
  /*background-size: cover;*/
  /*-webkit-background-size: cover;*/
  /*-moz-background-size: cover;*/
  /*-o-background-size: cover;*/

  font-size: 1.4em;
  line-height: 1.1;
}

@media (max-width: 968px) {
  .container-header .wrapper {
    padding: 20px;
    font-size: 1.2em;
  }
}
</style>
