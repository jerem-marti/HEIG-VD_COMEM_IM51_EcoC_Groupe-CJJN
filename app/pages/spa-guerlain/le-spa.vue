<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
    <div class="le-spa">
        <SpaGuerlainInfosSpas />
        <h2>Le spa</h2>
        <div class="text-image">
            <div class="texte">
                <h3>Envisager le bien-être autrement</h3>
                <p>Secrètement niché dans un écrin de verdure, le Spa du Beau-Rivage Palace est un cocon qui agit
                    sur le
                    corps et l’esprit, offrant un profond sentiment d’apaisement et de sérénité. Ses matériaux
                    nobles,
                    chaleureux, confortables créent une atmosphère qui va au-delà d’un lieu de massages.
                </p>
                <p class="italic"> Pensé comme un parcours initiatique, fait de découvertes, de sensations physiques
                    et
                    d’émotions
                    visuelles qui invitent à un voyage sensoriel.
                </p>
            </div>
            <div class="image">
                <NuxtImg src="/spas/le-spa.webp" alt="Le spa" sizes="xs:100vw lg:50vw"></NuxtImg>
            </div>


        </div>

        <h3>Un lieu de détente</h3>
        <p>Point d’orgue du voyage, un patio orné d’un arbre de vie qui, de par sa lumière ondoyante, enveloppe ses
            hôtes sous ses branches réconfortantes. En complément de cette œuvre d’art, s’ajoutent sur <span
                class="bold">1500 m2</span> les
            espaces suivants :
        </p>
        <ul>
            <li>1 exceptionnelle suite double au cérémonial raffiné</li>
            <li>8 cabines pour profiter de soins et rituel</li>
            <li>1 salle de relaxation réinventée invitant au lâcher-prise </li>
            <li>1 studio de yoga et de méditation accueillant des cours collectifs et individuels chaque jour
            </li>
            <li>2 espaces vestiaire comprenant hammam, sauna, ice cave et fontaine à glace
            </li>
            <li>1 salle de fitness avec vue sur le lac animée par l'équipe de coachs de Jérémy JP Peltier</li>
            <li>1 studio coiffure</li>


            <li>1 piscine chauffée intérieure</li>
            <li>1 piscine extérieure</li>
            <li>1 plage de sable fin</li>
            <li>1 restaurant « Ô Terrasse »</li>
            <li>1 court de tennis, 1 court de padel et 1 practice de golf en extérieur</li>
        </ul>

        <h3 class="separator">Les invités</h3>
        <p>Le Spa du Beau-Rivage Palace vous invite à vivre une expérience unique et à rentrer dans l'un des univers
            de nos spécialistes invités qui vous feront découvrir leurs soins et conseils.
        </p>
        <h4> Du 16 au 31 janvier 2025</h4>
        <p>Marta Gomez, une spécialiste en physiothérapie avancée et en médecine chinoise avec un intérêt
            particulier pour la santé des femmes.</p>

            <div class="round-button">
        <RoundButton backgroundColor="var(--cararra)" label="Liste des soins"
            link="https://www.brp.ch/spa-guerlain/marta-gomes/">
            <SvgoRestaurantsIconBrochure />
        </RoundButton>
        </div>

        <h3 class="separator">Informations pratiques</h3>

        <p>Ouvert tous les jours de 6h30 à 22h00.</p>

        <h4>Clients non-résidents :</h4>
        <p>Nos soins apportent bien-être et détente aux clients du Beau-Rivage Palace, comme aux visiteurs
            non-résidents.</p>
            <Newsletter class="newsletter"/>
    </div>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

</script>

<style scoped>
.le-spa {
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

.text-image {
    display: flex;
    align-items: center;
    column-gap: 2rem;
}

@media (max-width: 1024px) {
    .text-image {
        flex-direction: column;
    }
}

.separator {
    border-top: 1px solid #ccc;
    padding-top: 2rem;
    margin-top: 2rem;

}

.round-button {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.newsletter {
    width: 100%;
    margin-left: 0%;
  margin-right: 0%;


}
</style>