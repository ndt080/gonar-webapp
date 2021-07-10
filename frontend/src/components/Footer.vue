<template>
  <footer id="#footer">
    <div class="content">
      <div class="footer-column footer-column-common">
        <p class="footer-column-header">Карта сайта</p>
        <h1 class="footer-column-body">
          <router-link to="/">Главная</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/karate">Каратэ</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/druzhina">Проект "Дружина"</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/schedule">Расписание и цены</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/" @click.native="scrollFix('#lightbox')">Фотогалерея</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/about">О нас</router-link>
        </h1>
        <h1 class="footer-column-body">
          <router-link to="/" @click.native="scrollFix('#contacts')">Контакты</router-link>
        </h1>
      </div>
      <div class="footer-column footer-column-common">
        <img src="../assets/img/logo-en.png" alt="logo" class="logo"/>
      </div>
      <div class="footer-column footer-column-about">
        <p class="footer-column-header">{{ data?.Title }}</p>
        <p class="footer-column-body">{{ data?.Content }}</p>
      </div>
    </div>
    <div class="content">
      <div class="bottom-footer">
        <p>{{ data?.Copyright }} | Developed by
          <a href="https://www.instagram.com/public.class.mr_andry/"
             rel="noreferrer"
             target="_blank"
             style="text-decoration: none">
            <span style="color: #ea0763">Petrov Andrei</span>
          </a>
        </p>
        <div class="social-box">
          <a href="https://www.instagram.com/karate_honar_team" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                 viewBox="0 0 16 16">
              <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    data() {
      let obj = this.$store.getters.homePage['Body']?.find(x => x['__component'] === "blocks.footer")
      return {
        Title: obj?.['Title'] || 'none',
        Content: obj?.['Content'] || 'none',
        Copyright: obj?.['Copyright'] || 'none'
      }
    }
  },
  methods: {
    async scrollFix(hashbang) {
      await this.$router.push('/')
      location.href = hashbang;
    }
  }
}
</script>

<style scoped>
footer {
  display: block;
  max-width: 100%;
  padding: 0 50px;
}

footer .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}

footer .footer-column {
  display: block;
}

.footer-column-common {
  max-width: 300px;
}

.footer-column-about {
  max-width: 700px;
}

.bottom-footer {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #5c5c5c;
  width: 100%;
  padding-top: 10px;
}

.bottom-footer svg {
  fill: #0a0a0a;
}

.footer-column-header {
  font-size: 1.2em;
  font-weight: 700;
  padding-bottom: 10px;
}

.footer-column-body, .footer-column-body a {
  font-size: 1em;
  font-weight: 300;
  line-height: 1.2;
  color: #8f8f8f;
  text-align: justify;
  text-decoration: none;
}

.logo {
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 968px) {
  footer {
    padding: 0 20px;
  }

  .footer-column-about {
    max-width: 100%;
  }

  .footer-column-common {
    max-width: 70%;
  }
}

@media (max-width: 1024px) {
  .footer-column-common {
    max-width: 50%;
    padding-bottom: 20px;
  }

  .footer-column-about {
    max-width: 100%;
  }
}

</style>
