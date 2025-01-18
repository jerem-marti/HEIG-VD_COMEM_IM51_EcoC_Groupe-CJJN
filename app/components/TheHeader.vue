<template>
    <header class="header">
        <div class="navbar">
            <div class="logo-container">
                <SvgoBrpIcon class="header-logo" @click="navigateTo('/')" />
            </div>
            <div class="header-nav" v-if="!mobileMenuEnabled">
                <NuxtLink to="/" class="header-nav list-item-link" exact-active-class="active">Accueil</NuxtLink>
                <NuxtLink to="/chambres-suites" class="header-nav list-item-link" exact-active-class="active">Chambres & Suites
                </NuxtLink>
                <NuxtLink to="/restaurants-bars" class="header-nav list-item-link" exact-active-class="active">Restaurants & Bars
                </NuxtLink>
                <NuxtLink to="/spas" class="header-nav list-item-link" exact-active-class="active">Spa Guerlain</NuxtLink>
            </div>
            <div class="button-container">
                <LinkButton class="button" msg="Réserver" path="/reservation" />
                <SvgoHeaderHamburgerMenu class="menu-toggle" v-if="mobileMenuEnabled && !mobileMenuOpened" @click="toggleMobileMenu" />
                <SvgoHeaderCloseMenu class="menu-toggle" v-if="mobileMenuEnabled && mobileMenuOpened" @click="toggleMobileMenu" />
            </div>
        </div>
        <div class="navlist" v-if="mobileMenuEnabled && mobileMenuOpened">
            <NuxtLink to="/" class="navlist-item" exact-active-class="active" @click="closeMobileMenu">Accueil</NuxtLink>
            <NuxtLink to="/chambres-suites" class="navlist-item" exact-active-class="active" @click="closeMobileMenu">Chambres & Suites</NuxtLink>
            <NuxtLink to="/restaurants-bars" class="navlist-item" exact-active-class="active" @click="closeMobileMenu">Restaurants & Bars</NuxtLink>
            <NuxtLink to="/spas" class="navlist-item" exact-active-class="active" @click="closeMobileMenu">Spa Guerlain</NuxtLink>
        </div>
    </header>

</template>

<script setup>

const { breakpoint } = useViewport(); // Reactive viewport data
const mobileMenuOpened = ref(false);

const toggleMobileMenu = () => {
  if (breakpoint.value === 'md' || breakpoint.value === 'sm' || breakpoint.value === 'xs') {
    mobileMenuOpened.value = !mobileMenuOpened.value;
  }
};

const closeMobileMenu = () => {
  mobileMenuOpened.value = false;
};

const mobileMenuEnabled = computed(() => {
  return breakpoint.value === 'xs' || breakpoint.value === 'md' || breakpoint.value === 'sm';
});

</script>

<style scoped>
.navbar {
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
    padding: 0 1rem;
}

.button {
    margin-right: 1rem;
}

.active {
    font-family: var(--antarctica-semibold);
}

.menu-toggle {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
}

.navlist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--cararra);
    position: absolute;
    top: 4.5rem;
    right: 0;
    z-index: 100;
    width: 100%;
    border-top: 2px solid var(--peach-yellow);
}
</style>
