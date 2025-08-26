<template>
  <!-- Блок с титлом и текстами -->
  <div class="about__container flex-column-center">
    <PageAppSecondTitle title="Ювелирный бренд MADDE" class="about__title" />
    <div class="about__textBox">
      <p class="about__text">
        Компания работает на российском рынке с 2008 года. Мы предлагаем оптом
        широкий ассортимент ювелирных украшений из серебра.
      </p>
      <p class="about__text">
        Madde тесно сотрудничает с итальянскими фабриками, расположенными в
        самом сердце итальянской ювелирной отрасли — городе Ареццо.
      </p>
      <p class="about__text">
        В коллаборации с итальянскими брендами прорабатываются не только
        производственные и эстетические особенности будущих украшений, но и
        учитывается специфика российского рынка. В симбиозе этих обсуждений
        рождаются новые идеи, а затем и сами Коллекции MADDE.
      </p>
    </div>
  </div>

  <!-- Карусель с меняющимися картинками. В десктопе как бекграунд под текстом. В мобильной версии, отдельным блоком -->
  <div class="about__embla">
    <LazyEmblaAppFadeCarousel :data="aboutPhoto" />
  </div>
</template>

<script setup>
const { data: aboutPhoto } = await useFetch('/api/about/about-photo');
</script>

<style scoped>
.about__embla {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
}
.about__container {
  position: relative;
  gap: 60px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
  padding-right: 20px;
  z-index: 20;
}
.about__title {
  display: flex;
  color: var(--white-primary);
}
.about__textBox {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: var(--screen-xl);
  margin: 0 auto;
}
.about__text {
  font-family: 'Montserrat-Regular', sans-serif;
  line-height: 1.5;
  font-size: 24px;
  color: var(--white-primary);
}

@media (max-width: 1023px) {
  .about__container {
    grid-template-columns: 1fr;
  }
  .about__title {
    justify-self: center;
  }
  .about__text {
    font-size: 20px;
  }
}

@media (max-width: 767px) {
  .about__embla {
    position: static;
    padding-top: 60px;
  }
  .about__container {
    justify-content: flex-start;
    gap: 20px;
    background: none;
    height: min-content;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0;
  }
  .about__title {
    color: var(--brown-secondary);
  }
  .about__textBox {
    gap: 20px;
  }
  .about__text {
    font-size: 18px;
    color: var(--brown-secondary);
  }
}
</style>
