<script setup lang="ts">
import PassengerCard from '../components/PassengerCard.vue';
import type { Passenger_Lists } from '@/list';
import type { Ref } from 'vue';
import { ref } from 'vue';
import PassengerService from '@/services/PassengerService';
const passengers: Ref<Array<Passenger_Lists>> = ref([])
PassengerService.getPassenger().then((respond)=>{
  passengers.value = respond.data
})

</script>

<template>
  <main>
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"></PassengerCard>
  </main>
</template>
