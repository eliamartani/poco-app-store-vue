<script setup>
import { useI18n } from "vue-i18n";

defineProps({
  application: Object,
});

const { tm } = useI18n();
</script>

<template>
  <article class="application-item">
    <div class="application-item__content">
      <div class="application-item__description">
        <h1 class="application-item__title">{{ application.name }}</h1>
        <p class="application-item__description">{{ application.description }}</p>
      </div>

      <div class="application-item__tags">
        <span class="application-item__tag" v-for="(category, index) in application.categories" :key="`${index}_tags`">
          {{ category }}
        </span>
      </div>
    </div>

    <div class="application-item__subscriptions">
      <ul>
        <li
          class="application-item__subscription"
          v-for="(subscription, index) in application.subscriptions"
          :key="`${index}_subscription`"
        >
          <span class="application-item__subscription-name">{{ subscription.name }}</span>
          <h3 class="application-item__subscription-price">
            <template v-if="subscription.price">
              {{ subscription.price.toFixed(2) }}
              <sup class="application-item__subscription-currency">
                {{ tm("application-list.application-item.currency") }}
              </sup>
            </template>
            <template v-else>{{ tm("application-list.application-item.free-label") }}</template>
          </h3>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
.application-item {
  background: var(--white);
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
  padding: 1.5rem;
  transition: background 0.3s ease-in-out;

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

  &__subscription {
    align-items: baseline;
    display: inline-flex;
    margin-bottom: 0;
    padding: 0 1rem 0 0;

    &-currency {
      font-size: 1rem;
    }

    &-name {
      color: var(--gray-dark);
    }

    &-name + &-price {
      margin-left: 0.5rem;
    }
  }

  &__subscriptions {
    display: flex;
  }

  &__tag {
    & + & {
      &::before {
        content: "/";
        margin: 0 0.3rem;
      }
    }
  }

  &__tags {
    color: var(--teal);
    text-align: right;

    @media (max-width: 768px) {
      order: 1;
    }
  }

  &__title {
    font-size: 1.5rem;
  }
}
</style>
