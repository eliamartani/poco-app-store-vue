<template>
  <div class="application-item">
    <div class="box-info">
      <div class="box-info--content">
        <div class="description">
          <h1>{{ application.name }}</h1>
          <p>{{ application.description }}</p>
        </div>
        <div class="tags">
          <span
            v-for="category in application.categories"
            :key="category"
          >
            {{ category }}
          </span>
        </div>
      </div>
      <div class="box-info--footer">
        <ul>
          <li
            v-for="(subscription, index) in application.subscriptions"
            :key="index"
          >
            <span>{{ subscription.name }}</span>
            <h3>
              <template v-if="subscription.price">
                {{ subscription.price.toFixed(2) }}
                <sup>{{ $t('application-list.application-item.currency') }}</sup>
              </template>
              <template v-else>
                {{ $t('application-list.application-item.free-label') }}
              </template>
            </h3>
          </li>
        </ul>
      </div>
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
