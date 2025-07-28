<template>
  <section class="about">
    <!-- Меняющиеся картинки в виде бекграунда -->
    <EmblaAppAboutCarousel />

    <!-- Блок с титлом и текстами -->
    <div class="about__container">
      <PageAppSecondTitle
        title="Ювелирный бренд MADDE"
        class="about__title"
        position="left"
      />
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
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  position: relative;
  
}
.about__container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 60%;
  column-gap: 80px;
  row-gap: 40px;
  width: 100%;
  max-width: 1440px;
  height: 640px;
  background: rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  padding-top: 20px;
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
  gap: 20px;
}
.about__text {
  color: var(--white-primary);
}

@media (max-width: 1023px) {
  .about__container {
    grid-template-columns: 1fr;
  }
  .about__title {
    justify-self: center;
  }
}

@media (max-width: 767px) {
  .about__container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
