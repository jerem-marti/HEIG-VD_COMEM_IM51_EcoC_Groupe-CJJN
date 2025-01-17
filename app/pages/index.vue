<script setup>
import BackgroundHero from '~/assets/icons/hero/background-waves.svg?url_encode';
</script>

<template>
    <main>
        <!-- <LogoSvg /> -->
        <ThePageHero :bgSvgUrlEncode="BackgroundHero" title="Beau-Rivage Palace" hideTitle>
            <div class="cta-content">
                <SvgoLogoBrpBlack class="brp-logo"/>
            </div>
        </ThePageHero>

        <section class="section">
           <HomepageAbout />
        </section>

        <section class="section">
            <HomepageRoomsSuites />
        </section>

        <section class="section">
            <HomepageRestaurant />
        </section>

        <section class="section">
            <HomepageAgenda />
        </section>

        <section class="section">
            <HomepageCta />
        </section>
    </main>
</template>

<style scoped>
.cta-content {
    display: flex;
    width: 90%;
    max-width: 50rem;
    padding: 3rem 1rem;
    justify-content: center;
    gap: 1.25rem;
    background: var(--whitesmoke);
}
.brp-logo {
    width: 100%;
    height: auto;
    max-width: 670px;
}
</style>