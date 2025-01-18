<script setup>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h2>Le Beau Rivage</h2>
                <p>Depuis 1861, le Beau-Rivage Palace prouve que tradition et innovation, tout comme héritage et
                    modernité,
                    sont des valeurs complémentaires. Cet ambassadeur de la plus haute tradition hôtelière
                    suisse fait partie
                    du patrimoine d’un pays où l’accueil atteint l’excellence.
                </p>
                <NuxtImg 
                    src="brp-ext.webp"
                    alt="Photo aérienne du Beau Rivage Palace"
                    sizes="xs:100vw sm:510 md:690"
                ></NuxtImg>
                <span class="source">Image : carter.eu</span>
                <LinkButton msg="Découvrir l'histoire du Beau Rivage" path="#" />
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    margin: 0.5rem 0 0 0;
}
.source {
    display: block;
    font-size: 0.5rem;
    color: var(--gray);
    margin-left: auto;
}
</style>