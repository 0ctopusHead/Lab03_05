<script setup lang="ts">
import type { Passenger_Lists } from '@/list';
import type { PropType } from 'vue';

const props = defineProps({
 passenger: {
 type:Object as PropType<Passenger_Lists>,
  required: true
  }
})

</script>
<template>
    <div class="passenger-class">
        <div class="passenger-card">
            <span>First name:{{ passenger?.first_name }}</span>
            <span>Last name:{{ passenger?.last_name }}</span>
        </div>
    </div>
</template>