<script setup>


</script>

<template>
    <NuxtLink to="/chambres-suites/jeremy">Chambres & Suites</NuxtLink>
    <NuxtImg 
        src="/brp.webp"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        densities="x1"
    />
    <!-- 
    sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
    -->

    <!-- screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536 -->
</template>

<style>
img {
  display: block; /* Évite les espaces blancs sous les images */
  width: 100vw; /* Force l'image à occuper 100% de la largeur de la fenêtre */
  height: auto; /* Respecte le ratio d'aspect */
}
</style>