<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

const searchInput = ref(null);
const store = useStore();
const { tm } = useI18n();
const error = computed(() => store.getters.error);

watch(searchInput, (value) => store.dispatch("setTerm", value));
</script>

<template>
  <div class="search">
    <input
      type="search"
      class="search__input"
      :disabled="error"
      :placeholder="tm('application-list.search-input')"
      v-model="searchInput"
      :aria-label="tm('application-list.search-input')"
    />
  </div>
</template>

<style lang="scss">
.search {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }

  &__input {
    appearance: none;
    background-clip: padding-box;
    background-image: url("../assets/search.png");
    background-position: right 1rem center;
    background-repeat: no-repeat;
    border: 1px solid var(--gray);
    box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 300;
    outline: 0;
    padding: 1rem 2.5rem 1rem 1rem;
    resize: none;
    transition: border-color 0.2s ease;
    width: 100%;

    @media (min-width: 768px) {
      width: 300px;
    }

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
</style>
