<template>
  <main>
    <ThePageHero title="Chambres et suites" :bgSvgUrlEncode="BackgroundHexagon" />
    <h2 class="content">Chambres</h2>
    <div class="rooms-grid content">
      <RoomCard v-for="room in rooms" :key="room.id" :id="room.id" :type="room.type" :name="room.name"
        :description="room.description" :img="room.img" :area="room.area" :view="room.view" :exposure="room.exposure"
        :balcony="room.balcony" />
    </div>
    <h2 class="content">Suites</h2>
    <div class="rooms-grid content">
      <RoomCard v-for="suite in suites" :key="suite.id" :id="suite.id" :type="suite.type" :name="suite.name"
        :description="suite.description" :img="suite.img" :area="suite.area" :view="suite.view" :exposure="suite.exposure"
        :balcony="suite.balcony" />
    </div>
    <Newsletter class="content"/>
  </main>
</template>


<script setup>
import { ref } from 'vue';
import ThePageHero from '~/components/ThePageHero.vue';
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

const rooms = ref([
  {
    id: 1,
    type: 'room',
    name: 'Supérieure vue ville',
    img: 'rooms-thumbnails/deluxe_jardin_bleuargent.jpg',
    area: 25,
    view: 'Vue sur ville et jardins',
    exposure: 'Nord'
  },
  {
    id: 2,
    type: 'room',
    name: 'Supérieure vue lac & alpes',
    img: 'rooms-thumbnails/deluxe_riviera_beige.webp',
    area: 32,
    view: 'Vue sur lac & Alpes ou port d\'Ouchy',
    exposure: 'Sud',
    balcony: true,
  },
  {
    id: 3,
    type: 'room',
    name: 'Deluxe',
    img: 'rooms-thumbnails/room_superior.jpg',
    area: 45,
    view: 'Vue sur lac & Alpes ou jardins',
    exposure: 'Sud',
    balcony: true,
  },
  {
    id: 4,
    type: 'room',
    name: 'Deluxe Riviera',
    img: 'rooms-thumbnails/superior_room_lake_view.webp',
    area: 50,
    view: 'Vue sur lac & Alpes',
    exposure: 'Sud'
  },
]);
const suites = ref([
  {
    id: 5,
    type: 'suit',
    name: 'Suite Riviera',
    img: 'rooms-thumbnails/sriviera.webp',
    description: 'L’art de vivre se fait ici élégance. Sur une surface de 90m2 et 2 terrasses d\'agrément, la Suite Riviera célèbre la Tradition en Mouvement, la devise du Beau-Rivage Palace.'},
]);
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.rooms-grid {
  width: 100%;
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

.content {
  width: 100%;
  max-width: 1200px;
  padding: 0 7%;
}

/* Mobile - 1 carte par ligne */
@media (max-width: 768px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
  .content {
    padding: 0 1rem;
  }
}

/* Tablette - 2 cartes par ligne */
@media (min-width: 768px) {
  .rooms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Petit écran - 3 cartes par ligne */
@media (min-width: 1280px) {
  .rooms-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Grand écran - 4 cartes par ligne */
@media (min-width: 1440px) {
  .rooms-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 2400px;
  }
}
</style>
