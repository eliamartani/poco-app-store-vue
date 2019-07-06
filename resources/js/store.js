import Vue from 'vue'
import { fetchApps } from './services/fetch'
import { getApplications } from './services/applications'
import { getCategories } from './services/categories'

export const store = new Vue({
  data () {
    return {
      // default values
      currentOptions: {
        category: null,
        pageIndex: 0,
        pageSize: 6,
        term: null
      }
    }
  },
  methods: {
    async fetchJson (options = {}) {
      try {
        this.currentOptions = { ...this.currentOptions, ...options }

        const response = await fetchApps()
        const { list, total } = getApplications(response.data, this.currentOptions)

        this.$emit('init-applications', list, total)
      } catch (error) {
        console.error('store -> fetchJson', error)

        this.$emit('error')
      }
    },
    async fetchCategoriesJson () {
      try {
        const response = await fetchApps()
        const sortedCategories = getCategories(response.data)

        this.$emit('init-categories', sortedCategories)
      } catch (error) {
        console.error('store -> fetchCategoriesJson', error)
      }
    }
  }
})
