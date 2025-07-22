<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script setup>
const { title } = defineProps(['title']);
</script>

<style scoped>
.title {
  font-family: 'CormorantGaramond-Medium';
  font-size: 48px;
  color: black;
}
</style>
