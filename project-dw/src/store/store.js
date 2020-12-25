import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        infoList:[]
    },
    mutations: {
        increment (state, payload) {
          state.infoList = payload.amount
        }
    },
    actions: {

    },
    modules: {

    }
})