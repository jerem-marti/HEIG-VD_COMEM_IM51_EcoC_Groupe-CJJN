<script setup>
import ThePageHero from '~/components/ThePageHero.vue';
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

const route = useRoute()

</script>

<template>
    <main>
        <ThePageHero title="Chambre supérieure vue lac & Alpes" :bgSvgUrlEncode="BackgroundHexagon">
            <div class="cta-content">
                <p>Ouvrir les yeux et laisser ses pensées plonger dans les eaux bleues du lac : voilà le rêve éveillé que font quotidiennement les hôtes d’une chambre avec vue sur le lac Léman et les Alpes au Beau-Rivage Palace. Les teintes bleu clair et vert d’eau de ces chambres donnent naturellement  ’impression d’être bercé par les flots.</p>
                <button>Réserver la chambre</button>
            </div>
        </ThePageHero>
    </main>
</template>

<style scoped>
.cta-content {
    display: flex;
    width: 90%;
    max-width: 50rem;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    background: var(--whitesmoke);
} 
</style>