<template>
    <ThePageHero title="Spa Guerlain" :bgSvgUrlEncode="BackgroundHexagon" />
    <SpaGuerlainNavSpas />
        <div class="abos-soins">
            <SpaGuerlainInfosSpas />
            <h2>Abonnements de soins</h2>
            <p>Notre abonnement vous donne un accès privilégié au Spa Guerlain du Beau-Rivage Palace. En créant votre
                compte, bénéficiez de tous les avantages réservés à nos abonnés : des tarifs préférentiels sur les soins
                et les produits ainsi que des accès aux installations du spa pour prolonger votre soin d’un grand moment
                de bien-être.</p>
            <div class="abos-container">
                <div class="abo-card">
                    <p class="abo-title">Abonnement Expérience </p>
                    <ul class="abo-infos">
                        <li>10% de réduction sur les soins</li>
                        <li>5% de réduction sur les produits Guerlain
                        </li>
                        <li>3 accès spa offerts</li>
                    </ul>
                    <p class="abo-price">CHF 2'025.-</p>
                </div>
                <div class="abo-card">
                    <p class="abo-title">Abonnement Céleste
                    </p>
                    <ul class="abo-infos">
                        <li>20% de réduction sur les soins</li>
                        <li>10% de réduction sur les produits Guerlain
                        </li>
                        <li>7 accès spa offerts</li>
                        <li>1 soin LED offert </li>
                    </ul>
                    <p class="abo-price">CHF 3600.-</p>
                </div>
            </div>
            <Newsletter class="newsletter" />
        </div>
</template>



<script setup>
import BackgroundHexagon from '~/assets/icons/hero/background-hexagon.svg?url_encode';

</script>

<style scoped>
.abos-soins {
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

.abos-container {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.abo-card {
    display: flex;
    flex-direction: column;
    background-color: var(--cararra);
    padding: 2rem;
    width: 100%;
    justify-content: space-around;
}

.abo-title {
    font-family: var(--antarctica-semibold);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.abo-price {
    font-family: var(--antarctica-semibold);
    justify-self: flex-end;
}

@media (max-width: 1024px) {
    .abos-container {
        flex-direction: column;
        gap: 2rem;
    }
}


.newsletter {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}

</style>