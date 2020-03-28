<template>
  <div id="app" class="flex-container">
    <template v-if="loading">
      <loading />
    </template>
    <template v-else>
      <aside v-if="!error">
        <language />
        <nav-categories />
      </aside>
      <main>
        <application-list />
      </main>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    'application-list': () => import('./components/application-list'),
    language: () => import('./components/language'),
    loading: () => import('./components/loading'),
    'nav-categories': () => import('./components/nav-categories')
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
    order: 1;

    @media (max-width: 768px) {
      box-sizing: border-box;
      width: 100%;
    }
  }
  main {
    flex: 1;
    order: 2;
  }
}
</style>
