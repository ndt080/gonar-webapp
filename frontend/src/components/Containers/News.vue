<template>
  <section class="container container-news">
    <div class="wrapper">
      <ArticleCard v-for="(article, i) of articles"
                   v-bind:key="article?.id"
                   v-bind:i="i"
                   v-bind:length="articles.length"
                   v-bind:article="article"
      />
    </div>
  </section>
</template>

<script>
import ArticleCard from "../Cards/ArticleCard.vue";

export default {
  name: "News",
  components: {ArticleCard},
  computed: {
    articles() {
      return this.$store.getters.articles
    }
  }
}
</script>

<style scoped>
.container-news {
  margin-top: -40px;
}

.container-news .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 40px 0 30px 30px;
  max-width: 90vw;
}

.wrapper::-webkit-scrollbar-track {
  background-color: #ecedee;
}

.wrapper::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: #6dc0c8;
}

.wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #56999f;
}

.wrapper::-webkit-scrollbar {
  width: 2px;
  height: 8px;
}

@media (max-width: 968px) {
  .container-news .wrapper {
    max-width: 95vw;
  }
}

@media (max-width: 540px) {
  .container-news .wrapper {
    max-width: 86vw;
  }
}

@media (max-width: 380px) {
  .container-news .wrapper {
    max-width: 78vw;
  }
}

/*@media (max-width: 1024px) {*/
/*  .container-news .wrapper {*/
/*    max-width: 100vw;*/
/*  }*/
/*}*/

</style>
