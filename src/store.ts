import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currency: 'USD',
    nominal: 10,
    rates: null
  },
  mutations: {
    setCurrency (state, action) {
      state.currency = action
    },
    setNominal (state, action) {
      state.nominal = action
    },
    setRates (state, action) {
      state.rates = action
    }
  },
  actions: {
    setCurrency ({ commit, state }) {
      commit('setCurrency', state.currency)
    },
    setNominal ({ commit, state }) {
      commit('setNominal', state.nominal)
    },
    setRates ({ commit, state }) {
      commit('setRates', state.rates)
    }
  },
  getters: {
    getCurrency: state => state.currency,
    getNominal: state => state.nominal,
    getRates: state => state.rates
  }
})
