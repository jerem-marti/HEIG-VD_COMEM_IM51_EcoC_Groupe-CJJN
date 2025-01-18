<template>
  <NuxtLink class="card" :style="{ backgroundImage: `url(${mainImg})` }" :to="path">
    <div class="infos">
      <p class="name">{{ name }}</p>
      <p>{{ type }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mainImg: {
    type: String,
    required: true,
  }
});

const path = `/restaurants-bars/${props.id}`;


</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  height: 20rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 1;
}

.infos {
  position: relative;
  z-index: 2;
  color: var(--whitesmoke);
  padding: 1rem;
}

.name {
  font-family: var(--antarctica-semibold);
}

</style>