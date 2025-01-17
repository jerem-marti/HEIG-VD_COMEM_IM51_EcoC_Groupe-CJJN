<script setup>
</script>

<template>
    <div class="container">
        <div class="row cta">
            <div class="col-4 offset-4">
                <div class="cta__container">
                    <h2 class="h3">Ne ratez rien de ce qu’il se passe au Beau-Rivage</h2>
                    <a href="#">Voir tout l’agenda du Beau-Rivage</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cta {
    background-image: url('@/assets/icons/hero/background-waves.svg');
    background-size: cover;
    padding: 3rem 0;

    &__container {
        background: var(--peach-yellow);
        padding: 1rem;
    }
}
</style>