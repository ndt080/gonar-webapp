import Vuex from 'vuex'
import {useQuery, useResult} from "@vue/apollo-composable";
import gql from "graphql-tag";

export default new Vuex.Store({
    state: {
        pages: [],
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
        setLoaderStatus(state, status){
            state.loader = status
        }
    },
    actions: {
        async fetchPagesData ({ commit }) {
            try{
                let res = await fetch(`http://localhost:1337/pages`)
                let value = await res.json()
                commit('setPagesData', value)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchArticlesData ({ commit }) {
            try{
                let res = await fetch(`http://localhost:1337/articles`)
                let value = await res.json()
                // const { result } = useQuery(gql`
                //     query Articles {
                //         articles {
                //             id
                //             Title
                //             Description
                //             Content
                //             published_at
                //             Image {
                //                 url
                //             }
                //         }
                //     }
                // `)
                // const value = useResult(result)
                // console.log('value: ', value)
                commit('setArticlesData', value)
            } catch (e) {
                console.log(e)
            }
        },
    },
    getters:{
        articles: state => state.articles,
        pages: state => state.pages,
        loader: state => state.loader
    },
    modules: {
    }
})
