<script setup>
</script>

<template>
    <footer>
        <div>
            <div class="footer-adress">
                <p>Hôtel Beau-Rivage Palace<br>Chemin de Beau-Rivage 21<br>1006 Lausanne</p>
                <div>
                    <a href="tel:+41216133333">+41 21 613 33 33</a>
                    <a href="mailto:info@brp.ch">info@brp.ch</a>
                </div>
            </div>
            <div class="footer-vertical-line-separator footer-mobile"></div>
            <div class="footer-labels">
                <SvgoLogoLeadersClub class="footer-label" />
                <SvgoLogoLeadingHotels class="footer-label" />
                <SvgoLogoSwissDeluxeHotels class="footer-label" />
                <SvgoLogoSwisstainable class="footer-label" />
            </div>
        </div>
        <div>
            <div class="footer-vertical-line-separator"></div>
        </div>
        <div>
            <div class="footer-foundation-logo">
                <SvgoLogoFondationSandoz class="footer-foundation-logo" />
            </div>
            <div class="footer-foundation-hotels-links">
                <a href="https://www.lausanne-palace.ch/">Lausanne Palace</a>
                <a href="https://www.angleterre-residence.ch/">Angleterre & Résidence</a>
                <a href="https://www.chateaudouchy.ch/">Château d'Ouchy</a>
                <a href="https://www.palafitte.ch/">Hôtel Palafitte</a>
                <a href="https://www.riffelalp.com/">Riffelalp 2222m</a>
            </div>
        </div>
        <div>
            <div class="footer-vertical-line-separator"></div>
        </div>
        <div>
            <div class="footer-menu">
                <a class="legend" href="#">Galerie</a>
                <a class="legend" href="#">Carrière</a>
                <a class="legend" href="#">Le développement durable</a>
                <a class="legend" href="#">Presse</a>
                <a class="legend" href="#">Finance</a>
                <a class="legend" href="#">Plan du site</a>
                <a class="legend" href="#">Impressum</a>
                <a class="legend" href="#">Politique de confidentialité</a>
                <a class="legend" href="#">Gestion des données</a>
            </div>
            <div class="footer-copyright legend">
                <span>© Beau-Rivage Palace 2024</span>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: var(--cararra);
    display: flex;
    width: 100dvw;
    padding: 0rem 2.5rem;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
}
footer>div {
    display: flex;
    padding: 0.625rem 2.5rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}
.footer-adress {
    display: flex;
    padding: 0.625rem;
    align-items: felx-start;
    gap: 5rem;
    align-self: stretch;
}
.footer-adress a {
    display: block;
}
.footer-labels {
    display: flex;
    padding: 10px 0px;
    align-items: flex-end;
    gap: 40px;
}
.footer-label {
    fill: var(--woodsmoke);
    color: var(--woodsmoke);
    max-width: 9rem;
    width: 20%;
    height: auto;
    aspect-ratio: 9/5;
}
.footer-vertical-line-separator {
    width: 100%;
    height: 1px;
    padding: 0;
    margin: 0;
    background-color: var(--woodsmoke);
    opacity: 0.2;
}
.footer-foundation-logo svg {
    max-width: 18rem;
    width: 50dvw;
    height: auto;
    aspect-ratio: 9/3;
    margin-right: auto;
    margin-left: auto;
}
.footer-foundation-hotels-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem 2rem;
}
.footer-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem 2rem;
}
.footer-mobile {
    display: none;
}

@media (max-width : 1400px) {
    footer {
        padding: 0;
    }
    footer>div {
        flex-direction: column;
        gap: 1.875rem;
    }
    .footer-adress {
        justify-content: center;
    }
    .footer-mobile {
        display: block;
    }
}

@media (max-width : 600px) {
    .footer-adress {
        flex-direction: column;
        gap: 1rem;
    }
    .footer-labels {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20%;
        row-gap: 2rem;
    }
    .footer-label {
        width: 30%;
    }
}

</style>