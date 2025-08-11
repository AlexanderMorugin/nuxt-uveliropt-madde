<template>
  <h3 class="collectionName">{{ name }}</h3>
</template>

<script setup>
const { name } = defineProps(['name']);
</script>

<style scoped>
.collectionName {
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 64px;
  color: transparent;
  /* background-image: linear-gradient(
    0.48turn,
    var(--brown-secondary) 0%,
    var(--yellow-primary) 47%
  ); */
      background-image: linear-gradient(
      0.48turn,
      var(--white-primary) 30%,
      var(--yellow-primary) 47%,
      var(--white-primary) 80%
    );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  /* animation: textShine 5s ease-in-out infinite alternate; */
  animation: textShineWhite 5s ease-in-out infinite alternate;
}

@media (max-width: 767px) {
  .collectionName {
    background-image: linear-gradient(
      0.48turn,
      var(--white-primary) 30%,
      var(--yellow-primary) 47%,
      var(--white-primary) 80%
    );
    animation: textShineWhite 5s ease-in-out infinite alternate;
  }
}

/* @keyframes textShine {
  0% {
    text-shadow: none;
    background-position: left top;
  }
  50% {
    text-shadow: 0 0 1px var(--yellow-primary), 0 0 1px var(--yellow-primary),
      0 0 1px var(--yellow-primary), 0 0 10px var(--yellow-primary);
  }
  100% {
    text-shadow: none;
    background-position: right bottom;
  }
} */

@keyframes textShineWhite {
  0% {
    background-position: left top;
  }
  100% {
    background-position: right bottom;
  }
}
</style>
