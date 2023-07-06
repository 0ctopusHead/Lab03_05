<script lang="ts" setup>
import type { Passenger_Lists } from '@/list'
import type { PropType } from 'vue'
defineProps({
    passenger: {
        type: Object as PropType<Passenger_Lists>,
            require: true
    }
})
</script>
<template>
    <div v-if="passenger">
        <p>First name: {{ passenger.first_name }} </p>
        <p>Last name: {{ passenger.last_name }}</p>
        <p>Gender: {{ passenger.gender }}</p>
        <p>Travel date: {{ passenger.travelDate }}  Destination: {{ passenger.Destination }}</p>
    </div>
</template>