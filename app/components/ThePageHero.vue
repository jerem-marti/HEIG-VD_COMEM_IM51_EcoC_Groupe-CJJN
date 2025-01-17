<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    hideTitle: {
        type: Boolean,
        required: false,
        default: false,
    },
    bgSvgUrlEncode: {
        type: String,
        required: false,
    },
});

const bgImgStyle = props.bgSvgUrlEncode ? `url("${props.bgSvgUrlEncode}")` : 'none';
console.log(bgImgStyle);

</script>

<template>
    <div class="page-title">
        <h1 v-show="!props.hideTitle">{{ $props.title }}</h1>
        <slot></slot>
    </div>
</template>

<style scoped>
.page-title {
    display: flex;
    width: 100%;
    /* height: 70dvh; */
    height: auto;
    padding: 12dvw 10dvw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    overflow: hidden;
    background-image: v-bind(bgImgStyle);
    background-size: cover;
    background-position: center;
}
@media (max-width: 768px) {
    .page-title {
        padding: 20dvh 5dvw;
    }
}

.page-title h1 {
    text-align: center;
}
</style>