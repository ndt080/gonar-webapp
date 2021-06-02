import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable'

import './assets/css/index.css'

const defaultClient = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

createApp(App).provide(DefaultApolloClient, defaultClient).use(router).use(store).mount('#app')
