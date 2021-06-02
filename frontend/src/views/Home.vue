<template>
  <Header/>
  <News/>
  <div class="section-header">ПРЕПОДАВАТЕЛЬСКИЙ СОСТАВ</div>
  <Coachs/>
  <div class="section-header" id="lightbox">ФОТОГАЛЕРЕЯ</div>
  <div class="container container-lightbox">
    <Lightbox :cells="4" :items="images"/>
  </div>
  <div class="section-header">НАШИ ПАРТНЁРЫ</div>
  <div class="container container-partners">
    <div class="wrapper">
      <div class="box">
        <img class="box-img" src="./../assets/img/partners/belaruskarateassn.png" alt="belaruskarateassn"/>
        <h3 class="box-title">Белорусская ассоциация каратэ</h3>
      </div>
      <div class="box">
        <img class="box-img" src="./../assets/img/partners/sanga.png" alt="sanga"/>
        <h3 class="box-title">Спортивный клуб "Sanga"</h3>
      </div>
      <div class="box">
        <img class="box-img" src="./../assets/img/partners/kaminari.png" alt="kaminari"/>
        <h3 class="box-title">Cётокан каратэ клуб "Kaminari"</h3>
      </div>
    </div>
  </div>
  <div class="section-header" id="contacts">КОНТАКТЫ</div>
  <Contacts/>
</template>

<script>

import Lightbox from "./../components/Lightbox.vue";
import News from "../components/HomeSections/News.vue";
import Header from "../components/HomeSections/Header.vue";
import Coachs from "../components/HomeSections/Coachs.vue";
import Contacts from "../components/HomeSections/Contacts.vue";

export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://pbs.twimg.com/media/D3u7lirW4AAtkEI.jpg",
        "https://pobeditel.by/templates/yootheme/cache/for-kids-from-6-years-f70d4f41.jpeg",
        "https://avatars.mds.yandex.net/get-zen_doc/40274/pub_5d658ffa2f1e4409e4e40945_5d65902635c8d800adef3282/scale_1200",
        "https://kd-sauer.de/wp-content/uploads/2017/05/post-3-1536x1024.jpg",
        "https://pobeditel.by/templates/yootheme/cache/for-kids-from-6-years-f70d4f41.jpeg",
        "https://pobeditel.by/templates/yootheme/cache/for-kids-from-6-years-f70d4f41.jpeg",
      ],
    };
  },
  components: {Contacts, Coachs, Header, News, Lightbox}
}
</script>

<style>
.container {
  padding: 0 50px 50px 50px;
}
.box-title{
  font-weight: 400;
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
  .container-partners .wrapper .box-title {
    font-size: 0.9em;
  }

  .container-partners .wrapper .box-img {
    max-width: 25vw !important;
  }

  .container {
    padding: 0 20px 50px 20px;
  }

  .section-header {
    font-size: 1.6em;
  }
}

.container-partners .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-partners .wrapper .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 30%;
}

.container-partners .wrapper .box-img {
  max-height: 150px;
  width: auto;
}

.box {
  margin-right: 15px;
}


</style>
