<template>
  <div class="container container-partners">
    <div class="wrapper">
      <div class="box" v-for="item in partners"
           v-bind:key="item['id']"
      >
        <img class="box-img" :src="getImgUrl(item?.['Card']?.['Logo']?.['url'])" alt="partner"/>
        <h3 class="box-title">{{item?.['Card']?.['Title']}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data: () => ({
    url: import.meta.env.VITE_APP_STRAPI_API_URL
  }),
  computed: {
    partners() {
      return this.$store.getters.homePage['partners']
    }
  },
  methods: {
    getImgUrl(filename) {
      return `${this.url}${filename}`
    }
  }
}
</script>

<style scoped>
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
  margin-right: 15px;
}

.container-partners .wrapper .box-img {
  max-height: 150px;
  width: auto;
}

.box-title {
  font-weight: 400;
}

@media (max-width: 968px) {
  .container-partners .wrapper .box-title {
    font-size: 0.9em;
  }

  .container-partners .wrapper .box-img {
    max-width: 25vw !important;
  }
}
</style>
