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
  colorInverted: {
    type: Boolean,
    default: false,
  },
});

const backgroundColor = props.colorInverted ? 'var(--woodsmoke)' : 'var(--peach-yellow)';
const color = props.colorInverted ? 'var(--peach-yellow)' : 'var(--woodsmoke)';


const handleClick = () => {
  props.onClick();
};
</script>

<style scoped>
button {
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  font-size: 1rem;
  font-family: var(--antarctica-semibold);
  display: inline-flex;
  height: 2.5rem;
  padding: 0.7rem 1.25rem;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: v-bind(color);
  color: v-bind(backgroundColor);
}
</style>