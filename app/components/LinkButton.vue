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
  colorInverted: {
    type: Boolean,
    default: false,
  },
});

const backgroundColor = props.colorInverted ? 'var(--woodsmoke)' : 'var(--peach-yellow)';
const color = props.colorInverted ? 'var(--peach-yellow)' : 'var(--woodsmoke)';
</script>

<style scoped>
.button {
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
    font-size: 1rem;
    font-family: var(--antarctica-semibold);
    display: inline-flex;
    padding: 0.7rem 1.25rem;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
}

.button:hover {
    background-color: v-bind(color);
    color: v-bind(backgroundColor);
}
</style>