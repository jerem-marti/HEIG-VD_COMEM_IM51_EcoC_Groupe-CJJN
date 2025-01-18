<template>
    <main>
        <ThePageHero title="Restaurants & Bars" :bgSvgUrlEncode="BackgroundHexagon" />
        <div class="restaurants-grid">
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :id="restaurant.id"
                :type="restaurant.type" :name="restaurant.name" :mainImg="restaurant.mainImg" />
        </div>
        <Newsletter/>
    </main>
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

const restaurants = ref([
    {
        id: 1,
        name: 'PIC au Beau-Rivage Palace',
        type: 'Restaurant gastronomique',
        mainImg: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/restaurants-bars/PIC/Pic_beaurivage_palace_mike_wolf_5.png',
    },
    {
        id: 2,
        name: 'Café Beau-Rivage',
        type: 'Brasserie de luxe',
        mainImg: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/restaurants-bars/cafe_beau_rivage/BeauRivagePalace_RestaurantCafeBeauRivage_Interieur_Ambiance01-BD.jpg',
    },
    {
        id: 1,
        name: 'PIC au Beau-Rivage Palace',
        type: 'Restaurant gastronomique',
        mainImg: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/restaurants-bars/PIC/Pic_beaurivage_palace_mike_wolf_5.png',
    },
    {
        id: 2,
        name: 'Café Beau-Rivage',
        type: 'Brasserie de luxe',
        mainImg: 'https://www.brp.ch/fileadmin/documents/brp.ch/images/restaurants-bars/cafe_beau_rivage/BeauRivagePalace_RestaurantCafeBeauRivage_Interieur_Ambiance01-BD.jpg',
    }
])
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7%;
  margin-right: 7%;
}

.title {
    background-image: url('../../public/svg/fond-rooms.svg');
    background-position: center;
    background-size: auto 100%;
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.restaurants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
    width: 100%; 
    box-sizing: border-box; 
}

</style>