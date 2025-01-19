<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
        <div class="suite-spa">
            <SpaGuerlainInfosSpas />
            <h2>Suite Spa</h2>
            <h3>60 minutes de soins par personne à partir de deux nuits</h3>
            <p>
                Conçue pour des séjours de bien-être, la Suite Spa se compose d’un salon, d’une chambre à coucher et
                d’une
                immense salle de bains en marbre rare comprenant un espace de soins. Située au 6e étage, elle offre une
                vue
                sublime sur le lac et les Alpes.
            </p>

            <p>
                La Suite Spa est incontestablement l’un des lieux privilégiés du Beau-Rivage Palace. La salle de bains,
                toute de marbre vêtue, propose deux tables de massages, un bain à remous et un hammam.
            </p>
            <p>
                En réservant cette Suite, le Spa Guerlain vient à vous ! L’été, vous profiterez de son beau balcon avec
                vue
                sur le lac et les Alpes. Quant à l’hiver, vous conclurez une journée de bien être par une soirée devant
                la
                cheminée. La Suite Spa comporte aussi un luxueux FreshBed, scientifiquement développé pour offrir un
                microclimat frais, favorisant un sommeil profond et réparateur.
            </p>
            <p class="italic">
                Découvrez la chambre plus en details <a class="link" href="">ici</a>
                .
            </p>
            <Newsletter class="newsletter" />
        </div>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

</script>

<style scoped>
.suite-spa {
    margin-left: 7%;
    margin-right: 7%;
}

p {
    margin-bottom: 1rem
}

.bold {
    font-family: var(--antarctica-semibold);
}

.italic {
    font-style: italic;
}

.link {
    text-decoration: underline;
}

.newsletter {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}

</style>