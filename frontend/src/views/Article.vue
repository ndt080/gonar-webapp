<template>
  <section class="container container-article">
    <article class="wrapper content">
      <div class="article-header  animate__animated animate__bounceIn animate__slow">
        <p class="article-date">{{ convertDate(article?.published_at) }}</p>
        <h1 class="article-title">{{ article?.Title.toUpperCase() }}</h1>
        <div class="article-preview"
             :style="{
                'background': `url('${`${url}${article?.Image?.url}`}') center no-repeat`,
                'background-size': 'cover',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover'
              }">
        </div>
      </div>
      <div class="article-body animate__animated animate__zoomInUp animate__slow" v-html="compiledMarkdown"></div>
    </article>
  </section>
</template>

<script>
import marked from "marked";

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    article() {
      return this.$store.getters.articles.find(x => x.id == this.id)
    },
    compiledMarkdown() {
      let input = this.article?.Content || 'text'
      return marked(input, {baseUrl: this.url, sanitize: false, smartLists: true});
    }
  },
  methods: {
    convertDate(date) {
      let newDate = new Date(date)
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };
      return newDate.toLocaleString("ru", options)
    },
  }

}
</script>

<style>
.container-article .wrapper {
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  font-size: 1.2em;
  font-weight: 350;
  line-height: 1.2em;
}

article .article-title {
  font-size: 2em;
  line-height: 1.3;
  font-weight: 700;
  padding: 15px 0;
}

article .article-preview {
  width: 100%;
  height: 500px;
  background: black;
  border-radius: 15px;
  margin-bottom: 40px;
}

article .article-body {
  text-align: justify;
  text-indent: 50px;
  word-wrap: break-word;
}

@media (max-width: 968px) {
  .container-article .wrapper {
    padding: 20px 0;
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>
