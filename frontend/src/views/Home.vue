<template>
  <Header/>
  <div class="section-header section-header--news">
    <span>НОВОСТИ</span>
    <a href="/articles" class="news-btn">Подробнее</a>
  </div>
  <News/>
  <div class="section-header">ПРЕПОДАВАТЕЛЬСКИЙ СОСТАВ</div>
  <Coaches/>
  <div class="section-header" id="lightbox">ФОТОГАЛЕРЕЯ</div>
  <div class="container container-lightbox">
    <Lightbox :cells="3" :items="getImages"/>
  </div>
  <div class="section-header">НАШИ ПАРТНЁРЫ</div>
  <Partners/>
  <div class="section-header" id="contacts">КОНТАКТЫ</div>
  <Contacts/>
</template>

<script>

import Lightbox from "./../components/Lightbox.vue";
import News from "../components/Containers/News.vue";
import Header from "../components/Containers/Header.vue";
import Coaches from "../components/Containers/Coaches.vue";
import Contacts from "../components/Containers/Contacts.vue";
import Partners from "../components/Containers/Partners.vue";
import initHomePageAnimation from "../controllers/animation/homePage";

export default {
  name: "Home",
  mounted() {
    // init animation
    initHomePageAnimation()
  },
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    getImages() {
      let data = this.$store.getters.homePage['Body']?.find(x => x['__component'] === "blocks.gallery")?.['Images']
      let images = []
      for (let i in data) {
        images.push(this.url + data[i]?.url)
      }
      // console.log(images)
      return images
    }
  },
  components: {Partners, Contacts, Coaches, Header, News, Lightbox}
}
</script>

<style>
.section-header {
  text-align: center;
  max-width: 100%;
  padding: 0 50px 20px 50px;
  color: #0a0a0a;
  font-size: 2.1rem;
  font-weight: 700;
}

.section-header--news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.section-header--news .news-btn {
  text-decoration: none;
  white-space: nowrap;
  border: none;
  border-radius: 4px;
  font-family: 'Bitter', serif;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 8px 16px;
  margin-left: 20px;
  color: black;
  background: #e06a55;
  transition-duration: .5s;
}

.section-header--news .news-btn:hover {
  cursor: pointer;
  background: #fff;
  color: #e06a55;
}

@media (max-width: 968px) {
  .section-header {
    font-size: 1.5rem !important;
    padding: 0 20px 20px 20px;
  }
}


</style>
