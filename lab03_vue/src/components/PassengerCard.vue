<script setup lang="ts">
import type { Passenger_Lists } from '@/list'
import type { PropType } from 'vue'

const props = defineProps({
  passenger: {
    type: Object as PropType<Passenger_Lists>,
    required: true
  }
})
</script>
<template>
  <div class="passenger-class">
    <div class="passenger-card">
      <span>First name: {{ passenger?.first_name }}</span>
      <br />
      <span>Last name: {{ passenger?.last_name }}</span>
      <br />
    </div>
  </div>
</template>
<style>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
