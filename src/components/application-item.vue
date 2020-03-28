<template>
  <div class="application-item">
    <div class="application-item__content">
      <div class="application-item__description">
        <h1>{{ application.name }}</h1>
        <p>{{ application.description }}</p>
      </div>
      <div class="application-item__tags">
        <span v-for="(category, index) in application.categories" :key="`${index}_${newId()}`">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="application-item__footer">
      <ul>
        <li v-for="(subscription, index) in application.subscriptions" :key="`${index}_${newId()}`">
          <span>{{ subscription.name }}</span>
          <h3>
            <template v-if="subscription.price">
              {{ subscription.price.toFixed(2) }}
              <sup>{{ $t('application-list.application-item.currency') }}</sup>
            </template>
            <template v-else>{{ $t('application-list.application-item.free-label') }}</template>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.application-item {
  background: var(--white);
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
  padding: 1.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: rgba(244, 247, 246, 0.3);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__description {
    @media (max-width: 768px) {
      margin-top: 1rem;
      order: 2;
    }
  }

  &__footer {
    display: flex;

    li {
      align-items: baseline;
      display: inline-flex;
      margin-bottom: 0;
      padding: 0 1rem 0 0;

      span {
        color: var(--gray-dark);
      }
    }
  }

  &__tags {
    color: var(--teal);
    text-align: right;

    @media (max-width: 768px) {
      order: 1;
    }

    span {
      & + span {
        &::before {
          content: '/';
        }
      }
    }
  }
}
</style>
