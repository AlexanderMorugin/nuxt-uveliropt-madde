<template>
  <div class="mainImage">
    <img
      width="100%"
      height="800"
      fetchpriority="high"
      :src="image"
      alt="Подложка"
      class="mainImage__item"
    />
  </div>
</template>

<script setup>
const { image } = defineProps(['image']);
</script>

<style scoped>
.mainImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
}
.mainImage__item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

@media (max-width: 767px) {
  .mainImage {
    height: 700px;
  }
}
</style>
