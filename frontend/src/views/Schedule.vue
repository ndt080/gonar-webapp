<template>
  <section class="container container-schedule">
    <div class="wrapper shadow header"
         :style="{
            'background': `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
                          url('${`${url}${schedule?.PreviewImage?.url}`}') center no-repeat`,
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover'
          }">
      <h1 class="header-title">{{ schedule?.Title }}</h1>
      <p class="header-subtitle">{{ schedule?.HeaderText }}</p>
    </div>
    <div class="wrapper body content">
      <div v-html="compiledMarkdown"></div>
    </div>
  </section>
</template>

<script>
import marked from "marked";
import initPageAnimation from "../controllers/animation/commonPage";

export default {
  name: "Schedule",
  mounted() {
    // init animation
    initPageAnimation()

    //create and init data-label in tables
    let tables = document.getElementsByTagName('table');
    let length = tables.length;

    for (let t = 0; t < length; t++) {
      let tHead = tables[t].tHead.innerText.split('\t')
      let rw = tables[t]?.rows
      console.log(tables)

      for (let j = 0; j < rw?.length; j++) {
        for (let i = 0; i < rw[j].cells.length; i++) {
          rw[j].cells[i].setAttribute('data-label', tHead[i]);
        }
      }
    }
  },
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    schedule() {
      return this.$store.getters.pages.find(x => x['GUID'] === 'schedule')
    },
    compiledMarkdown() {
      let input = this.schedule?.Content || 'text'
      return marked(input, {baseUrl: this.url, sanitize: false});
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}

.container-schedule .wrapper.header {
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 40px;
  min-height: 6rem;
  /*background: linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6));*/
  font-size: 1.4em;
  line-height: 1.1;
}

.container-schedule .wrapper.body {
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
  .container-schedule .wrapper.header {
    padding: 20px;
    font-size: 1.2em;
  }

  .container-schedule .wrapper.body {
    padding: 20px 0;
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
