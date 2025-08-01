<template>
  <section class="about" id="about">
    <!-- Блок с титлом и текстами -->
    <div class="about__container">
      <PageAppSecondTitle title="Ювелирный бренд MADDE" class="about__title" />
      <div class="about__textBox">
        <PageAppParagraph class="about__text"
          >Компания работает на российском рынке с 2008 года. Мы предлагаем
          оптом широкий ассортимент ювелирных украшений из
          серебра.</PageAppParagraph
        >
        <PageAppParagraph class="about__text"
          >Madde тесно сотрудничает с итальянскими фабриками, расположенными в
          самом сердце итальянской ювелирной отрасли — городе
          Ареццо.</PageAppParagraph
        >
        <PageAppParagraph class="about__text"
          >В коллаборации с итальянскими брендами прорабатываются не только
          производственные и эстетические особенности будущих украшений, но и
          учитывается специфика российского рынка. В симбиозе этих обсуждений
          рождаются новые идеи, а затем и сами Коллекции
          MADDE.</PageAppParagraph
        >
      </div>
    </div>

    <!-- Карусель с меняющимися картинками. В десктопе как бекграунд под текстом. В мобильной версии, отдельным блоком -->
    <div class="about__embla">
      <EmblaAppFadeCarousel :data="aboutPhoto" />
    </div>
  </section>
</template>

<script setup>
import { aboutPhoto } from '@/mock/about-photo';
</script>

<style scoped>
.about {
  position: relative;
  height: 800px;
}
.about__embla {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
}
.about__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-width: 1440px;
  margin: 0 auto;
}
.about__text {
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
  .about {
    height: min-content;
  }
  .about__embla {
    position: relative;
  }
  .about__container {
    justify-content: flex-start;
    gap: 20px;
    background: none;
    height: min-content;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
  }
  .about__title {
    color: var(--brown-fourdary);
  }
  .about__textBox {
    gap: 20px;
  }
  .about__text {
    font-size: 18px;
    color: var(--brown-fourdary);
  }
}
</style>
