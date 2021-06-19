import Vuex from 'vuex';
import axios from "axios";

export default new Vuex.Store({
    state: {
        pages: [],
        homePage: {},
        articles: [],
        loader: true
    },
    mutations: {
        setArticlesData(state, articles) {
            state.articles = articles
        },
        setPagesData(state, pages) {
            state.pages = pages
        },
        setHomePageData(state, pages) {
            state.homePage = pages
        },
        setLoaderStatus(state, status) {
            state.loader = status
        }
    },
    actions: {
        async fetchPagesData({commit}) {
            try {
                await axios.get(`${import.meta.env.VITE_APP_STRAPI_API_URL}/home`)
                    .then(resp => commit('setHomePageData', resp.data))

                await axios.get(`${import.meta.env.VITE_APP_STRAPI_API_URL}/pages`)
                    .then(resp => commit('setPagesData', resp.data))

            } catch (e) {
                console.log(e)
            }
        },

        async fetchArticlesData({commit}) {
            try {
                await axios.get(`${import.meta.env.VITE_APP_STRAPI_API_URL}/articles`)
                    .then(resp => commit('setArticlesData', resp.data))

            } catch (e) {
                console.log(e)
            }
        },
    },
    getters: {
        articles: state => state.articles,
        pages: state => state.pages,
        homePage: state => state.homePage,
        loader: state => state.loader
    },
    modules: {}
})
