<template>
  <h2 class="secondTitle">{{ title }}</h2>
</template>

<script setup>
const { title } = defineProps(['title']);
</script>

<style scoped>
.secondTitle {
  font-family: 'CormorantGaramond-Medium';
  font-size: 51px;
  color: var(--brown-fourdary);
}

@media (max-width: 767px) {
  .secondTitle {
    font-size: 45px;
  }
}

@media (max-width: 479px) {
  .secondTitle {
    font-size: 32px;
  }
}
</style>
