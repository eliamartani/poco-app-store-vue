<template>
  <ul class="pagination">
    <li>
      <button type="button" :disabled="pageIndex === 0" @click="setPageIndex(0)">
        &lt;&lt;
      </button>
    </li>

    <li>
      <button type="button" :disabled="pageIndex === 0" @click="setPageIndex(pageIndex - 1)">
        &lt;
      </button>
    </li>

    <li v-if="pageIndex === pagingSize - 1 && pagingSize > 2">
      <button type="button" @click="setPageIndex(pageIndex - 2)">
        {{ pageIndex - 1 }}
      </button>
    </li>

    <li v-if="pageIndex - 1 >= 0">
      <button type="button" @click="setPageIndex(pageIndex - 1)">
        {{ pageIndex }}
      </button>
    </li>

    <li class="active" type="button">
      <button>
        {{ pageIndex + 1 }}
      </button>
    </li>

    <li v-if="pageIndex + 1 < pagingSize">
      <button type="button" @click="setPageIndex(pageIndex + 1)">
        {{ pageIndex + 2 }}
      </button>
    </li>

    <li v-if="pageIndex === 0 && pagingSize > 2">
      <button type="button" @click="setPageIndex(pageIndex + 2)">
        {{ pageIndex + 3 }}
      </button>
    </li>

    <li>
      <button
        type="button"
        :disabled="pageIndex === pagingSize - 1"
        @click="setPageIndex(pageIndex + 1)"
      >
        &gt;
      </button>
    </li>

    <li>
      <button
        type="button"
        :disabled="pageIndex === pagingSize - 1"
        @click="setPageIndex(pagingSize - 1)"
      >
        &gt;&gt;
      </button>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    pagingSize: {
      type: Number,
      required: true
    }
  },
  computed: mapGetters(['pageIndex']),
  methods: mapActions(['setPageIndex'])
}
</script>

<style lang="scss">
.pagination {
  font-size: 0;
  text-align: center;

  li {
    display: inline-block;

    & + li {
      margin-left: 0.25rem;
    }

    button {
      appearance: none;
      background: transparent;
      border: none;
      color: var(--gray-dark);
      cursor: pointer;
      font-size: 1rem;
      outline: none;
      padding: 0.375rem 0.4375rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--teal);
        color: var(--white);
      }

      &:focus {
        box-shadow: inset 0 0 0 2px var(--teal);
      }

      &:active {
        background: var(--gray-dark);
        color: var(--white);
      }
    }

    &.active button {
      background: var(--teal);
      color: var(--white);
    }
  }
}
</style>
