<template>
  <section class="benefit">
    <!-- Картинка в виде бекграунда -->
    <img
      src="/images/img-benefit.webp"
      alt="Выгоды сотрудничества"
      class="benefit__image"
    />

    <div class="benefit__container"></div>
  </section>
</template>

<style scoped>
.benefit {
  position: relative;
  width: 100%;
  height: 750px;
}
.benefit__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
  object-fit: cover;
  object-position: top;
}
.benefit__container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 20;
  border: 2px solid white;
}

@media (max-width: 767px) {
  .benefit__container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
