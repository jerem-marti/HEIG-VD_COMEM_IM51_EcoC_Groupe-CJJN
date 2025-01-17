<script setup>
</script>

<template>
    <div class="container">
        <h2>Chambres et suites</h2>
        <div class="row">
            <div class="col-lg-6">
                <div class="item">
                    <NuxtImg src="beau-rivage-paysage.jpg" alt="" class="item__img" height="496px"></NuxtImg>
                    <div class="item__content">
                        <h3>Chambres</h3>
                        <h4>Découvrez nos Chambres Élégantes</h4>
                        <p>Profitez d’un séjour confortable dans des chambres modernes et chaleureuses, pensées
                            pour votre détente et votre bien-être.
                        </p>
                        <ul>
                            <li>Vue sur le lac ou le parc</li>
                            <li>Superficie de 25 à 30 m²</li>
                            <li>1 lit king-size ou 2 lits jumeaux</li>
                        </ul>
                        <a href="#">Voir les chambres</a>
                    </div>                    
                </div>
            </div>

            <div class="col-lg-6">
                <div class="item">
                    <NuxtImg src="beau-rivage-paysage.jpg" alt="" class="item__img" height="496px"></NuxtImg>
                    <div class="item__content">
                        <h3>Suites</h3>
                        <h4>Découvrez nos Suites Élégantes</h4>
                        <p>Profitez d’un séjour confortable dans des chambres modernes et chaleureuses, pensées
                            pour votre détente et votre bien-être.
                        </p>
                        <ul>
                            <li>Vue sur le lac ou le parc</li>
                            <li>Superficie de 25 à 30 m²</li>
                            <li>1 lit king-size ou 2 lits jumeaux</li>
                        </ul>
                        <a href="#">Voir les chambres</a>
                    </div>                    
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.item {
    position: relative;
    margin-bottom: 1rem;
    background: var(--cararra);
    height: 100%;
    min-height: 400px;
    display: flex;
    gap: 1rem;

    &::after {
        content: '';
        position: absolute;
        top: 1rem;
        left: -1rem;
        width: 100%;
        height: 100%;
        background-image: url('@/assets/icons/hero/background-waves.svg');
        z-index: -1;
    }

    &__img {
        max-width: calc(100% / 3);
        // height: 100%;
        object-fit: cover;
    }

    &__content {
        padding: 1rem;
    }

    .bg-svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: -1;
    }

}

@media (max-width: 997px) {
    .row {
        gap: 2rem;
    }
}
</style>