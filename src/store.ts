import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { cardCurrency: 'IDR' },
      { cardCurrency: 'JPY' }
    ],
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
    },
    setCards (state, action) {
      state.cards = action
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
    },
    setCards ({ commit, state }) {
      commit('setCards', state.cards)
    }
  },
  getters: {
    getCards: state => state.cards,
    getCurrency: state => state.currency,
    getNominal: state => state.nominal,
    getRates: state => state.rates
  }
})
