<template>
  <div class="brillianceAbout__background">
    <!-- Блок с титлом и текстами -->
    <!-- <div class="brillianceAbout__container"> -->
    <div class="brillianceAbout__textBox">
      <PageAppSecondTitle title="О коллекции" class="brillianceAbout__title" />

      <PageBrillianceCollectionName
        name="Brilliance"
        class="brillianceAbout__name"
      />

      <p class="brillianceAbout__text">
        Коллекция Brilliance от MADDE – это бриллиантовая классика, воплощенная
        в серебре со вставками кубического циркония (CZ). Концепция коллекций -
        достигнуть максимального сходства с бриллиантовыми моделями из белого
        золота.
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup></script>

<style scoped>
.brillianceAbout__background {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-01.webp');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}
/* .brillianceAbout__container {
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;
} */
.brillianceAbout__textBox {
  /* position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  max-width: 620px; */
  /* background: rgba(255, 255, 255, 0.6); */
  /* border-radius: 15px; */
  /* padding: 20px; */
  position: relative;
  /* display: flex; */
  /* align-items: flex-start; */
  background: linear-gradient(transparent 50%, var(--brown-secondary));
}
.brillianceAbout__title {
  /* color: var(--black-primary); */
  /* padding: 0; */
  position: absolute;
  top: 310px;
  right: 130px;
  /* font-family: 'CormorantGaramond-SemiBold';
  font-size: 54px; */

  color: var(--black-primary);
}
.brillianceAbout__name {
  position: absolute;
  top: 350px;
  right: 260px;
  font-size: 82px;
  text-shadow: rgba(52, 58, 63, 0.5) 1px 2px 0;
}
.brillianceAbout__text {
  /* font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 24px;
  color: var(--black-primary); */
  width: 100%;
  max-width: 1440px;
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 24px;
  color: var(--white-primary);
  padding: 495px 20px 40px 20px;
  margin: 0 auto;
}

@media (max-width: 1279px) {
  .brillianceAbout__title {
    right: 40px;
  }
  .brillianceAbout__name {
    right: 160px;
  }
}

@media (max-width: 767px) {
  .brillianceAbout__textBox {
    background: linear-gradient(transparent 40%, var(--brown-secondary));
  }
  .brillianceAbout__title {
    top: 370px;
    left: 0;
    right: 0;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    color: var(--white-primary);
  }
  .brillianceAbout__name {
    top: 400px;
    left: 0;
    right: 0;
    width: fit-content;
    /* равномерное распределение отступов */
    margin-left: auto;
    margin-right: auto;

    font-size: 64px;
  }
  /* .brillianceAbout__textBox {
    align-items: center;
    gap: 320px;
    max-width: 100%;
    background: none;
    border-radius: 0;
    padding: 40px 10px;
  } */
  /* .brillianceAbout__title {
    color: var(--white-primary);
    text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary);
  } */
  .brillianceAbout__text {
    font-size: 18px;
        padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    /* color: var(--white-primary);
    text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary); */
  }
  /* .brillianceAbout__name {
    position: absolute;
    right: auto;
    left: 10px;
  } */
}
</style>
