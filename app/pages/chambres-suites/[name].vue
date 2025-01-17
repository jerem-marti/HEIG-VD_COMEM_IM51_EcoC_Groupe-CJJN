<script setup>
import ThePageHero from '~/components/ThePageHero.vue';
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';
import RoomSvg from '~/assets/icons/suites/SRIVIERA_PLAN.svg?url_encode';

const roomInfos = {
    id : 1,
    name : 'Suite Riviera',
    type : 'suite',
    description : 'L’élégance ultime de cette suite d\'une superficie de 90m2 tient aux codes intemporels d’un art de vivre de bon goût qui depuis la fin du XIXème siècle fait la réputation du Beau-Rivage Palace. Chaque motif, chaque couleur, trouve son origine dans le décor qui traverse les fenêtres, qui se fait présent partout côté lac, côté parc.\n\nLa hauteur sous plafond est belle et le parquet blond pose une touche finale à une décoration juste et parfaitement dans le goût de notre époque. Le bar, majestueuse armoire dorée à la feuille, est rehaussé de décors inspirés des motifs végétaux d’Asie. Il trône dans le salon, superbe. La vaisselle qu’il renferme est unique puisque chaque Suite à la sienne, comme une signature.',
    imagesPath : [
        'suites/SRIVIERA_123_1.webp',
        'suites/SRIVIERA_123_6.jpg',
        'suites/SRIVIERA_123_7.jpg',
        'suites/SRIVIERA_123_8.jpg',
    ],
    practicalInfos : [
        'Superficie: 90m2',
        'Large choix d\'oreillers sur demande',
        'Domotique performante et connexion de vos appareils personnels sur le réseau de votre chambre',
        'Machine à café haute gamme',
        'Guest Services',
        'Réservation prioritaire au restaurant gastronomique PIC 2 étoiles Michelin',
        'Salle VIP pour tous vos soins, coiffure, coaching sportif, cottage privé à la piscine',
        'Mise à disposition de journaux dans plusieurs langues au choix',
    ],
    roomSvg : 'raw svg code',
}

const RoomSvgStyle = RoomSvg ? `url("${RoomSvg}")` : 'none';

// const RoomPlan = defineAsyncComponent(function () {
//   return import(roomInfos.roomSvgUrlEncode);
// });
const ctaMsg = roomInfos.type === 'room' ? 'Réserver la chambre' : 'Réserver la suite';
const reservationPath = '/reservation?' + roomInfos.id;

</script>

<template>
    <main>
        <ThePageHero :title="roomInfos.name" :bgSvgUrlEncode="BackgroundHexagon">
            <div class="cta-content">
                <pre><p>{{ roomInfos.description }}</p></pre>
                <LinkButton :msg="ctaMsg" :path="reservationPath" />
            </div>
        </ThePageHero>
        <div class="images-grid">
            <NuxtImg v-for="(img, index) in roomInfos.imagesPath" :key="index" :src="img" :alt="roomInfos.name" />
        </div>
        <div class="room-details">
            <div class="practical-infos">
                <h2>Informations pratiques</h2>
                <ul>
                    <li v-for="(info, index) in roomInfos.practicalInfos" :key="index">{{ info }}</li>
                </ul>
            </div>
            <div class="room-plan"></div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}
.cta-content {
    display: flex;
    width: 90%;
    max-width: 70rem;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    background: var(--whitesmoke);
}
.images-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
    padding: 0 15vw;
}
.images-grid img {
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
    object-fit: cover;
}
pre {
    white-space: pre-line;
    font-family: inherit;
}
.room-details {
    display: flex;
    flex-direction: column;
    padding: 2rem 15vw;
    width: 100%;
    align-items: flex-start;
    gap: 0;
}
.practical-infos {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
}
.room-plan {
    width: 100%;
    aspect-ratio: 1/1;
    background-image: v-bind(RoomSvgStyle);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
@media screen and (max-width: 768px) {
    .images-grid {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        padding: 1rem;
    }
    .room-details {
        flex-direction: column;
        gap: 2.5rem;
    }
    .practical-infos {
        width: 100%;
    }
}
@media screen and (max-width: 480px) {
    .room-details {
        padding: 1rem;
    }
    .practical-infos {
        width: 100%;
    }
    .room-plan {
        width: 100%;
    }
    
}
</style>