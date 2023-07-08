<script setup lang="ts">
import type { Passenger_Lists } from '@/list'
import type { PropType } from 'vue'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router';
const props = defineProps({
    passenger:{
     type : Object as PropType<Passenger_Lists>,
     require: true
    }
})
const router = useRouter()
const store = useMessageStore()
function edit(){
    //function goes here
    store.updateMessage('Data has been updated in ' + props.passenger?.first_name)
    setTimeout(() => {
        store.resetMessage()
    },5000)
    router.push({
        name: 'home'  
    })
}
</script>
<template>
   <p>Edit the event here</p>
   <button @click="edit">Edit</button>
</template>