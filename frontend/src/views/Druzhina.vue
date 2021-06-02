<template>
  <section class="container container-druzhina">
    <div class="wrapper shadow header"
         :style="{
            'background': `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
                          url('${`http://localhost:1337${druzhina?.PreviewImage?.url}`}') center no-repeat`,
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover'
          }">
      <h1 class="header-title">{{ druzhina?.Title }}</h1>
      <p class="header-subtitle">{{ druzhina?.HeaderText }}</p>
    </div>
    <div class="wrapper body content">
      <div v-html="compiledMarkdown"></div>
    </div>
  </section>
</template>

<script>
import marked from "marked";

export default {
  name: "Druzhina",
  data() {
    return {
      input: '![http://risovach.ru/upload/2013/05/mem/tvoe-vyrazhenie-lica_18799993_orig_.jpeg]' +
          '(http://risovach.ru/upload/2013/05/mem/tvoe-vyrazhenie-lica_18799993_orig_.jpeg)'
    }
  },
  computed: {
    druzhina() {
      return this.$store.getters.pages.find(x => x['GUID'] === 'druzhina')
    },
    compiledMarkdown() {
      let input = this.druzhina?.Content || 'text'
      return marked(input, {baseUrl: 'http://localhost:1337', sanitize: false});
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}

.container-druzhina .wrapper.header {
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 40px;
  min-height: 6rem;
  /*background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6));*/
  font-size: 1.4em;
  line-height: 1.1;
}

.container-druzhina .wrapper.body {
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
  .container-druzhina .wrapper.header {
    padding: 20px;
    font-size: 1.2em;
  }

  .container-druzhina .wrapper.body {
    padding: 20px 0;
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
