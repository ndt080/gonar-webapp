<template>
  <section class="container container-karate">
    <div class="wrapper shadow header  animate__animated animate__bounceIn animate__slow"
         :style="{
            'background': `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
                          url('${`${url}${karate?.PreviewImage?.url}`}') 0 30% no-repeat`,
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover'
          }">
      <h1 class="header-title">{{ karate?.Title }}</h1>
      <p class="header-subtitle">{{ karate?.HeaderText }}</p>
    </div>
    <div class="wrapper body content animate__animated animate__zoomInUp animate__slow">
      <div v-html="compiledMarkdown"></div>
    </div>
  </section>
</template>

<script>
import marked from "marked";

export default {
  name: "Karate",
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    karate() {
      return this.$store.getters.pages.find(x => x['GUID'] === 'karate')
    },
    compiledMarkdown() {
      let input = this.karate?.Content || 'text'
      return marked(input, {baseUrl: this.url, sanitize: false, smartLists: false});
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}

.container-karate .wrapper.header {
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 40px;
  min-height: 6rem;
  /*background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6));*/
  font-size: 1.4em;
  line-height: 1.1;
}

.container-karate .wrapper.body {
  padding: 50px 0;
  text-indent: 50px;
  text-align: justify;
  word-wrap: break-word;
  flex-direction: column;
  font-size: 1.2em;
  font-weight: 350;
  line-height: 1.2em;
}

.header .header-subtitle {
  padding: 10px 0 0 0;
}

@media (max-width: 968px) {
  .container-karate .wrapper.header {
    padding: 20px;
    font-size: 1.2em;
  }

  .container-karate .wrapper.body {
    padding: 20px 0;
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
