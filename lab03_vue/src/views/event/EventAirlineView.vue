<script setup lang="ts">
import type { PropType } from 'vue'
import { type Passenger_Lists } from '@/list'

defineProps({
  airline: {
    type: Object as PropType<Passenger_Lists>,
    require: true
  }
})
</script>

<template>
  <div class="container">
    <div class="airline-body">
      <p><span>AirlineId:</span> {{ airline?.id }}</p>
      <p><span>AirlineName:</span> {{ airline?.AirlineName }}</p>
      <p><span>email:</span> {{ airline?.email }}</p>
      <p><span>address:</span> {{ airline?.address }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.airline-body {
  margin-top: 3rem;
}
span {
  font-weight: bold;
}
</style>
