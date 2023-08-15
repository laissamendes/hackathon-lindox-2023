<script></script>

<script setup>
const props = defineProps({
    text: String
})
</script>

<template>
    <button><slot></slot>{{props.text}}</button>
</template>

<style scoped>
button{
color: white;
border-style: solid;
border-color: white;
border-radius: 5px;
}
</style>