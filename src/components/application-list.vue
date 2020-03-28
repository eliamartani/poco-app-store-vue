<template>
  <div class="application-list">
    <div class="application-list__header">
      <input
        type="search"
        :disabled="error"
        :placeholder="$t('application-list.search-input')"
        v-model="searchInput"
      />
    </div>
    <ul class="application-list__items">
      <li v-for="application in applications.list" :key="application.id">
        <application-item :application="application" />
      </li>
      <li v-if="error">
        <p class="application-list__error-title">{{ $t('application-list.error') }}</p>
        <p class="application-list__error-subtitle">{{ $t('application-list.error-subtitle') }}</p>
      </li>
      <li v-if="!applications.list.length && !error">
        <h1>{{ $t('application-list.no-records') }}</h1>
      </li>
    </ul>
    <pagination v-if="applications.totalPages" :paging-size="applications.totalPages" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'application-item': () => import('./application-item'),
    pagination: () => import('./pagination')
  },
  data() {
    return {
      searchInput: null
    }
  },
  computed: {
    ...mapGetters(['applications', 'error', 'pageSize'])
  },
  methods: {
    ...mapActions(['setPageIndex', 'setTerm'])
  },
  watch: {
    searchInput(value) {
      this.setPageIndex(0)
      this.setTerm(value)
    }
  }
}
</script>

<style lang="scss">
.application-list {
  &__header {
    margin-bottom: 2rem;

    input[type='search'],
    input[type='text'] {
      appearance: none;
      background-clip: padding-box;
      background-image: url('../assets/search.png');
      background-position: right 1rem center;
      background-repeat: no-repeat;
      border: 1px solid var(--gray);
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: 300;
      outline: 0;
      padding: 1rem 2.5rem 1rem 1rem;
      resize: none;
      transition: border-color 0.2s ease;
      width: 100%;

      &:hover,
      &:focus {
        border-color: var(--teal);
        cursor: auto;
      }

      &::-ms-clear {
        display: none;
      }
    }
  }

  &__error {
    &-title {
      color: var(--teal);
      font-size: 2.125rem;
      font-weight: 400;
    }

    &-subtitle {
      color: var(--gray-dark);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  &__items {
    > li {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
