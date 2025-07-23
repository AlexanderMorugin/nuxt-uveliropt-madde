<template>
  <div class="mainImage">
    <!-- Изображение для мобилки от 480 до 320 -->
    <img
      v-if="isScreenSmall"
      src="/images/img-01-desktop.webp"
      alt="Подложка"
      class="mainImage__imageSmall"
    />

    <!-- Изображение для мобилки от 768 до 480 -->
    <img
      v-if="isScreenMedium && !isScreenSmall"
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
import { useResizeSmall } from '@/use/useResizeSmall';

const { isScreenMedium } = useResizeMedium();
const { isScreenSmall } = useResizeSmall();
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
  height: 800px;
  object-fit: cover;
  object-position: right;
}

.mainImage__imageMobile {
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center;
}
.mainImage__imageSmall {
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: top 0 right -250px;
  /* object-position: center; */
}
</style>
