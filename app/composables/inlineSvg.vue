<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  inlineSvg: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%',
    required: false
  },
  maxWidth: {
    type: String,
    default: '100%',
    required: false
  },
  height: {
    type: String,
    default: '100%',
    required: false
  },
  maxHeight: {
    type: String,
    default: '100%',
    required: false
  }
})

const decodedSvg = computed(() => {
  const svgData = props.inlineSvg.replace('data:image/svg+xml,', '')
  return decodeURIComponent(svgData)
})
</script>

<template>
    <div v-html="decodedSvg" :style="{ width: width, maxWidth: maxWidth, height: height, maxHeight: maxHeight }"></div>
</template>