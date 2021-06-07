<template>
  <div class="card">
    <div class="card-header">
      <p>{{convertDate(article?.published_at)}}</p>
      <h2><a href="#">{{article?.Title}}</a></h2>
      <img :src="getImgUrl()" alt="tmp" />
    </div>
    <div class="card-body">
      <p>{{article?.Description}}</p>
    </div>
    <router-link :to="{ path: '/article/' + article?.id }">
      <button class="card-btn" type="button" aria-label="more details">Подробнее</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data(){
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    },
  },
  methods: {
    convertDate(date){
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
    getImgUrl(){
      let filename = this.article?.Image?.url
      return `${this.url}${filename}`
    }

  }
}
</script>

<style scoped>
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 30rem;
  width: 300px;
  padding: 1.5rem;
  margin: 0 auto;

  border-radius: 16px;
  background: #f79f3f;
  background: -webkit-linear-gradient(0deg, #f79f3f 0%, #de5745 100%);
  background: linear-gradient(0deg, #f79f3f 0%, #de5745 100%);
  box-shadow: -5px 0 7px rgba(0,0,0,0.2);

  transition: .2s;
}

.card:hover {
  transform: translateY(-1rem);
}
.card:hover~.card {
  transform: translateX(130px);
}
.card:not(:first-child) {
  margin-left: -130px;
}

.card-header {
  margin-bottom: auto;
}
.card-header img{
  object-fit: cover;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}
.card-header a{
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
  background: linear-gradient(90deg,#ffa033,#e4231c);
  text-shadow: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-body{
  height: 100%;
  max-width: 100%;
  white-space: normal;
  overflow: hidden;
}
.card-btn{
  border: none;
  border-radius: 4px;
  font-weight: 700;
  padding: 5px;
  color: black;
  background: #e06a55;
}
.card-btn:hover{
  cursor: pointer;
  background: #fff;
}

</style>
