import { createStore } from "vuex";

import applications from "./getters/application";
import categories from "./getters/category";

import { fetchApps } from "../api";

const state = {
  apps: [],
  category: null,
  error: null,
  loading: false,
  pageIndex: 0,
  pageSize: 6,
  term: null,
};

const getters = {
  applications,
  categories,
  category: (state) => state.category,
  error: (state) => state.error,
  loading: (state) => state.loading,
  pageIndex: (state) => state.pageIndex,
  pageSize: (state) => state.pageSize,
};

const mutations = {
  setApps(state, apps) {
    state.apps = apps;
  },
  setCategory(state, category) {
    state.category = category;
  },
  setError(state, error) {
    state.error = error;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setPageIndex(state, pageIndex) {
    state.pageIndex = pageIndex;
  },
  setPageSize(state, pageSize) {
    state.pageSize = pageSize;
  },
  setTerm(state, term) {
    state.term = term;
  },
};

const actions = {
  async fetchInitialData({ commit }) {
    try {
      commit("setLoading", true);

      const response = await fetchApps();

      commit("setApps", response.data);
    } catch (err) {
      commit("setError", err);
    } finally {
      // gives impression of something being requested
      // from another server
      setTimeout(() => {
        commit("setLoading", false);
      }, 1000);
    }
  },
  setCategory({ commit, state }, category) {
    commit("setCategory", state.category === category ? null : category);
    commit("setPageIndex", 0);
  },
  setPageIndex({ commit }, pageIndex) {
    commit("setPageIndex", pageIndex);
  },
  setPageSize({ commit }, pageSize) {
    commit("setPageSize", pageSize);
  },
  setTerm({ commit }, term) {
    commit("setTerm", term);
    commit("setPageIndex", 0);
  },
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
});
