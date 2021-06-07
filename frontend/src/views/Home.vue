<template>
  <Header/>
  <News/>
  <div class="section-header">ПРЕПОДАВАТЕЛЬСКИЙ СОСТАВ</div>
  <Coaches/>
  <div class="section-header" id="lightbox">ФОТОГАЛЕРЕЯ</div>
  <div class="container container-lightbox">
    <Lightbox :cells="4" :items="getImages"/>
  </div>
  <div class="section-header">НАШИ ПАРТНЁРЫ</div>
  <Partners />
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

export default {
  name: "Home",
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
      console.log(images)
      return images
    }
  },
  components: {Partners, Contacts, Coaches, Header, News, Lightbox}
}
</script>

<style>
.container {
  padding: 0 50px 50px 50px;
}

.section-header {
  text-align: center;
  width: 100%;
  color: #0a0a0a;
  font-size: 2em;
  font-weight: 700;
  padding-bottom: 20px;
}

@media (max-width: 968px) {
  .container {
    padding: 0 20px 50px 20px;
  }

  .section-header {
    font-size: 1.6em;
  }
}


</style>
