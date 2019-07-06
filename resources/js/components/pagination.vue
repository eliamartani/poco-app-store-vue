<template>
  <ul
    v-if="pagingSize"
    class="pagination"
  >
    <li>
      <button
        type="button"
        :disabled="currentPage === 0"
        @click="setPage(currentPage-1)"
      >
        &lt;
      </button>
    </li>

    <li v-if="currentPage === pagingSize - 1 && pagingSize > 2">
      <button
        type="button"
        @click="setPage(currentPage-2)"
      >
        {{ currentPage - 1 }}
      </button>
    </li>

    <li v-if="currentPage-1 >= 0">
      <button
        type="button"
        @click="setPage(currentPage-1)"
      >
        {{ currentPage }}
      </button>
    </li>

    <li
      class="active"
      type="button"
    >
      <button>
        {{ currentPage + 1 }}
      </button>
    </li>

    <li v-if="currentPage+1 < pagingSize">
      <button
        type="button"
        @click="setPage(currentPage+1)"
      >
        {{ currentPage + 2 }}
      </button>
    </li>

    <li v-if="currentPage === 0 && pagingSize > 2">
      <button
        type="button"
        @click="setPage(currentPage+2)"
      >
        {{ currentPage + 3 }}
      </button>
    </li>

    <li>
      <button
        type="button"
        :disabled="currentPage === pagingSize - 1"
        @click="setPage(currentPage+1)"
      >
        &gt;
      </button>
    </li>
  </ul>
</template>

<script>
import { store } from '../store'

export default {
  props: {
    pagingSize: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentPage: 0
    }
  },
  mounted () {
    store.$on('set-page', index => this.currentPage = index)
  },
  methods: {
    setPage (index) {
      this.currentPage = index

      store.$emit('change-page', index)
    }
  }
}
</script>
