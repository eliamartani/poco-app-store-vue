<template>
  <section class="application-list" v-cloak>
    <header>
      <input
        type="search"
        :disabled="errorPanic"
        :placeholder="$t('application-list.search-input')"
        v-model="searchInput"
      >
    </header>
    <ul class="items">
      <li
        v-for="(application, index) in applications"
        :key="index"
      >
        <application-item :application="application" />
      </li>
      <li v-if="errorPanic">
        <p class="error--title">{{ $t('application-list.error') }}</p>
        <p class="error--subtitle">{{ $t('application-list.error-subtitle') }}</p>
      </li>
      <li v-if="!applications.length && !errorPanic">
        <h1>{{ $t('application-list.no-records') }}</h1>
      </li>
    </ul>
    <pagination :paging-size="totalPages" />
  </section>
</template>

<script>
import { store } from '../store'

export default {
  data () {
    return {
      applications: [],
      debounceTimer: 500,
      errorPanic: false,
      pageSize: 3,
      searchInput: null,
      searchDebounceId: null,
      totalPages: 0,
    }
  },
  async created () {
    await store.fetchJson({
      pageIndex: 0,
      pageSize: this.pageSize
    })
  },
  mounted () {
    store.$on('init-applications', this.fetchData)
    store.$on('change-page', this.setPage)
    store.$on('set-category', this.setCategory)
    store.$on('error', () => this.errorPanic = true)
  },
  methods: {
    fetchData (list, totalCount) {
      this.applications = list

      this.totalPages = Math.ceil(totalCount / this.pageSize)
    },
    async setCategory (category) {
      await store.fetchJson({
        category,
        pageIndex: 0,
        pageSize: this.pageSize
      })

      store.$emit('set-page', 0)
    },
    async setPage (index) {
      await store.fetchJson({
        pageIndex: index,
        pageSize: this.pageSize
      })
    },
    searchTerm () {
      store.fetchJson({
        term: this.searchInput,
        pageIndex: 0,
        pageSize: this.pageSize
      })

      store.$emit('set-page', 0)
    }
  },
  watch: {
    searchInput () {
      window.clearTimeout(this.searchDebounceId)

      this.searchDebounceId = window.setTimeout(this.searchTerm, this.debounceTimer)
    }
  }
}
</script>
