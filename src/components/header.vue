<template>
  <header>
    <h1>App Store</h1>
    <h2>Made ♥ Vue</h2>
  </header>
</template>

<style lang="scss">
header {
  box-sizing: border-box;
  padding: 2rem 1rem;

  h1 {
    line-height: 1;
  }

  h2 {
    font-size: 1rem;
    line-height: 1;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    h1,
    h2 {
      margin-left: 0;
      text-align: center;
    }
  }
}
</style>
