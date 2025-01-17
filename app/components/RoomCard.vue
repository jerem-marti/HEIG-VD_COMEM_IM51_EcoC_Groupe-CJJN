<template>
  <div class="card-container" :class="[isFlipped ? 'back' : 'front']"
    :style="!isFlipped ? { backgroundImage: `url(${img})` } : {}">
    <h4 :class="[isFlipped ? 'back' : 'front']">{{ name }}</h4>
    <div v-if="isFlipped" class="text-container">
      <div v-if="type === 'room'">
        <p><span class="label">Superficie:</span> {{ area }} m2</p>
        <p><span class="label">Vue:</span> {{ view }}</p>
        <p><span class="label">Exposition:</span> {{ exposure }}</p>
        <p><span class="label">Balcon:</span> {{ balcony ? 'Oui' : 'Non' }}</p>
      </div>
      <div v-if="type === 'suit'" class="text-container">
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <div :class="['button-container', isFlipped ? 'back' : 'front']">
      <div v-if="!isFlipped" class="rotate-icon"></div>
      <LinkButton v-if="!isFlipped" class="info-button" msg="Informations" :path="path" />
      <SvgoRotateIcon :class="['rotate-icon', isFlipped ? 'back' : 'front']" @click="flipCard" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  area: {
    type: Number
  },
  view: {
    type: String
  },
  exposure: {
    type: String
  },
  balcony: {
    type: Boolean,
    default: false,
  }
});

const isFlipped = ref(props.type !== 'room');

function flipCard() {
  isFlipped.value = !isFlipped.value;
}

const path = `/rooms/${props.id}`;

</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  /* aspect-ratio: 5/6; */
  justify-content: space-between;
  background-color: var(--cararra);
  background-size: cover;
  background-position: center;
  height: 25rem;
  width: 100%;
}

h4 {
  font-family: var(--antarctica-semibold);
  font-size: 1.5rem;
}

.card-container .front {
  align-items: center;
  color: var(--whitesmoke);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.card-container .back {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.button-container .info-button {
  text-shadow: none;
}

.rotate-icon {
  cursor: pointer;
  align-self: flex-end;
  fill: var(--woodsmoke);
  width: 2rem;
  height: auto;
  margin: 1rem 0;
}

.back .rotate-icon {
  fill: var(--whitesmoke);
}

.label {
  font-family: var(--antarctica-semibold);
}

.description {
  font-family: var(--antarctica-semibold);
}
</style>