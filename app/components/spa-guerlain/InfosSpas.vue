<template>
    <div class="logos-container">
        <div class="infos-bloc">
            <div class="logo">
                <NuxtImg class="img" src="guerlain-logo.png" sizes="xs:80vw md:45vw lg:30vw"></NuxtImg>
            </div>
            <div class="contact">
                <p>T. +41 21 613 33 67</p>
                <p>E. <a class="link" href="mailto:spa(at)brp.ch">
                        spa(at)brp.ch</a></p>
            </div>
        </div>
        <div class="button-container">
            <RoundButton backgroundColor="var(--cararra)" :label="props.label1"
                :link="props.link1">
                <SvgoRestaurantsIconBrochure />
            </RoundButton>
            <RoundButton backgroundColor="var(--cararra)" :label="props.label2"
                :link="props.link2">
                <SvgoRestaurantsIconCalendar />
            </RoundButton>
            <RoundButton backgroundColor="var(--cararra)" :label="props.label3"
                :link="props.link3">
                <SvgoRestaurantsIconGift />
            </RoundButton>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    label1: { type: String, default:"Brochure" },
    link1: { type: String, default:"" },
    label2: { type: String, default:"Réservation" },
    link2: { type: String, default:"" },
    label3: { type: String, default:"Bon cadeau" },
    link3: { type: String, default:"" },
})

</script>

<style scoped>
.logos-container {
    background-color: var(--whitesmoke);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
}

.infos-bloc {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 2rem;
    padding-right: 5rem;
}

img {
    width: 10rem;
}

.button-container {
    display: flex;
    gap: 5rem;
}

svg {
    width: 100%;
    height: auto;
}


p {
    margin-bottom: 1rem
}

.link {
    text-decoration: underline;
}


@media (max-width: 1024px) {
    .logos-container {
        flex-direction: column;
    }

    .button-container {
        margin-top: 2rem;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
}
</style>