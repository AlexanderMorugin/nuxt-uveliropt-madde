<template>
  <div class="mainImage">
    <!-- Изображение для мобилки -->
    <img
      v-if="isScreenMedium"
      src="/images/img-01-mobile.webp"
      alt="Подложка"
      class="mainImage__imageMobile"
    />

    <!-- Изображение для десктопа -->
    <img
      v-if="!isScreenMedium"
      src="/images/img-01-desktop.webp"
      alt="Подложка"
      class="mainImage__imageDesktop"
    />
  </div>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium';

const { isScreenMedium } = useResizeMedium();
</script>

<style scoped>
.mainImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.mainImage__imageDesktop {
  width: 100%;
}

.mainImage__imageMobile {
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center;
}
</style>
