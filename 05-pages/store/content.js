/**
 * File: content.js
 *
 * Store for general page content.
 */

import axios from 'axios'

/**
 * Initial, empty state for the module.
 *
 * @type {Object}
 */
const state = () => ({
  people: {}
})

/**
 * Getters for the object, these are like computed properties.
 *
 * @type {Object}
 */
const getters = {
}

/**
 * Actions for this module. This is where all async should take place.
 *
 * @type {Object}
 */
const actions = {
  loadPeople ({commit, state}) {
    if (!Object.getOwnPropertyNames(state.people).length) {
      return axios.get('http://assets.wearebraid.com/heroes.json')
        .then(response => commit('setPeople', response.data))
        .catch(err => console.warn(err))
    }
    return Promise.resolve()
  }
}

/**
 * List of all possible mutators, these need to be pure functions.
 *
 * @type {Object}
 */
const mutations = {
  setPeople (state, people) {
    state.people = people
  }
}

/**
 * Finally we export the module for our store to use (see ../index.js)
 */
export default {
  state,
  getters,
  actions,
  mutations
}
