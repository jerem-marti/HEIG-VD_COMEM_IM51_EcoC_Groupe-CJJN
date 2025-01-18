<template>
  <div class="newsletter">
    <div class="contact">
      <h4>Gardons le contact</h4>
      <p>Abonnez-vous à la newsletter et ne manquez plus les dernières nouvelles !</p>
      <form @submit.prevent="subscribe" class="newsletter-form">
        <input type="email" v-model="email" placeholder="Entrez votre email" class="newsletter-input" required />
        <Button msg="S'abonner" color-inverted="true" @click="subscribe" />
      </form>
    </div>
    <div class="social-media">
      <p>Suivez-nous sur</p>
      <div class="icon-container">
        <a href="https://www.facebook.com/beaurivagepalace">
          <SvgoSocialMediaFacebook />
        </a>
        <a href="https://www.instagram.com/beaurivagepalace/">
          <SvgoSocialMediaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/beau-rivage-palace-lausanne/">
          <SvgoSocialMediaLinkedin />
        </a>
        <a href="https://www.youtube.com/user/beaurivagelausanne">
          <SvgoSocialMediaYoutube />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const subscribe = () => {
  if (email.value) {
    alert(`Merci de vous être abonné avec l'email : ${email.value}`);
    email.value = "";
  }
};
</script>

<style scoped>
.newsletter {
  display: flex;
  flex-direction: column;
  background-color: var(--peach-yellow);
  padding: 2rem;
  width: 80%;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 10%;
  margin-right: 10%;
}

form {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-top: 1rem;
}

input {
  height: 2.5rem;
  width: 100%;
  padding-left: 1rem;
}

input:focus {
  outline: none;
  border: 1px solid var(--woodsmoke)
}

.social-media {
  margin-top: 1rem;
}

.icon-container {
  display: flex;
  margin-top: 0.2rem;
  gap: 0.8rem;
  align-items: center;
}

svg {
  width: 1.3rem;
  height: auto;
}

@media (max-width: 767px) {
  form {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
}
</style>