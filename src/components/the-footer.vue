<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ThePagination from "./the-pagination.vue";

const store = useStore();
const applications = computed(() => store.getters.applications);
</script>

<template>
  <footer>
    <the-pagination v-if="applications.totalPages" :paging-size="applications.totalPages" />
  </footer>
</template>
