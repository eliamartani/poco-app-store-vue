<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const languages = ref([
  {
    locale: "en",
    text: "EN",
  },
  {
    locale: "pt",
    text: "PT",
  },
]);
const setLanguage = (currentLocale) => (locale.value = currentLocale);
</script>

<template>
  <div class="language">
    <template v-for="lang in languages" :key="lang.locale">
      <button
        class="language__item"
        :class="{ 'language__item--active': locale === lang.locale }"
        @click="setLanguage(lang.locale)"
      >
        {{ lang.text }}
      </button>
    </template>
  </div>
</template>

<style lang="scss">
.language {
  position: absolute;
  right: 0rem;
  top: 1rem;

  @media (min-width: 768px) {
    top: 2.5rem;
  }

  &__item {
    appearance: none;
    background: transparent;
    border: 1px solid var(--teal);
    border-radius: 0;
    box-sizing: border-box;
    color: var(--teal);
    cursor: pointer;
    font-size: 0.75rem;
    max-width: 150px;
    padding: 0.5rem;
    text-transform: uppercase;

    & + & {
      margin-left: 0.5rem;
    }

    &--active {
      background: var(--teal);
      color: var(--white);
    }
  }
}
</style>
