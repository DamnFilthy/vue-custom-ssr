import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home/Home.vue'
import About from '../components/pages/About/About.vue'
import Contacts from '../components/pages/Contacts/Contacts.vue';

Vue.use(VueRouter)

export function createRouter() {
    return new VueRouter({
        routes: [
            {
                name: 'home',
                path: '/',
                component: Home
            },
            {
                name: 'about',
                path: '/about',
                component: About
            },
            {
                name: 'contacts',
                path: '/contacts',
                component: Contacts
            }
        ],
        mode: 'history'
    })
}