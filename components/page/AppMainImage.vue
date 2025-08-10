<template>
  <div class="mainImage">
    <!-- Изображение для мобилки -->

    <img

      :src="mobileImage"
      alt="Подложка"
      class="mainImage__imageMobile"
    />

    <!-- Изображение для десктопа -->
    <img

      :src="desktopImage"
      alt="Подложка"
      class="mainImage__imageDesktop"
    />
  </div>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium';

const { desktopImage, mobileImage } = defineProps([
  'desktopImage',
  'mobileImage',
]);

const { isScreenMedium } = useResizeMedium();
</script>

<style scoped>
.mainImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
}
.mainImage__imageDesktop {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
}

.mainImage__imageMobile {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 767px) {
  .mainImage {
    height: 700px;
  }
  .mainImage__imageDesktop {
    display: none;
  }
  .mainImage__imageMobile {
    display: block;
  }
}
</style>
