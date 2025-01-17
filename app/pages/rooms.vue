<template>
  <main>
    <ThePageHero title="Chambres et suites" :bgSvgUrlEncode="BackgroundHexagon" />
      <h2>Chambres</h2>
      <div class="rooms-grid">
        <RoomCard v-for="room in rooms" :key="room.id" :id="room.id" :type="room.type" :name="room.name"
          :description="room.description" :img="room.img" :area="room.area" :view="room.view" :exposure="room.exposure"
          :balcony="room.balcony" />
      </div>
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
    img: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/chambres-suites/tuiles/Chambre-superieur-vue-ville-.jpg',
    area: 25,
    view: 'Vue sur ville et jardins',
    exposure: 'Nord'
  },
  {
    id: 2,
    type: 'room',
    name: 'Supérieure vue lac & alpes',
    img: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/chambres-suites/tuiles/Chambre-superieur-vue-ville-.jpg',
    area: 32,
    view: 'Vue sur lac & Alpes ou port d\'Ouchy',
    exposure: 'Sud',
    balcony: true,
  },
  {
    id: 3,
    type: 'room',
    name: 'Deluxe',
    img: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/chambres-suites/tuiles/Chambre-superieur-vue-ville-.jpg',
    area: 45,
    view: 'Vue sur lac & Alpes ou jardins',
    exposure: 'Sud',
    balcony: true,
  },
  {
    id: 4,
    type: 'room',
    name: 'Deluxe Riviera',
    img: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/chambres-suites/tuiles/Chambre-superieur-vue-ville-.jpg',
    area: 50,
    view: 'Vue sur lac & Alpes',
    exposure: 'Sud'
  },
  {
    id: 5,
    type: 'suit',
    name: 'Junior Suite Palace',
    img: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/chambres-suites/tuiles/Chambre-superieur-vue-ville-.jpg',
    description: 'Suite de 60m2 avec vue sur le lac et les Alpes'},
]);
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7%;
  margin-right: 7%;
}

.rooms-grid {
  width: 100%;
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Mobile - 1 carte par ligne */
@media (max-width: 767px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
}

/* Tablette - 2 cartes par ligne */
@media (min-width: 768px) and (max-width: 1279px) {
  .rooms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Petit écran - 3 cartes par ligne */
@media (min-width: 1280px) and (max-width: 1439px) {
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
