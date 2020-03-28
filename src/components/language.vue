<template>
  <div class="language">
    <button :class="{ active: locale === 'en' }" @click="setLanguage('en')">EN</button>
    <button :class="{ active: locale === 'pt' }" @click="setLanguage('pt')">PT</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: 'en'
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
