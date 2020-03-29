<template>
  <div class="language">
    <button
      v-for="lang in languages"
      :key="lang.locale"
      :class="{ active: locale === lang.locale }"
      @click="setLanguage(lang.locale)"
    >
      {{ lang.text }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: 'en',
      languages: [
        {
          locale: 'en',
          text: 'EN'
        },
        {
          locale: 'pt',
          text: 'PT'
        }
      ]
    }
  },
  methods: {
    setLanguage(locale) {
      this.locale = locale
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss">
.language {
  margin: 0 1rem 1rem;

  button {
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

    & + button {
      margin-left: 0.5rem;
    }

    &.active {
      background: var(--teal);
      color: var(--white);
    }
  }
}
</style>
