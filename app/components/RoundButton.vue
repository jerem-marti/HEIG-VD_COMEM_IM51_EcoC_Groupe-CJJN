<template>
    <a :href="link">
        <div class="round-button">
            <div class="visual">
                <slot></slot>
            </div>
            <div class="label">{{ label }}</div>

        </div>
    </a>
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    backgroundColor: {
        type: String,
        default: 'var(--whitesmoke)',
    },
});

</script>

<style>
.round-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.visual {
    width: 6rem;
    height: 6rem;
    background-color: v-bind(props.backgroundColor);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.round-button svg {
    width: 5rem;
    height: auto;
}

.label {
    font-family: var(--antarctica-semibold);
    margin-top: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
}
</style>
