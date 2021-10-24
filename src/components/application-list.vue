<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

import ApplicationItem from "./application-item.vue";
import TheSearch from "./the-search.vue";

const store = useStore();
const { tm } = useI18n();
const applications = computed(() => store.getters.applications);
const error = computed(() => store.getters.error);
</script>

<template>
  <the-search />

  <ul class="application-list__items">
    <li class="application-list__item" v-for="application in applications.list" :key="application.id">
      <application-item :application="application" />
    </li>

    <li v-if="error">
      <p class="application-list__title">{{ tm("application-list.error") }}</p>
      <p class="application-list__subtitle">{{ tm("application-list.error-subtitle") }}</p>
    </li>

    <li v-if="!applications.list.length && !error">
      <p class="application-list__title">
        {{ tm("application-list.no-records") }}
      </p>
    </li>
  </ul>
</template>

<style lang="scss">
.application-list {
  &__item {
    & + & {
      margin-top: 1.5rem;
    }
  }

  &__title {
    color: var(--teal);
    font-size: 1.5rem;
    font-weight: 400;
  }

  &__subtitle {
    color: var(--gray-dark);
    font-size: 1.125rem;
    font-weight: 400;
  }
}
</style>
