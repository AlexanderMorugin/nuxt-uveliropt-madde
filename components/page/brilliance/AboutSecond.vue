<template>
  <div class="brillianceAboutSecond__textBox">
    <PageBrillianceCollectionName
      name="Brilliance"
      class="brillianceAboutSecond__name"
    />
    <span class="brillianceAboutSecond__nameMiddle">манящие...</span>
    <span class="brillianceAboutSecond__nameBottom">ГРАНИ</span>
    <p class="brillianceAboutSecond__text">
      Украшения коллекции Brilliance представляют собой классические
      &laquo;бриллиантовые&raquo; модели, выполненные в серебре и со вставками
      кубического циркония (CZ).
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.brillianceAboutSecond__textBox {
  position: relative;
  background: linear-gradient(transparent 50%, var(--brown-secondary));
}
.brillianceAboutSecond__name {
  position: absolute;
  top: 120px;
  left: 260px;
}
.brillianceAboutSecond__nameMiddle {
  position: absolute;
  top: 170px;
  left: 130px;
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 54px;
  color: var(--black-primary);
}
.brillianceAboutSecond__nameBottom {
  position: absolute;
  top: 220px;
  left: 60px;
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 64px;
  color: var(--grey-dark-secondary);
}
.brillianceAboutSecond__text {
  width: 100%;
  max-width: 1440px;
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 24px;
  color: var(--white-primary);
  padding: 495px 20px 40px 20px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .brillianceAboutSecond__text {
    font-size: 18px;
    padding: 0 10px 20px 10px;
  }
  .brillianceAboutSecond__name {
    top: 310px;
    left: auto;
    right: 10px;
  }
  .brillianceAboutSecond__nameMiddle {
    top: 370px;
    left: auto;
    right: 10px;
    color: var(--white-primary);
    font-size: 40px;
    text-shadow: 1px 0 20px var(--brown-secondary),
      0 1px 20px var(--brown-secondary), -1px 0 20px var(--brown-secondary),
      0 -1px 20px var(--brown-secondary);
  }
  .brillianceAboutSecond__nameBottom {
    top: 410px;
    left: auto;
    right: 10px;
    font-size: 51px;
    color: var(--white-secondary);
  }
  .brillianceAboutSecond__text {
    padding-top: 495px;
  }
}
</style>
