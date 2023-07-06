<script setup lang="ts">
import PassengerCard from '../components/PassengerCard.vue';
import type { Passenger_Lists } from '@/list';
import type { Ref } from 'vue';
import { computed, ref, watchEffect } from 'vue';
import PassengerService from '@/services/PassengerService';
import type { AxiosResponse } from 'axios';
const passengers: Ref<Array<Passenger_Lists>> = ref([])
const totalPassenger =  ref<number>(0)
const props = defineProps({
  page:{
    type: Number,
    required : true
  }
})
watchEffect(() =>{
PassengerService.getPassenger(5, props.page).then((respond:AxiosResponse<Passenger_Lists[]>)=>{
  passengers.value = respond.data
  totalPassenger.value = respond.headers['x-total-count']
})
})
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassenger.value / 5)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger"></PassengerCard>

    <div class="pagination">
      <RouterLink :to="{name: 'home', query: {page: page -1 }}" rel="prev" v-if="page !=1" id="page-prev">Prev Page</RouterLink>
      <RouterLink :to="{name: 'home', query: {page: page + 1}}" rel="next" v-if="hasNextPage" id="page-next">Next Page</RouterLink>
    </div>
  </main>
</template>
<style>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  float: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>