<template>
  <div id="app">
    <template v-if="loading">
      <Loading />
    </template>
    <template v-else>
      <Header />
      <div class="flex-container">
        <aside v-if="!error">
          <Language />
          <NavCategories />
        </aside>
        <main>
          <ApplicationList />
        </main>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ApplicationList: () => import('./components/application-list'),
    Header: () => import('./components/header'),
    Language: () => import('./components/language'),
    Loading: () => import('./components/loading'),
    NavCategories: () => import('./components/nav-categories')
  },
  computed: {
    ...mapGetters(['error', 'loading'])
  },
  created() {
    this.fetchInitialData()
    this.setPageSize(3)
  },
  methods: {
    ...mapActions(['fetchInitialData', 'setPageSize'])
  }
}
</script>

<style lang="scss">
#app {
  aside {
    flex: 0;
    min-width: 200px;
    order: 1;

    @media (max-width: 768px) {
      box-sizing: border-box;
      min-width: auto;
      width: 100%;
    }
  }
  main {
    flex: 1;
    order: 2;
  }
}
</style>
