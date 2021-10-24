<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import ApplicationList from "./components/application-list.vue";
import TheFooter from "./components/the-footer.vue";
import TheHeader from "./components/the-header.vue";
import TheLoading from "./components/the-loading.vue";
import NavCategories from "./components/nav-categories.vue";

const store = useStore();
const error = computed(() => store.getters.error);
const loading = computed(() => store.getters.loading);
const setPageSize = (size) => store.dispatch("setPageSize", size);

onMounted(() => {
  store.dispatch("fetchInitialData");

  setPageSize(3);
});
</script>

<template>
  <template v-if="loading">
    <the-loading />
  </template>
  <template v-else>
    <the-header class="app__header" />
    <aside class="app__sidebar" v-if="!error">
      <nav-categories />
    </aside>
    <main class="app__main">
      <application-list />
    </main>
    <the-footer class="app__footer" />
  </template>
</template>
