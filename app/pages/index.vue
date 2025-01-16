<script setup>
import ThePageHero from '~/components/ThePageHero.vue';
import BackgroundHero from '~/assets/icons/hero/background-waves.svg?url_encode';
import inlineSvg from '~/composables/inlineSvg.vue';
import LogoSvg from '~/assets/icons/logo/logo-brp-black.svg?url_encode';
import About from '~/components/homepage/About.vue';
import RoomsSuites from '~/components/homepage/RoomsSuites.vue';
import Restaurant from '~/components/homepage/Restaurant.vue';
import Agenda from '~/components/homepage/Agenda.vue';
import Cta from '~/components/homepage/Cta.vue';

const route = useRoute()

</script>

<template>
    <main>
        <!-- <LogoSvg /> -->
        <ThePageHero :bgSvgUrlEncode="BackgroundHero">
            <div class="cta-content">
                <inlineSvg :inlineSvg="LogoSvg" width="670px">
                </inlineSvg>
            </div>
        </ThePageHero>

        <section class="section">
           <About />
        </section>

        <section class="section">
            <RoomsSuites />
        </section>

        <section class="section">
            <Restaurant />
        </section>

        <section class="section">
            <Agenda />
        </section>

        <section class="section">
            <Cta />
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
</style>