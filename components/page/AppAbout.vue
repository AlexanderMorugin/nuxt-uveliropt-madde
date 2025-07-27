<template>
  <section class="about">
    <PageAppSecondTitle title="Ювелирный бренд MADDE" class="about__title" />
    <div class="about__text">
      <PageAppParagraph
        >Компания работает на российском рынке с 2008 года. Мы предлагаем оптом
        широкий ассортимент ювелирных украшений из серебра.</PageAppParagraph
      >
      <PageAppParagraph
        >Madde тесно сотрудничает с итальянскими фабриками, расположенными в
        самом сердце итальянской ювелирной отрасли — городе
        Ареццо.</PageAppParagraph
      >
      <PageAppParagraph
        >В коллаборации с итальянскими брендами прорабатываются не только
        производственные и эстетические особенности будущих украшений, но и
        учитывается специфика российского рынка. В симбиозе этих обсуждений
        рождаются новые идеи, а затем и сами Коллекции MADDE.</PageAppParagraph
      >
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 60%;
  column-gap: 80px;
  row-gap: 40px;
  width: 100%;
  max-width: 1440px;
  /* height: 666px; */
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  /* border: 1px solid red; */
}
.about__title {
  display: flex;
  /* justify-content: center;  */
}
.about__text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 1023px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about__title {
    justify-self: center;
  }
  /* .about__text {
    padding-left: 20px;
    padding-right: 20px;
  } */
}

@media (max-width: 767px) {
  .about {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
