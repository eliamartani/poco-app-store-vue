<template>
  <nav class="nav-categories" v-cloak>
    <h2>{{ $t('nav-categories.title') }}</h2>
    <ul class="nav-menu">
      <li
        v-for="(item, index) in categories"
        :key="index"
        :class="{
          active: currentCategory === item
        }"
      >
        <a
          href="#"
          @click.prevent="setCurrentCategory(item)"
        >
          {{ item }}
        </a>
      </li>
    </ul>
    <template v-if="currentCategory">
      <small>
        {{ $t('nav-categories.selected-category') }}
      </small>
      <button
        class="selected"
        :title="$t('nav-categories.clear-filter')"
        @click="clearFilter"
      >
        {{ currentCategory }}
      </button>
    </template>
  </nav>
</template>

<script>
import { store } from '../store'

export default {
  data () {
    return {
      categories: [],
      currentCategory: null
    }
  },
  async created () {
    await store.fetchCategoriesJson()
  },
  mounted () {
    store.$on('init-categories', this.fetchCategories)
  },
  methods: {
    clearFilter () {
      this.currentCategory = null

      store.$emit('set-category', this.currentCategory)
    },
    fetchCategories (categories) {
      this.categories = categories
    },
    setCurrentCategory (item) {
      this.currentCategory = item

      store.$emit('set-category', this.currentCategory)
    }
  }
}
</script>
