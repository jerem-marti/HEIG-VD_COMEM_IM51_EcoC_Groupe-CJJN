<script setup>
</script>

<template>
    <div class="container">
        <div class="row cta">
            <div class="cta__container">
                <h2 class="h3">Ne ratez rien de ce qu’il se passe au Beau-Rivage</h2>
                <LinkButton msg="Voir tout l’agenda du Beau-Rivage" path="#"  color-inverted="true" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cta {
    background-image: url('@/assets/icons/hero/background-waves.svg');
    background-size: cover;
    padding: 3rem;

    &__container {
        background: var(--peach-yellow);
        padding: 1rem;
        margin: 0;
        @media screen and (min-width: 768px) {
            max-width: 50vw;
        }
    }
}
</style>