<template>
  <nav class="nav-categories" v-cloak>
    <h2>{{ $t('nav-categories.title') }}</h2>
    <ul class="nav-menu">
      <li v-for="(item, index) in categories" :key="`${index}_${newId()}`">
        <button
          :class="{
            active: category === item
          }"
          @click="setCategory(item)"
        >
          {{ item }}
        </button>
      </li>
    </ul>
    <div v-if="category" class="nav-categories__selected">
      <small>{{ $t('nav-categories.selected-category') }}</small>
      <button :title="$t('nav-categories.clear-filter')" @click="setCategory(null)">
        {{ category }}
      </button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['categories', 'category']),
  methods: mapActions(['setCategory'])
}
</script>

<style lang="scss">
.nav-categories {
  &__selected {
    button {
      appearance: none;
      background: transparent;
      background-image: url('../assets/close.png');
      background-position: right center;
      background-repeat: no-repeat;
      border: none;
      border-radius: 20px;
      box-sizing: border-box;
      color: var(--gray-dark);
      cursor: pointer;
      display: block;
      font-size: 0.75rem;
      margin: 1rem;
      max-width: 150px;
      padding: 0 1.25rem 0 0;
      text-transform: uppercase;

      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  small {
    color: var(--teal);
    display: block;
    margin: 2rem 1rem 1rem;
  }

  .nav-menu {
    margin-top: 1rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
      overflow-x: auto;
      white-space: nowrap;
    }

    button {
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
      transition: background-color 0.2s ease, color 0.1s ease;
      width: 100%;

      &.active {
        color: var(--teal);
      }

      &:hover {
        background: var(--white);
      }
    }

    li {
      cursor: pointer;

      @media (max-width: 768px) {
        display: inline-block;
      }
    }
  }
}
</style>
