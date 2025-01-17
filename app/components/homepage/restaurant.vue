<script setup>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="offset-lg-2 col-xl-6 offset-xl-3">
                <h2>Pic au Beau-Rivage</h2>
            </div>
        </div>
        <div class="row restaurant__row">
            <div class="col-lg-4 offset-lg-2">
                <div class="restaurant__imgContainer">
                    <NuxtImg 
                        src="anne-sophie-pic.jpg" 
                        alt="Anne Sophie Pic, Cheffe au Beau Rivage Palace"
                        sizes="xs:100vw sm:100vw md:100vw lg:33vw"
                    ></NuxtImg>
                    <NuxtImg 
                        src="posteraized/anne-sophie-pic-posteraized.png" 
                        alt="Anne Sophie Pic, Cheffe au Beau Rivage Palace"
                        sizes="xs:100vw sm:100vw md:100vw lg:33vw"
                        quality="20"
                        blur="5"
                    ></NuxtImg>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="restaurant__content">
                    <h3>Le nouvel écrin d'Anne-Sophie Pic</h3>
                    <p>L’univers d’Anne-Sophie Pic au Beau-Rivage Palace à Lausanne, c’est bien plus qu’un restaurant,
                        c’est un cheminement en terres helvétiques qui dure depuis 15 ans ! 15 ans de rencontres, de
                        création, de dégustation, de cueillettes en forêt, de contemplation...</p>
                    <LinkButton msg="Miam miam" path="#" />
                    <h3>Informations pratiques</h3>
                    <ul>
                        <li>Du mardi au samedi : de 12h00 à 13h30 et de 19h00 à 21h30</li>
                        <li>Fermé dimanche et lundi</li>
                        <li>Le parking de l'hôtel est disponible et offert à la clientèle du restaurant.</li>
                        <li>Terrasse ouverte lors des jours de beau temps.</li>
                        <li>Chiens non admis.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.restaurant {
    &__row {
        position: relative;
        background: var(--cararra);
       
        @media (min-width: 992px) {
            margin-top: 3rem;
            margin-bottom: 3rem;
        }

        &::before {
            content: '';
            background-image: url('@/assets/icons/hero/background-hexagon.svg');
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-position: 0 0;

            @media (min-width: 1200) {
                background-position: 350% 0;
            }
        }
    }

    &__imgContainer {
       
        margin-bottom: 1rem;

        @media (min-width: 992px) {
            margin-top: -3rem;
            margin-bottom: -3rem;

        }
    }

    &__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 500px;

    }
}

.bg-svg {
    position: absolute;
    top: -3rem;
    left: 0;
}
</style>