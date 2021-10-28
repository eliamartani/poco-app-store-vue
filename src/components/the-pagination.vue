<script>
const eventName = "page-change";
</script>

<script setup>
defineProps({
  pageIndex: Number,
  pagingSize: Number,
});

const emit = defineEmits([eventName]);
const setPageIndex = (index = 0) => emit(eventName, index);
</script>

<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button type="button" class="pagination__index" :disabled="pageIndex === 0" @click="setPageIndex(0)">
        &lt;&lt;
      </button>
    </li>

    <li class="pagination__item">
      <button type="button" class="pagination__index" :disabled="pageIndex === 0" @click="setPageIndex(pageIndex - 1)">
        &lt;
      </button>
    </li>

    <li v-if="pageIndex === pagingSize - 1 && pagingSize > 2" class="pagination__item">
      <button type="button" class="pagination__index" @click="setPageIndex(pageIndex - 2)">
        {{ pageIndex - 1 }}
      </button>
    </li>

    <li v-if="pageIndex - 1 >= 0" class="pagination__item">
      <button type="button" class="pagination__index" @click="setPageIndex(pageIndex - 1)">
        {{ pageIndex }}
      </button>
    </li>

    <li class="pagination__item" type="button">
      <button class="pagination__index pagination__index--active">
        {{ pageIndex + 1 }}
      </button>
    </li>

    <li v-if="pageIndex + 1 < pagingSize" class="pagination__item">
      <button type="button" class="pagination__index" @click="setPageIndex(pageIndex + 1)">
        {{ pageIndex + 2 }}
      </button>
    </li>

    <li v-if="pageIndex === 0 && pagingSize > 2" class="pagination__item">
      <button type="button" class="pagination__index" @click="setPageIndex(pageIndex + 2)">
        {{ pageIndex + 3 }}
      </button>
    </li>

    <li class="pagination__item">
      <button
        type="button"
        class="pagination__index"
        :disabled="pageIndex === pagingSize - 1"
        @click="setPageIndex(pageIndex + 1)"
      >
        &gt;
      </button>
    </li>

    <li class="pagination__item">
      <button
        type="button"
        class="pagination__index"
        :disabled="pageIndex === pagingSize - 1"
        @click="setPageIndex(pagingSize - 1)"
      >
        &gt;&gt;
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
.pagination {
  &__item {
    display: inline-block;

    & + & {
      margin-left: 0.25rem;
    }
  }

  &__index {
    appearance: none;
    background: transparent;
    border: none;
    color: var(--gray-dark);
    cursor: pointer;
    font-size: 1rem;
    height: 2rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    width: 2rem;

    &:active {
      background: var(--gray-dark);
      color: var(--white);
    }

    &:disabled {
      opacity: 0.5;
    }

    &:focus {
      box-shadow: inset 0 0 0 2px var(--teal);
    }

    &:hover {
      background: var(--teal);
      color: var(--white);
    }

    &--active {
      background: var(--teal);
      color: var(--white);
    }
  }
}
</style>
