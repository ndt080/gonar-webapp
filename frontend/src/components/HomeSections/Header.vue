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
      <h1>{{data?.Title}}</h1>
      <p>{{data?.Content}}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: "Header",
  computed: {
    data() {
      let hh = this.$store.getters.pages.find(x => x['GUID'] === 'home-header')
      return {Title: hh?.Title, Content: hh?.Content, Image: `http://localhost:1337${hh?.PreviewImage?.url}`}
    }
  }
}
</script>

<style scoped>
.container-header .wrapper {
  min-height: 29.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;

  /*background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),*/
  /*url("./../../assets/img/header3000x2250_3.jpg") 0 30% no-repeat;*/
  /*background-size: cover;*/
  /*-webkit-background-size: cover;*/
  /*-moz-background-size: cover;*/
  /*-o-background-size: cover;*/

  font-size: 1.4em;
  padding: 50px;
  line-height: 1.1;
}

@media (max-width: 968px) {
  .container-header .wrapper {
    padding: 20px;
    font-size: 1.2em;
  }
}


</style>
