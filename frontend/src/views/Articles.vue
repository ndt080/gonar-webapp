<template>
  <section class="container container-articles">
    <div class="section-header">НОВОСТНАЯ ЛЕНТА КЛУБА</div>
    <div class="wrapper">
      <ul class="list-group" id="infinite-list">
        <li class="list-group-card shadow"
            :style="{
            'background': `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)),
                          url('${`${url}${article?.Image?.url}`}') 0 30% no-repeat`,
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover'
          }"
            v-for="article in items"
            @click="$router.push(`/articles/${article.id}`)"
        >
          <p>{{ convertDate(article?.['published_at']) }}</p>
          <h1 class="card-title">{{ article?.Title }}</h1>
          <p class="card-subtitle">{{ article?.Description }}</p>
        </li>
      </ul>
      <transition name="fade">
        <div class="loaderBox" v-show="loading">
          <Loader/>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import initArticleFeedPageAnimation from "../controllers/animation/articleFeedPage";
import ArticleCard from "../components/Cards/ArticleCard.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "Articles",
  components: {Loader, ArticleCard},
  mounted() {
    // init animation
    initArticleFeedPageAnimation();

    window.addEventListener('scroll', e => {
      const wFooter = document.getElementById('#footer').offsetHeight - 200
      let clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
      let documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
      let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

      if ((documentHeight - clientHeight - wFooter) <= scrollTop) {
        this.loadMore();
      }
    })

    this.loadMore();
  },
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL,
      loading: false,
      nextItem: 0,
      items: []
    }
  },
  computed: {
    articles() {
      return this.$store.getters.articles
    },
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
    loadMore() {
      if (this.articles.length > this.nextItem) {
        this.loading = true;
        setTimeout(e => {
          for (let i = 0; i < 6; i++) {
            if (this.articles.length > this.nextItem) {
              this.items.push(this.articles[this.nextItem]);
              this.nextItem++;
            }
          }
          this.loading = false;
        }, 200);
      }
    }
  }

}
</script>

<style scoped>

.container-articles .wrapper {
  position: relative;
}

.container-articles .wrapper .loaderBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  overflow: hidden;
}

.container-articles .wrapper .list-group {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.container-articles .wrapper .list-group-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
  height: 250px;

  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  font-size: 1.2em;
  line-height: 1.1;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .container-articles .wrapper .list-group-card {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .container-articles .wrapper .list-group-card {
    font-size: 1em;
    line-height: 1;
    padding: 20px;
  }
}



</style>
