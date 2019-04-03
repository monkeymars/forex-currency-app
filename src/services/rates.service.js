import Axios from 'axios'
import Currencies from '@/resource/data.json'
const API = 'https://api.exchangeratesapi.io/'

/**
 * Get Exchanges Rates
 * @returns {Object} callback
 */
export const getLatestRates = (callback) => {
  Axios.get(API + 'latest')
    .then(response => {
      if (response.status == 200) {
        callback(response.data)
      }
    }).catch(err => {
      callback(err)
    })
}

/**
 * Get Base Exchanges Rates
 * @param {String} currency
 * @returns {Object} callback
 */
export const getBaseRates = (currency, callback) => {
    Axios.get(API + 'latest?base=' + currency )
      .then(response => {
        if (response == 200) {
          callback(response.data)
        }
      }).catch(err => {
        callback(err)
      })
  }

/**
 * Currencies
 * @returns {Object} currencies
 */
export const getCurrecies = () => {
    return Currencies
  }