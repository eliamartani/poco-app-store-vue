import Vue from 'vue'
import Vuex from 'vuex'

import applications from './getters/application'
import categories from './getters/category'

import { fetchApps } from '../api'

Vue.use(Vuex)

const state = {
  apps: [],
  category: null,
  error: null,
  loading: false,
  pageIndex: 0,
  pageSize: 6,
  term: null
}

export const getters = {
  applications,
  categories,
  category: state => state.category,
  error: state => state.error,
  loading: state => state.loading,
  pageIndex: state => state.pageIndex,
  pageSize: state => state.pageSize
}

export const mutations = {
  setApps(state, apps) {
    state.apps = apps
  },
  setCategory(state, category) {
    state.category = category
  },
  setError(state, error) {
    state.error = error
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setPageIndex(state, pageIndex) {
    state.pageIndex = pageIndex
  },
  setPageSize(state, pageSize) {
    state.pageSize = pageSize
  },
  setTerm(state, term) {
    state.term = term
  }
}

export const actions = {
  async fetchInitialData({ commit }) {
    try {
      commit('setLoading', true)

      const response = await fetchApps()

      commit('setApps', response.data)
    } catch (err) {
      commit('setError', err)
    } finally {
      commit('setLoading', false)
    }
  },
  setCategory({ commit }, category) {
    commit('setCategory', category)
    commit('setPageIndex', 0)
  },
  setPageIndex({ commit }, pageIndex) {
    commit('setPageIndex', pageIndex)
  },
  setPageSize({ commit }, pageSize) {
    commit('setPageSize', pageSize)
  },
  setTerm({ commit }, term) {
    commit('setTerm', term)
    commit('setPageIndex', 0)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
