import Vue from 'vue'
import Vuex from 'vuex'
import popUpWindows from "../modules/popPupWindows"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    modals: popUpWindows
  }
})
