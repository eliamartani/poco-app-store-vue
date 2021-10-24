<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ThePagination from "./the-pagination.vue";

const store = useStore();
const applications = computed(() => store.getters.applications);
const pageIndex = computed(() => store.getters.pageIndex);
const setPageIndex = (index = 0) => store.dispatch("setPageIndex", index);
</script>

<template>
  <footer>
    <the-pagination
      v-if="applications.totalPages > 0"
      :page-index="pageIndex"
      :paging-size="applications.totalPages"
      @page-change="setPageIndex"
    />
  </footer>
</template>
