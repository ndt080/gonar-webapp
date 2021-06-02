import { createWebHistory, createRouter } from "vue-router";
import Home from "./../views/Home.vue";
import About from "./../views/About.vue";
import Schedule from "./../views/Schedule.vue";
import Druzhina from "./../views/Druzhina.vue";
import Karate from "./../views/Karate.vue";
import NotFound from "./../views/NotFound.vue";
import Article from "./../views/Article.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/karate",
        name: "Karate",
        component: Karate,
    },
    {
        path: "/druzhina",
        name: "Druzhina",
        component: Druzhina,
    },
    {
        path: "/schedule",
        name: "Schedule",
        component: Schedule,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path:  "/:catchAll(.*)",
        name: "404",
        component: NotFound,
    },
    {
        path: "/article/:id",
        name: "Article",
        component: Article,
    },
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    routes
});

export default router;
