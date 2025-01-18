<template>
  <ThePageHero :title="restaurant.name" :bgSvgUrlEncode="BackgroundHexagon" />
  <div class="restaurant-container">
    <div class="infos-bloc">
      <div class="logo">
        <img :src="restaurant.logo" alt="logo" />
      </div>
      <div class="cordinates">
        <p>{{ restaurant.infos.adress }}</p>
        <p>{{ restaurant.infos.city }}</p>
        <p>{{ restaurant.infos.email }}</p>
        <p>{{ restaurant.infos.phone }}</p>
      </div>
      <div class="distinctions" v-if="restaurant.infos.distinctions">
        <div class="michelin" v-if="restaurant.infos.distinctions.michelin">
          <SvgoRestaurantsIconMichelin />
          <SvgoRestaurantsIconMichelin />
        </div>
        <div class="gaultmillau" v-if="restaurant.infos.distinctions.gaultmillau">
          <SvgoRestaurantsIconGaultMillau />
        </div>
      </div>
      <div class="button-container">
        <RestaurantRoundButton v-if="restaurant.infos.menu" label="Menu" :link="restaurant.infos.menu">
          <SvgoRestaurantsIconMenu />
        </RestaurantRoundButton>
        <RestaurantRoundButton v-if="restaurant.infos.drink" label="Boissons" :link="restaurant.infos.drink">
          <SvgoRestaurantsIconBrochure />
        </RestaurantRoundButton>
        <RestaurantRoundButton v-if="restaurant.infos.wine" label="Vins" :link="restaurant.infos.wine">
          <SvgoRestaurantsIconWine />
        </RestaurantRoundButton>
        <RestaurantRoundButton v-if="restaurant.infos.booking" label="Réservations" :link="restaurant.infos.booking">
          <SvgoRestaurantsIconCalendar />
        </RestaurantRoundButton>
        <RestaurantRoundButton v-if="restaurant.infos.gift" label="Bon cadeau" :link="restaurant.infos.gift">
          <SvgoRestaurantsIconGift />
        </RestaurantRoundButton>
      </div>
      <div class="pratical-infos">
        <h4 class="pratical-infos-title">Informations pratiques</h4>
        <div class="pratical-infos-section" v-if="restaurant.infos.textInfos.hourly">
          <div class="pratical-infos-subtitle"> Horaires </div>
          <p>{{ restaurant.infos.textInfos.hourly }}</p>
        </div>
        <div class="pratical-infos-section" v-if="restaurant.infos.textInfos.complement">
          <p> {{ restaurant.infos.textInfos.complement }}</p>
        </div>
      </div>
    </div>
    <div class="text">
      <div class="paragraph-container" v-for="section in restaurant.description" :key="section">
        <h4 class="paragraph-title" v-if="section.title">{{ section.title }}</h4>
        <div v-for="content in section.content" :key="content.paragraph">
          <p class="paragraph">{{ content.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="images-grid">
    <NuxtImg v-for="img in restaurant.imgs" :key="img" :src="`/restaurants/${img}`" :alt="restaurant.name"
      sizes="xs:80vw md:45vw lg:30vw"></NuxtImg>
  </div>

  <HomepageAgenda />

    <Newsletter />
</template>

<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';


const restaurant = ref({
  id: 1,
  name: 'PIC au Beau-Rivage Palace',
  logo: "https://www.brp.ch/fileadmin/_processed_/4/9/csm_Logo_PIC_BRP_b1897aeb85.png",
  infos: {
    adress: "Chemin de Beau-Rivage 21",
    city: "CH - 1006 Lausanne",
    email: "pic@brp.ch",
    phone: "T. +41 21 613 33 39",
    distinctions: {
      michelin: true,
      gaultmillau: true
    },
    menu: "https://www.brp.ch/fileadmin/documents/brp.ch/pdf/Menus_Restaurants/PIC_au_Beau-Rivage_Palace/PIC_BeauRivagePalace_Menu_FR.pdf",
    drink: "https://www.brp.ch/fileadmin/documents/brp.ch/pdf/Menus_Restaurants/PIC_au_Beau-Rivage_Palace/PIC_BeauRivagePalace_BoissonsCreatives_FR.pdf",
    wine: "https://www.brp.ch/fileadmin/documents/brp.ch/pdf/Menus_Restaurants/PIC_au_Beau-Rivage_Palace/PIC_BeauRivagePalace_cartedesvins.pdf",
    booking: "https://www.brp.ch/restaurants-bars/pic-au-beau-rivage-palace/reservations/",
    gift: "https://shop.e-guma.ch/brp/fr/bons-cadeaux/45538/pic-au-beau-rivage-palace?_gl=1*q7mds7*_gcl_au*OTE1MzQ0NDgwLjE3MzY4ODUxMTQ.*_ga*NjU4MDMzNzg1LjE3MzY4ODUxMTM.*_ga_8DJ87WBL93*MTczNzEwMDQ0MS40LjEuMTczNzExMjk2My40Ny4wLjEzMDM2NTMxOTA.",
    textInfos: {
      hourly: "Du mardi au samedi : de 12h00 à 13h30 et de 18h30 à 21h30 Fermé dimanche et lundi",
      complement: "Le parking de l'hôtel est disponible et offert à la clientèle du restaurant. Terrasse ouverte lors des jours de beau temps. Tenue correcte exigée. Chiens non admis."
    }
  },
  description: [
    {
      title: "Le nouvel écrin d'Anne-Sophie Pic",
      content: [
        {
          paragraph: "L’univers d’Anne-Sophie Pic au Beau-Rivage Palace à Lausanne, c’est bien plus qu’un restaurant, c’est un cheminement en terres helvétiques qui dure depuis 15 ans ! 15 ans de rencontres, de création, de dégustation, de cueillettes en forêt, de contemplation..."
        },
        {
          paragraph: "Dans les carnets qui ne la quittent jamais, la Cheffe trace les contours d’une précieuse mémoire, dessinée comme un chemin méticuleusement balisé. La Suisse est l’un de ses terroirs favoris, tant il nourrit son esprit et l’inspire. Elle y puise aussi la tendresse de l’enfance, qu’elle connut lors des retrouvailles familiales en terres vaudoises, et qu’elle aimait tant."
        },
        {
          paragraph: "Le nouvel écrin PIC au Beau-Rivage Palace à Lausanne a été imaginé et façonné par la Cheffe dans le prolongement de sa philosophie culinaire. Sous la direction de l’architecte Tristan Auer, le restaurant se fait aussi chemin, combinant des espaces aux promesses complémentaires."
        },
        {
          paragraph: "De ces producteurs et artisans suisses, Anne-Sophie Pic en a confié tous les secrets à son Chef Jordan Theurillat, qui lui est fidèle depuis plus de 10 ans dont 5 ans passés à Lausanne.  Dominique Peretti issu lui aussi de la maison Pic sera en charge des accords et de la magnifique carte des vins.  Enfin, en salle, Diane Blanch, directrice du restaurant lausannois depuis 2021, inscrit l’expérience lausannoise au cœur des valeurs d’Anne-Sophie Pic."
        },
        {
          paragraph: "Les deux maisons qui ont lié leur destin il y a 15 ans, se réjouissent de cette nouvelle page à écrire ensemble, au service des valeurs de la Belle Hôtellerie et de la préservation des savoir-faire d’excellence."
        }
      ]
    },
    {
      title: "Midi chez PIC",
      content: [
        { paragraph: "J’ai imaginé le menu ViaRhôna en 3 séquences pour les repas d’affaires ou les rendez-vous entre amis, servi en une heure et demie et accordé de boissons créatives avec ou sans alcool." },
        { paragraph: "Salle à manger, grande table, terrasse ou bar, le nouvel écrin de Pic au Beau-Rivage Palace fera des vos invitations des moments hors du temps en peu de temps." }
      ]
    },
    {
      content: [
        { paragraph: "Valable les midis du mardi au vendredi" },
        { paragraph: "Menu dès CHF 160.- hors boissons" },
        { paragraph: "Parking offert" }
      ]
    }
  ],
  imgs: [
    "01-01.webp", "01-02.jpg", "01-03.jpg"
  ]
})
</script>

<style scoped>
.logo {
  width: 15rem;
}

.cordinates {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.restaurant-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.infos-bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--cararra);
  width: 100%;
  height: auto;
}

.distinctions {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.michelin {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.michelin svg {
  width: 3rem;
  height: auto;
  fill: #a51935;
}

.gaultmillau svg {
  width: 3rem;
  height: auto;
  fill: #f9b233;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.pratical-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--cararra);
  width: 100%;
  height: auto;
}

.pratical-infos-section {
  margin-top: 1rem;
}

.pratical-infos-subtitle {
  font-family: var(--antarctica-semibold);
}

.text {
  padding: 10%;
}

.paragraph-container:first-of-type .paragraph-title {
  border-top: none;
  /* Supprime le filet au-dessus du premier titre */
  padding-top: 0;
  /* Supprime l'espace */
  margin-top: 0;
  /* Supprime le décalage */
}


.paragraph-title {
  margin-top: 2rem;
  /* Espace sous chaque paragraphe */
  padding-top: 2rem;
  /* Espace pour la séparation */
  border-top: 1px solid #ccc;
  /* Filet de séparation */
}


.paragraph {
  margin-bottom: 1rem;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 colonnes par défaut pour les grands écrans */
  gap: 2rem;
  /* Espacement entre les images */
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 10%;
  padding-right: 10%;
}

.images-grid img {
  width: 100%;
  /* Les images occupent toute la largeur de leur conteneur */
  aspect-ratio: 1.5;
  /* Ratio largeur/hauteur de 1.5 */
  object-fit: cover;
  /* Les images sont coupées pour s'adapter */
}

/* Responsive - 2 colonnes pour les écrans moyens */
@media (max-width: 1024px) {
  .restaurant-container {
    flex-direction: column;
  }

  .images-grid {
    grid-template-columns: repeat(2, 1fr);
    /* Passe à 2 colonnes */
  }
}

/* Responsive - 1 colonne pour les petits écrans */
@media (max-width: 767px) {
  .images-grid {
    grid-template-columns: 1fr;
    /* Passe à 1 colonne */
  }
}
</style>