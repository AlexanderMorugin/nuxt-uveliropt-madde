<template>
  <!-- <h2 :class="['secondTitle', { secondTitle_left: position === 'left' }]">
    {{ title }}
  </h2> -->
  <h2 class="secondTitle">
    {{ title }}
  </h2>
</template>

<script setup>
const { title, position } = defineProps(['title', 'position']);
</script>

<style scoped>
.secondTitle {
  font-family: 'CormorantGaramond-Medium';
  font-size: 51px;
  color: var(--brown-fourdary);
  text-align: center;
}
/* .secondTitle_left {
  text-align: left;
} */

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
