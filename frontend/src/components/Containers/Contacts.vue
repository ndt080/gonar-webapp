<template>
  <section class="container container-contacts">
    <div class="wrapper">
      <iframe :title="data?.MapAddress"
              :src="data?.MapLink"
              class="map shadow"
              frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <div class="contacts">
        <p class="contacts-header">{{ data?.Title }}</p>
        <p class="contacts-body" v-html="compiledMarkdown"></p>
        <!--          <span style="font-weight: 700">Зал №1:</span> 220141, г.Минск, ул.Никифорова, д.44 <br/>-->
        <!--          <span style="font-weight: 700">Зал №2:</span> 220141, г.Минск, ул.Никифорова, д.19 <br/>-->
        <!--          <span style="font-weight: 700">Время работы:</span> 09:00-13:00, 14:00-18:00 <br/>-->
        <!--          <span style="font-weight: 700">e-mail:</span><a href="mailto:info@knyazhich.club"> info@knyazhich.club</a><br/>-->
        <!--          <span style="font-weight: 700">Тел.:</span> <a href="tel:+375 00 000-00-00">+375 00 000-00-00</a></p>-->
      </div>

    </div>
  </section>
</template>

<script>
import marked from "marked";

export default {
  name: "Contacts",
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    data() {
      let obj = this.$store.getters.homePage['Body']?.find(x => x['__component'] === "blocks.contacts")
      return {
        Title: obj?.['Title'] || 'none',
        Content: obj?.['Content'] || 'none',
        MapAddress: obj?.['MapAddress'] || 'none',
        MapLink: obj?.['MapLink'] || 'none',
      }
    },
    compiledMarkdown() {
      let input = this.data.Content
      return marked(input, {baseUrl: this.url, sanitize: false});
    }
  }
}
</script>

<style scoped>
.container-contacts .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.map {
  border-radius: 15px;
  width: 50%;
  height: 250px;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 40%;
}

.contacts-header {
  font-size: 1.3em;
  font-weight: 700;
  padding-bottom: 15px;
  text-align: center;
}

@media (max-width: 968px) {
  .map, .contacts {
    width: 100%;
  }
}

</style>
