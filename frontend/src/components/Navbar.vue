<template>
  <nav class="animate__animated animate__zoomIn animate__fast">
    <router-link to="/">
      <img alt="logo" class="logo" src="../assets/img/logo-en.png"/>
    </router-link>
    <label for="btn-menu" class="icon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </label>
    <input type="checkbox" id="btn-menu">

    <ul id="menu">
      <li class="nav-item">
        <router-link to="/">Главная</router-link>
      </li>
      <!--  <li class="nav-item dropdown">
              <label for="btn-dropdown-1" class="show">Каратэ</label>
              <a href="#">Каратэ</a>
              <input type="checkbox" id="btn-dropdown-1">
              <ul class="dropdown-content">
                <li><a href="#">Мероприятия и экзамены</a></li>
                <li><router-link to="/schedule">Расписание и цены</router-link></li>
              </ul>
            </li>-->
      <li class="nav-item">
        <router-link to="/karate">Каратэ</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/druzhina">Проект "Дружина"</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/schedule">Расписание и цены</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" @click.native="scrollFix('#lightbox')">Фотогалерея</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">О нас</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" @click.native="scrollFix('#contacts')">Контакты</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "Navbar",
  mounted() {
    useMeta({
      title: this.meta.Title,
      htmlAttrs: {lang: 'ru', amp: true},
      description: this.meta.Description,
    })
  },
  data() {
    return {
      url: import.meta.env.VITE_APP_STRAPI_API_URL
    }
  },
  computed: {
    meta() {
      let obj = this.$store.getters.homePage['Body']?.find(x => x['__component'] === "blocks.meta-data")
      return {
        Title: obj?.['Title'] || 'none',
        Description: obj?.['Description'] || 'none',
      }
    }
  },
  methods: {
    async scrollFix(hashbang) {
      await this.$router.push('/')
      location.href = hashbang;
    }
  },
}
</script>

<style scoped>
#menu, nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav {
  max-width: 100vw;
  padding: 10px 50px;
}

nav:after {
  content: '';
  clear: both;
  display: table;
}

nav ul {
  list-style: none;
  position: relative;
}

nav ul .nav-item {
  display: inline-block;
  /*margin-right: 30px;*/
  padding: 15px;
}

nav ul .nav-item a {
  text-decoration: none;
  color: black;
}

nav ul .nav-item a:hover {
  color: orange;
  border-radius: 5px;

}

nav ul ul {
  position: absolute;
  top: 70px;
  opacity: 0;
  visibility: hidden;
  transition: top .3s;
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
}

nav ul ul .nav-item {
  display: list-item;
  position: relative;
  margin: 0;
  width: 200px;
}

nav ul .nav-item:hover > ul {
  top: 50px;
  opacity: 1;
  visibility: visible;
}

nav .logo {
  max-width: 170px;
  max-height: 150px;
}

.show, input, .icon-menu {
  display: none;

}

@media (max-width: 968px) {
  nav {
    display: block;
    /*width: 100%;*/
    padding: 15px 20px;
  }

  #menu {
    display: block;
    padding: 15px;
  }

  #menu li {
    width: 100%;
    padding: 0;
    line-height: 30px;
  }

  nav ul ul {
    top: 50px;
    position: static;
    display: none;
    opacity: 1;
    visibility: visible;
  }

  .show {
    display: block;
    visibility: visible;
  }

  .show:hover {
    color: orange;
  }

  .show + a, ul, #menu {
    /*display: none;*/
    max-height: 0;
    transform: scaleY(0);
    transform-origin: top;
    visibility: hidden;
    opacity: 0;
    transition: transform 0s linear 0.3s, max-height 0s linear 0.3s, opacity 0.6s, visibility 0s linear 0.6s;
  }

  [id^=btn-dropdown-1]:checked + ul,
  [id^=btn-menu]:checked + ul,
  [id^=btn-menu]:checked + #menu {
    /*display: block;*/
    opacity: 1;
    max-height: 100%;
    transform: scaleY(1);
    visibility: visible;
    transition-delay: 0s;
  }

  .icon-menu {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }

  .icon-menu svg {
    width: 30px;
    height: 30px;
  }
}


</style>
