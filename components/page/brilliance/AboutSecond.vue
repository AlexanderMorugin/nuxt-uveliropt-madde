<template>
  <div class="brillianceAboutSecond__textBox">
    <PageBrillianceCollectionName
      name="Brilliance"
      class="brillianceAboutSecond__name"
    />
    <span class="brillianceAboutSecond__nameMiddle">манящие...</span>
    <span class="brillianceAboutSecond__nameBottom">ГРАНИ</span>
    <p class="brillianceAboutSecond__text page-screen text-monserat-accent">
      Украшения коллекции Brilliance представляют собой классические
      &laquo;бриллиантовые&raquo; модели, выполненные в серебре и со вставками
      кубического циркония (CZ).
    </p>
  </div>
</template>

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
  font-family: 'CormorantGaramond-SemiBold', sans-serif;
  font-size: 54px;
  color: var(--black-primary);
}
.brillianceAboutSecond__nameBottom {
  position: absolute;
  top: 220px;
  left: 60px;
  font-family: 'CormorantGaramond-SemiBold', sans-serif;
  font-size: 64px;
  color: var(--grey-dark-secondary);
}
.brillianceAboutSecond__text {
  color: var(--white-primary);
  padding-top: 495px;
  padding-bottom: 40px;
}

@media (max-width: 767px) {
  .brillianceAboutSecond__text {
    padding-top: 495px;
    padding-bottom: 20px;
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
}
</style>
