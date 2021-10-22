import { createStore } from 'vuex'
import data from '@/data/data'

export default createStore({
  state: {
    places: []
  },
  getters: {
    // getPlaces: state => state.places
  },
  mutations: {
    SET_PLACES (state, data) {
      state.places = data
    }
  },
  actions: {
    setPlaces ({ commit }) {
      // TODO: Сделать подключение к БД в дальнейшем
      commit('SET_PLACES', data)
    }
  },
  modules: {
  }
})
