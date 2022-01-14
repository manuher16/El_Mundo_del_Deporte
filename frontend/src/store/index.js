import Vue from 'vue'
import Vuex from 'vuex'
import popUpWindows from "../modules/popPupWindows"
import modalInfoService from "../modules/modal"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    modals: popUpWindows,
    modalInfoService: modalInfoService
  }
})
