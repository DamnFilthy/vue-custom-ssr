// store.js
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchItem } from '../api/api'

export function createStore () {
    return new Vuex.Store({
        // IMPORTANT: state must be a function so the module can be
        // instantiated multiple times
        state: () => ({
            item: null
        }),
        actions: {
            async fetchItem ({ commit }, id) {
                let item = await fetchItem(id)
                commit('setItem', item)
            }
        },
        mutations: {
            setItem (state, payload) {
                state.item = payload
            }
        },
        modules:{}
    })
}