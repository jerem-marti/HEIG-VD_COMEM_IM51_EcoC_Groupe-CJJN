<template>
    <NuxtLink :to="path" class="button">{{ msg }}</NuxtLink>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.button {
    background-color: var(--peach-yellow);
    color: var(--woodsmoke);
    font-size: 1rem;
    font-family: var(--antarctica-semibold);
    display: inline-flex;
    height: 2.5rem;
    padding: 0.7rem 1.25rem;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
}

.button:hover {
    background-color: var(--woodsmoke);
    color: var(--peach-yellow);
}
</style>