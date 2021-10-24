<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

const store = useStore();
const { tm } = useI18n();
const category = computed(() => store.getters.category);
const categories = computed(() => store.getters.categories);
const setCategory = (category) => store.dispatch("setCategory", category);
</script>

<template>
  <nav class="nav-categories">
    <h1 class="nav-categories__title">{{ tm("nav-categories.title") }}</h1>

    <ul class="nav-categories__list">
      <li class="nav-categories__item" v-for="(item, index) in categories" :key="`${index}_nav`">
        <button
          class="nav-categories__category"
          :class="{
            'nav-categories__category--active': category === item,
          }"
          @click="setCategory(item)"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.nav-categories {
  &__category {
    appearance: none;
    background: var(--gray);
    border: 0;
    border-bottom: 1px solid #e6eaea;
    border-radius: 0;
    color: var(--black);
    cursor: pointer;
    display: block;
    font-size: 17px;
    font-weight: 300;
    padding: 1rem;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: background 0.1s ease, color 0.1s ease;
    width: 100%;

    &:not(&--active):hover {
      background: rgba(255, 255, 255, 0.6);
    }

    &--active {
      background: var(--white);
      color: var(--teal);

      &::after {
        background-image: url("../assets/close.png");
        background-position: right center;
        background-repeat: no-repeat;
        color: var(--gray-dark);
        content: "";
        display: block;
        height: 16px;
        opacity: 0.7;
        position: absolute;
        right: 2px;
        top: 2px;
        width: 16px;
      }
    }
  }

  &__item {
    cursor: pointer;
    display: inline-block;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &__list {
    overflow-x: auto;
    white-space: nowrap;
  }

  &__title {
    color: var(--gray-dark);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
}
</style>
