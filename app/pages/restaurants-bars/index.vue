<template>
    <main>
        <ThePageHero title="Restaurants & Bars" :bgSvgUrlEncode="BackgroundHexagon" />
        <div class="restaurants-grid">
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :id="restaurant.id"
                :type="restaurant.type" :name="restaurant.name" :img="restaurant.mainImg" />
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
        mainImg: 'restaurants/thumb_pic.webp',
    },
    {
        id: 2,
        name: 'Café Beau-Rivage',
        type: 'Brasserie de luxe',
        mainImg: 'restaurants/thumb_restaurant_cafe.webp',
    },
    {
        id: 4,
        name: 'La Terrasse',
        type: 'Restaurant petit déjeuner et brunch',
        mainImg: 'restaurants/thumb_la_terrasse.webp',
    },
    {
        id: 3,
        name: 'Kaigan',
        type: 'Restaurant japonais',
        mainImg: 'restaurants/thumb_kaigan.webp',
    }
])
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.restaurants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
    width: 100%; 
    box-sizing: border-box; 
    padding: 0 7%;
}
@media screen and (max-width: 640px) {
    .restaurants-grid {
        padding: 0 1rem;
    }
    
}

</style>