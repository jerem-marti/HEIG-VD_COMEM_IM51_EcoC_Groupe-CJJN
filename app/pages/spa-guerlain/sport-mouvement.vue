<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
    <div class="sport-mouvement">
        <SpaGuerlainInfosSpas label1="Planning des cours" label2="Inscription" label3='Offre "UNE FORME OLYMPIQUE"' />
        <h2>Sport & Mouvement</h2>
        <div class="text-image">
            <div class="texte">
                <h3>Fitness au Beau-Rivage Palace
                </h3>
                <p>Grâce à son emplacement privilégié, le fitness du Beau-Rivage Palace vous offre un terrain de jeux à
                    nul
                    autre pareil pour prendre soin de votre corps. Notre salle de fitness lumineuse, notre salle de
                    cours
                    intimiste, nos piscines intérieures et extérieures mais aussi notre parc centenaire et les bords du
                    lac
                    tout proche s’offrent à vous, pour des séances collectives ou des entrainements totalement
                    personnalisés
                    élaborés par notre coach Jérémy JP Peltier et toute son équipe.
                </p>
            </div>
            <div class="image">
                <NuxtImg src="/spas/sport-mouvement.webp" alt="Soins Guerlain" sizes="xs:100vw lg:30vw"></NuxtImg>
            </div>
        </div>
        <div class="text-video separator">
            <div class="video">
                <div v-if="!videoLoaded" class="video-placeholder" @click="loadVideo">
                    <iframe src="https://www.youtube.com/embed/8EMj4Zd_XgE?controls=0&disablekb=1&fs=0&modestbranding=1"
                        frameborder="0" allowfullscreen class="inactive-iframe"></iframe>
                </div>
                <iframe v-if="videoLoaded" :src="videoSrc" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="texte">
                <h3>Coaching avec l'équipe Jérémy JP Peltier
                </h3>
                <p>Qu’il s’agisse de se maintenir en forme ou d’améliorer ses performances sportives, le fitness du Beau
                    Rivage Palace s’appuie depuis 2010 sur une collaboration exclusive avec Jérémy Peltier, à travers
                    une
                    méthode approuvée par les clients.</p>
                <p>La méthode Jérémy Peltier est un état d’esprit plus qu’une marque de fabrique. Un mode de vie dont
                    les
                    règles sont définies dès le départ par la cliente ou le client : selon la situation, le coaching
                    s’adapte au quotidien de chacune et chacun, en redéfinissant les contours de sa vie, en harmonie
                    avec
                    ses priorités du moment. Tout est mis en œuvre de manière organique afin de pouvoir œuvrer chaque
                    jour
                    dans la confiance et réveiller la meilleure version de soi-même grâce à un accompagnement
                    respectueux,
                    prodigué par une fidèle équipe de coachs passionnés, impliqués et formés avec soin.

                </p>
                <p>Un éventail d’activités intérieures ou extérieures vous est proposé. Selon les objectifs recherchés,
                    des
                    parcours pluridisciplinaires sont construits le temps de votre séjour et peuvent également être
                    accompagnés d’un programme "Well-being" exclusif au Beau-Rivage Palace.
                </p>
            </div>
        </div>
        <h3 class="separator">Les cours collectifs</h3>
        <p>Parce qu’ils sont un excellent moyen d’entretenir sa forme et sa motivation dans un esprit de
            convivialité, nous vous proposons tout un assortiment de cours collectifs.
        </p>
        <p>
            <a class="link" href="">Découvrez le planning des cours</a>
        </p>
        <h4>Fitness par les équipes de Jérémy JP Peltier

        </h4>
        <p><span class="bold">Core Training:</span> Est un cour basé spécifiquement sur le renforcement de la sangle
            abdominale en profondeur. Il est pratiqué en effectuant des exercices sollicitant les muscles
            fonctionnels (les muscles sollicités dans la vie quotidienne).
        </p>
        <p><span class="bold">Stretching Mobility:</span> Est un stretching intense pour assouplir et détendre la
            totalité des muscles du corps et pour améliorer la souplesse générale. Il est l’art d’étirer votre corps
            et vos muscles pour facilité et fluidifié votre mobilité tout en apaisant d’éventuelles douleurs.
        </p>
        <p><span class="bold">CAF (Cuisses-Abdos-Fessier):</span> Est un cours de cuisses abdos fessiers pour
            tonifier ces zones spécifiquement.
        </p>
        <p><span class="bold">Aqua Détox:Aqua Détox:</span> Ce cours d'aquagym en piscine vise à détendre les
            muscles, relaxer le corps
            et le tonifier en même temps.
        </p>
        <h4>Yoga par Inga</h4>
        <p>Découvrez une approche holistique du bien-être avec Inga, professeure de yoga passionnée depuis plus de
            15 ans. Pour elle, le yoga est bien plus qu'une passion, c'est un mode de vie. Que vous soyez débutant
            ou pratiquant avancé, ces sessions vous offriront une opportunité de croissance et de bien-être
            personnel.
        </p>
        <p><span class="bold">Hatha Yoga:</span> Ha (soleil) + Tha (lune) yoga, permet de purifier nos canaux
            solaires et lunaires. C'est une pratique à la fois douce et vivifiante, aussi relaxante que fortifiante,
            respectueuse du corps et du niveau de chacun.
        </p>
        <p><span class="bold">Vinyasa Yoga:</span> Enchainez les postures en synchronisation avec le souffle tout en
            faisant monter votre corps en température. C’est un très bon entrainement cardiovasculaire qui aide à
            développer force et conscience corporelle
        </p>
        <p><span class="bold">Vinyasa-ashtanga Yoga:</span> Est un type de yoga vigoureux déclenchant la sudation,
            purifiant ainsi votre corps de l’intérieur vers l’extérieur. Cela vous permet de ressentir un apaisement
            profond, une amélioration de la santé et plus de bien-être
        </p>
        <p class="italic">Tous les cours collectifs durent 1 heure
            Gratuit pour les clients résidents / CHF 60.- pour les clients non-résidents
        </p>
        <p class="bold">Réservation à <a class="link" href="mailto:spa@brp.ch">spa(at)brp.ch</a></p>
        <h3 class="separator">Activités en extérieur </h3>
        <p>Au coeur de notre magnifique parc de 4 hectares, un <span class="bold">court de tennis</span> fraîchement
            rénové, un <span class="bold">practice de
                golf et putter green</span>, ainsi qu’un <span class="bold">court de padel</span> profitent autant
            du dégagement inédit sur le lac Léman
            que du bain de verdure alentour.
        </p>
        <p><a class="link" href="">Toutes nos activités estivales en détail</a></p>
        <p>Terrains disponibles de 7h à 21h30 sur réservation à <a class="link"
                href="mailto:spa@brp.ch">spa(at)brp.ch</a>. Matériel à disposition au Spa et cours privés sur
            demande.
        </p>
        <p><span class="bold">Plus à l’aise sur l’eau ?</span> accessible à tous, le stand-up paddle est l’activité
            sportive parfaite pour
            s’offrir du grand air, de magnifiques paysages mais surtout des moments de pur ressourcement seul ou
            encore amusants à deux ou en famille.
        </p>
        <p class="italic">Matériel disponible au Spa.</p>
        <Newsletter class="newsletter" />
    </div>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

const videoLoaded = ref(false);
const videoSrc = ref("");

function loadVideo() {
    videoLoaded.value = true;
    videoSrc.value = "https://www.youtube.com/embed/8EMj4Zd_XgE?autoplay=1";
}


</script>

<style scoped>
.sport-mouvement {
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


.text-image,
.text-video {
    display: flex;
    align-items: center;
    column-gap: 2rem;
}

.text-video {
    align-items: flex-start;
}


.image {
    width: 100%;
    /* Assurez que le conteneur utilise la largeur disponible */
    height: 100%;
    /* Le conteneur utilise la hauteur disponible */
}

.image img {
    width: 100%;
    /* L'image occupe toute la largeur */
    height: 100%;
    /* L'image occupe toute la hauteur */
    object-fit: cover;
    /* Recadre l'image pour qu'elle remplisse le conteneur */
    display: block;
    /* Évite les espaces indésirables en mode inline */
    min-height: 15rem;
}

.video {
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 20rem;
    min-width: 20rem;
}

.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}


@media (max-width: 1024px) {

    .text-image,
    .text-video {
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

.separator {
    border-top: 1px solid #ccc;
    padding-top: 2rem;
    margin-top: 2rem;

}


.newsletter {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}
</style>