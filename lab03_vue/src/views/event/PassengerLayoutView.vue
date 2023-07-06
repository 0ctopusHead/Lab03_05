<script setup lang="ts">
import { ref } from 'vue'
import type { Passenger_Lists } from '@/list'
import { useRouter } from 'vue-router';
import PassengerService from '@/services/PassengerService';
const passenger = ref<Passenger_Lists | null>(null)
const airline = ref<Passenger_Lists | null>(null)
const props = defineProps({
    id: String
})
const router = useRouter()


PassengerService.getEventById(Number(props.id))
.then((respond) =>{
    passenger.value = respond.data
    PassengerService.getAirlineById(Number(respond.data.airlineId))
    .then((respond) => {
        airline.value = respond.data
    }).catch((error) =>{
        console.log(error)
    })
})
.catch((error) =>{
    console.log(error)
    if(error.respond && error.respond.status === 404){
        router.push({name: '404-resource', params:{resouce : 'passenger'}})
    }else{
        router.push({name:'network-error'})
    }
})

</script>
<template>
    <div v-if="passenger">
    <h1>{{ passenger.first_name }}</h1>
    <div id="nav">
        <router-link :to="{name: 'passenger-detail', params: {id}}">Passenger Details</router-link> |
        <router-link :to="{name: 'airline-detail', params: {id}}">Airline Details</router-link> 
    </div>
    <RouterView :passenger="passenger" :airline="airline"></RouterView>
    </div>
</template>
<style>
</style>