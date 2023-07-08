<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = usePassengerStore()
const passenger = storeToRefs(store).passenger
const airline = storeToRefs(store).airline
const id = ref(passenger?.value?.id)

</script>
<template>
    <div v-if="passenger">
    <h1>{{ passenger.first_name }}</h1>
    <div id="nav">
        <router-link :to="{name: 'passenger-detail', params: {id}}">Passenger Details</router-link> |
        <router-link :to="{name: 'airline-detail', params: {id}}">Airline Details</router-link> |
        <router-link :to="{name: 'passenger-edit',params:{id}}">Edit</router-link> 
    </div>
    <RouterView :passenger="passenger" :airline="airline"></RouterView>
    </div>
</template>
<style>
</style>