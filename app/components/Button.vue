<template>
    <button @click="handleClick">
        {{ msg }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
});

const handleClick = () => {
  props.onClick();
};
</script>

<style scoped>
button {
    background-color: var(--peach-yellow);
    color: var(--woodsmoke);
    font-size: 1rem;
    font-family: var(--antarctica-semibold);
    display: inline-flex;
    height: 2.5rem;
    padding: 0.7rem 1.25rem;
    justify-content: center;
    align-items: center;
}

button:hover {
    background-color: var(--woodsmoke);
    color: var(--peach-yellow);
}
</style>