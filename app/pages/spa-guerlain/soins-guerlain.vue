<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
    <div class="soins-guelain">
        <SpaGuerlainInfosSpas />
            <h2>Soins Guerlain</h2>
            <h3>L'Alliance de deux Grandes Maisons </h3>
            <p>Le Beau-Rivage Palace dévoile son nouveau Spa Guerlain, une adresse d’exception exclusive.</p>

            <p> Toutes deux incarnent le luxe et l’excellence, faisant de l’art de vivre et du beau une philosophie
                d’être de chaque instant. L’une est née à Paris en 1828, l’autre a vu le jour sur les bords du lac Léman
                à Lausanne en 1861.</p>

            <p>Aujourd’hui, ces deux grandes Maisons unissent leurs savoir-faire pour la création du premier Spa
                Guerlain au cœur du Beau-Rivage Palace. Un écrin pour l’enchantement des sens et de l’esprit où excelle
                l’expertise de Guerlain.</p>
            <div class="text-image separator">
                <div class="texte">
                    <h3>Les Soins</h3>
                    <p>La carte du Spa Guerlain au Beau-Rivage Palace se compose d’un large éventail de soins
                        signatures,
                        alliant expertise facialiste de pointe et un savoir-faire unique pour le corps. Pour tous,
                        Guerlain
                        s'inspire de massages traditionnels et collabore avec des spécialistes du monde entier pour
                        développer
                        des gestuelles inédites, sans cesse renouvelées, pour tous les besoins.</p>
                    <p>Le Spa Guerlain du Beau-Rivage Palace propose des expériences holistiques exclusives inspirées de
                        l’éclatante Riviera suisse:
                    </p>
                    <ul>
                        <li>« Éclat Riviera », un soin visage en hommage à la Riviera suisse et à son infinie beauté.
                        </li>
                        <li>« Ballet sur le lac Léman », un soin visage et corps infiniment sensoriel et artistique,
                            s’inspirant
                            du Béjart Ballet Lausanne.</li>
                    </ul>
                    <div class="round-button">
                        <RoundButton backgroundColor="var(--cararra)" label="Découvrez la brochure"
                            link="https://online.flippingbook.com/view/146343830/?_gl=1*1ktmvc6*_gcl_au*OTE1MzQ0NDgwLjE3MzY4ODUxMTQ.*_ga*NjU4MDMzNzg1LjE3MzY4ODUxMTM.*_ga_8DJ87WBL93*MTczNzE4Njg1OS41LjEuMTczNzIwNzM3Ni40Ny4wLjEyMjMxNTAyOTQ.">
                            <SvgoRestaurantsIconBrochure />
                        </RoundButton>
                    </div>
                </div>
                <div class="image">
                    <NuxtImg src="/spas/soins.jpg" alt="Soins Guerlain" sizes="xs:100vw lg:70vw"></NuxtImg>
                </div>
            </div>

            <h3 class="separator">Studio coiffure</h3>
            <h4>Ouvert tous les jours sur rendez-vous</h4>
            <p>Au Beau-Rivage Palace, c'est dans l'intimité d'un lumineux studio situé dans l'aile Palace que notre
                coiffeur vous accueille pour une expérience exclusive. </p>

            <p>Avec une superbe vue lac et le confort d'une chambre de palace, notre studio coiffure est une bulle
                d'intimité apprécié de tous nos clients.</p>
            <ul>
                <li>Brushing femme</li>
                <li>Coupe / brushing femme
                </li>
                <li>Coupe homme
                </li>
                <li>Coloration
                </li>
                <li>Chignons
                </li>
            </ul>
        <Newsletter class="newsletter" />
    </div>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

</script>

<style scoped>
.soins-guelain {
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

.separator {
    border-top: 1px solid #ccc;
    padding-top: 2rem;
    margin-top: 2rem;

}

.round-button {
    margin-top: 3rem;
    margin-bottom: 3rem;
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
    min-height: 30rem;
}

@media (max-width: 1024px) {
    .text-image {
        flex-direction: column;
    }

    .image img {
        min-height: 0;
    }
    
}

.newsletter {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}
</style>