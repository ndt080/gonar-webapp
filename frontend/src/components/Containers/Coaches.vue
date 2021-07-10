<template>
  <section class="container container-coach">
    <div class="wrapper">
      <div class="card-container" @touchstart="tap"
           v-for="item in coaches"
           v-bind:key="item['id']"
      >
        <div class="list-group-card">
          <figure class="card-front shadow">
            <img :src="getImgUrl(item?.['Card']?.['Image']?.['url'])" alt="coach"/>
          </figure>
          <figure class="card-back shadow">
            <div class="figure-card">
              <div class="card-header">{{item?.['Card']?.['Name']}}</div>
              <div class="card-body">
                <p>{{item?.['Card']?.['Position']}}</p>
                <p style="font-weight: bold">{{item?.['Card']?.['Dan']}}</p>
                <p>{{item?.['Card']?.['Description']}}</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Coaches",
  data: () => ({
    url: import.meta.env.VITE_APP_STRAPI_API_URL
  }),
  computed: {
    coaches(){
      return this.$store.getters.homePage['coaches']
    }
  },
  methods: {
    tap() {
      // this.isActive = !this.isActive
    },
    getImgUrl(filename){
      return `${this.url}${filename}`
    }
  }
}
</script>

<style scoped>
.container-coach .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-container {
  width: 267px;
  height: 400px;
  cursor: pointer;
  transform-style: preserve-3d;
}

.card-container .list-group-card {
  width: 267px;
  height: 400px;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  color: #0a0a0a;
  line-height: 1;
}

.card-container .list-group-card figure {
  position: absolute;
  width: 267px;
  height: 400px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  border-radius: 10px;
}

.card-container:hover .list-group-card, .card-container.hover .list-group-card {
  transform: rotateY(180deg);
}

.wrapper .card-front {
  position: relative;
  width: 267px;
  height: 400px;
  border-radius: 10px;
  z-index: 10;
  transform: rotateY(0deg);
}

.card-front img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.wrapper .card-back {
  background: #d3d4d8;
  z-index: 1;
  transform: rotateY(180deg);
}

.card-header {
  font-size: 1.2em;
  font-weight: 700;
  padding-bottom: 15px;
}

.card-body {
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.1;
}

.card-body p {
  padding-bottom: 10px;
}
.figure-card{
  padding: 15px;
}

@media (max-width: 968px) {
  .container-coach .wrapper {
    display: flex;
    overflow-x: scroll;
    width: 95vw;
    padding: 0 0 30px 0;
  }
  .container-coach .wrapper .card-container{
    margin-right: 15px;
  }
  .wrapper::-webkit-scrollbar-track {
    background-color:#ecedee;
  }
  .wrapper::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color:#6dc0c8;
  }
  .wrapper::-webkit-scrollbar-thumb:hover{
    background-color:#56999f;
  }
  .wrapper::-webkit-scrollbar{
    width: 2px;
    height: 8px;
  }
}
@media (max-width: 540px) {
  .container-coach .wrapper {
    width: 90vw;
  }
}
@media (max-width: 380px) {
  .container-coach .wrapper {
    max-width: 87vw;
  }
}


</style>
