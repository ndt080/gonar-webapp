<template>
  <div class="list-group-card card-news"
       v-if="i < length && i >= length-8">
    <div class="card-header">
      <p>{{ convertDate(article?.published_at) }}</p>

      <router-link :to="{ path: '/article/' + article?.id }">
        <h2><a href="#">{{ article?.Title }}</a></h2>
      </router-link>

      <img :src="getImgUrl()" alt="tmp"/>
    </div>
    <div class="card-body">
      <p>{{ article?.Description }}</p>
    </div>
    <a :href="`/articles/${article?.id}`">
      <!--    <router-link :to="{ path: '/article/' + article?.id }">-->
      <button class="card-btn" type="button" aria-label="more details">Подробнее</button>
    </a>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    i: Number,
    length: Number
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
    getImgUrl() {
      let filename = this.article?.Image?.url
      return `${this.url}${filename}`
    },
  }
}
</script>

<style scoped>
.list-group-card {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 450px;
  min-width: 300px;
  width: 300px;
  padding: 1.5rem;
  margin: 0 auto;

  border-radius: 16px;
  background: #f79f3f;
  background: -webkit-linear-gradient(0deg, #f79f3f 0%, #de5745 100%);
  background: linear-gradient(0deg, #f79f3f 0%, #de5745 100%);
  box-shadow: -5px 0 7px rgba(0, 0, 0, 0.2);

  transition: .2s;
}

.list-group-card:hover {
  transform: translateY(-1rem);
}

.list-group-card:hover ~ .list-group-card {
  transform: translateX(200px);
}

.list-group-card:not(:first-child) {
  margin-left: -200px;
}

.card-header {
  margin-bottom: auto;
  text-overflow: ellipsis;
}

.card-header img {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

.card-header a {
  text-decoration: none;
  color: #fff;
}

.card-header p {
  font-size: 0.9em;
  margin: 0 0 0.2rem;
  color: #0a0a0a;
}

.card-header h2 {
  font-size: 1.1em;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.card-header h2:hover {
  opacity: 0.5;
}

.card-body {
  height: 100%;
  width: 100%;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card-body p {
  word-wrap: break-word;
}

.card-btn {
  border: none;
  border-radius: 4px;
  font-family: 'Bitter', serif;
  font-size: 0.9em;
  font-weight: 700;
  padding: 8px 16px;
  color: black;
  background: #e06a55;
  transition-duration: .5s;
}

.card-btn:hover {
  cursor: pointer;
  background: #fff;
}

</style>
