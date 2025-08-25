<template>
  <h2 class="secondTitle">
    {{ title }}
  </h2>
</template>

<script setup>
const { title } = defineProps(['title']);
</script>

<style scoped>
.secondTitle {
  font-family: 'CormorantGaramond-SemiBold', sans-serif;
  font-size: 51px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 767px) {
  .secondTitle {
    line-height: 1.2;
    font-size: 45px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 479px) {
  .secondTitle {
    font-size: 40px;
  }
}
</style>
