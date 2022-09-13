import Vue from 'vue'
import App from './App/App.vue'
import VueRouter from 'vue-router'
import {createRouter} from '../router/router.js'
import { createStore } from '../store/store'
import { sync } from 'vuex-router-sync'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta, {
    ssrAppId: 1
});

export const createApp = context => {
    // Создаём экземпляр маршрутизатора

    const router = createRouter();
    const store = createStore();

    // sync so that route state is available as part of the store
    sync(store, router)

    const app = new Vue({
        // внедряем маршрутизатор в корневой экземпляр Vue
        router,
        store,
        render: h => h(App)
    })
    // возвращаем и приложение и маршрутизатор
    return {
        app,
        router,
        store
    }
}
