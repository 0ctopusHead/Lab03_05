<script setup lang="ts">
defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>
<template>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you looking for is not here</h3>
    <RouterLink :to="{name: 'home'}">Back to home page</RouterLink>
</template>