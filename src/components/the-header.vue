<script setup>
import LanguageList from "./language-list.vue";
</script>

<template>
  <header class="header">
    <h1 class="header__title">App Store</h1>
    <h2 class="header__subtitle">Made ♥ Vue</h2>

    <language-list />
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &__title {
    line-height: 1;
  }

  &__subtitle {
    font-size: 1rem;
    line-height: 1;
    margin-left: 0;

    @media (min-width: 768px) {
      margin-left: 3rem;
    }
  }
}
</style>
