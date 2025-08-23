<template>
  <div class="mainImage">
    <div class="mainImage__imageDesktop" />
    <!-- Изображение для мобилки -->
    <!-- <img
      width="100%"
      height="700"
      loading="lazy"
      src="/images/img-01-mobile.webp"
      alt="Подложка"
      class="mainImage__imageMobile"
    /> -->

    <!-- Изображение для десктопа -->
    <!-- <img
      width="100%"
      height="800"
      loading="lazy"
      src="/images/img-01-desktop.webp"
      alt="Подложка"
      class="mainImage__imageDesktop"
    /> -->
  </div>
</template>

<script setup>
// import DesktopImage from '/images/img-01-desktop.webp';
// import MobileImage from '/images/img-01-mobile.webp';
// const { desktopImage, mobileImage } = defineProps([
//   'desktopImage',
//   'mobileImage',
// ]);
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
  height: 100%;
  background-image: url('/images/img-01-desktop.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
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
    /* display: none; */
    background-position: top right -200px;
  }
  /* .mainImage__imageMobile {
    display: block;
  } */
}
</style>
