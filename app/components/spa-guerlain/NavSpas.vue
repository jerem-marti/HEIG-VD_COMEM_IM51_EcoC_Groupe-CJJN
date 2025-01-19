<template>
    <div class="nav">
        <NuxtLink to="/spa-guerlain/le-spa" class="header-nav list-item-link" exact-active-class="active">Le spa
        </NuxtLink>
        <NuxtLink to="/spa-guerlain/soins-guerlain" class="header-nav list-item-link" exact-active-class="active">Soins
            Guerlain</NuxtLink>
        <NuxtLink to="/spa-guerlain/suite-spa" class="header-nav list-item-link" exact-active-class="active">Suite Spa
        </NuxtLink>
        <NuxtLink to="/spa-guerlain/abonnements-soins" class="header-nav list-item-link" exact-active-class="active">
            Abonnements de soins</NuxtLink>
        <NuxtLink to="/spa-guerlain/sport-mouvement" class="header-nav list-item-link" exact-active-class="active">Sport
            & Mouvement</NuxtLink>
        <NuxtLink to="/spa-guerlain/la-plage" class="header-nav list-item-link" exact-active-class="active">La Plage
        </NuxtLink>
    </div>
</template>

<script setup>
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 1rem;
    flex-wrap: wrap;
    padding: 1rem;
    background-color: var(--cararra);
}

.active {
    font-family: var(--antarctica-semibold);
}
</style>