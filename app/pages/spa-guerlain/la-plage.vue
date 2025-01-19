<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
    <div class="infos">
        <div class="logo">
            <SvgoLogoPlage />
        </div>
        <div class="adress">
            <div>Place du Port 17-19 </div>
            <div>CH - 1006 Lausanne
            </div>
            <div>E. spa@brp.ch
            </div>
            <div>T. +41 21 613 33 67</div>
        </div>
        <div class="ouverture">
            <h4>Ouverture</h4>
            <div>De mai à fin septembre
            </div>
        </div>
    </div>
    <div class="la-plage">
        <h2>La plage</h2>
        <div class="text-image ">
            <div class="texte">
                <h3>Laissez place à la détente </h3>
                <p>Les majestueux pins parasols de nos jardins apportaient déjà cette touche toute méditerranéenne à
                    notre
                    piscine extérieure. Dès cet été, c’est une magnifique plage de sable blanc et fin qui transportera
                    nos
                    hôtes des bords du lac en bords de mer.
                </p>
                <p>Transats confortables, petites cabanes de plage au look délicieusement vintage, sunbeds pour deux
                    personnes, la plage du Beau-Rivage Palace sera the place to be par avis de grand beau temps.

                </p>
                <p>Le temps d’une sieste sous le parasol, d’une lecture captivante à l’ombre des arbres ou de quelques
                    longueurs rafraichissantes dans notre grand bassin azur, notre plage, dont l’accès est inclus pour
                    les
                    clients de l’hôtel et les membres du Spa, sera également ouverte aux personnes ayant acheté un soin
                    d’au
                    moins 50 minutes + accès au Spa et, ce, sous réserve de disponibilités. Maillot de bain, crème
                    protectrice et lunettes de soleil glissées dans un coin du sac ? C’est le moment de descendre à la
                    plage
                    !
                </p>
            </div>
                <div class="image">
                    <NuxtImg src="/spas/plage.webp" alt="Soins Guerlain" sizes="xs:100vw lg:50vw"></NuxtImg>
                </div>
        </div>
        <Newsletter class="newsletter" />
    </div>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

</script>

<style scoped>
.la-plage {
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

.infos {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;
    padding: 2rem;
    background-color: var(--peach-yellow);
}

.infos svg {
    width: 15rem;
    height: auto;
}


.text-image {
    display: flex;
    align-items: center;
    column-gap: 2rem;
}

.image {
    width: 100%; /* Assurez que le conteneur utilise la largeur disponible */
    height: 100%; /* Le conteneur utilise la hauteur disponible */
}

.image img {
    width: 100%; /* L'image occupe toute la largeur */
    height: 100%; /* L'image occupe toute la hauteur */
    object-fit: cover; /* Recadre l'image pour qu'elle remplisse le conteneur */
    display: block; /* Évite les espaces indésirables en mode inline */
    min-height: 20rem;
    min-width: 30rem;
}

.newsletter {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}

@media (max-width: 1024px) {
    .infos {
        flex-direction: column;
        text-align: center;
        row-gap: 2rem;
    }

    .adress {
        text-align: center;
    }

    .text-image {
        flex-direction: column;
    }

    .image img {
        min-height: 0;
        min-width: 0;
    }

}


</style>