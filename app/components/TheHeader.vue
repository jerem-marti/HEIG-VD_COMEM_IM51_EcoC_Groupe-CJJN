<template>
    <header class="header">
        <div class="logo-container">
            <SvgoBrpIcon class="header-logo" />
        </div>
        <div class="header-nav">
            <NuxtLink to="/" class="header-nav list-item-link" exact-active-class="active">Accueil</NuxtLink>
            <NuxtLink to="/rooms" class="header-nav list-item-link" exact-active-class="active">Chambres & Suites
            </NuxtLink>
            <NuxtLink to="/restaurants" class="header-nav list-item-link" exact-active-class="active">Restaurants & Bars
            </NuxtLink>
            <NuxtLink to="/spas" class="header-nav list-item-link" exact-active-class="active">Spa Guerlain</NuxtLink>
        </div>
        <div class="button-container">
            <LinkButton class="button" msg="Réserver" path="/reservation" />
        </div>

    </header>

</template>

<script setup>
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    background-color: var(--cararra);
    align-items: stretch;
    justify-content: space-between;
}

.header-nav {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
    column-gap: 2rem;
}

.logo-container {
    background-color: var(--peach-yellow);
    height: auto;
    display: flex;
    align-items: center;

}

.header-logo {
    width: 4.375rem;
    padding: 0.75rem;
    height: auto;
}

.button-container {
    display: flex;
    align-items: center;
}

.button {
    margin-right: 1rem;
}

.active {
    font-family: var(--antarctica-semibold);
}
</style>