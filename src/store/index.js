import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://icanhazdadjoke.com/'
const headers = { Accept: 'application/json' }

export default new Vuex.Store({
  state: {
    jokes: [],
    currentJoke: ''
  },
  mutations: {
    setCurrentJoke (state, payload) {
      if (payload?.length > 0) {
        state.currentJoke = payload
        state.jokes.push(payload)
      }
    }
  },
  actions: {
    async fetchJoke (state) {
      const response = await fetch(url, { headers })
      const data = await response.json()

      if (data?.joke) {
        state.commit('setCurrentJoke', data.joke)
      }
    }
  },
  getters: {
    getCurrentJoke: state => state.currentJoke
  }
})
