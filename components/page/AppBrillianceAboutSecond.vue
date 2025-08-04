<template>
  <section class="brillianceAboutSecond">
    <!-- Блок с титлом и текстами -->
    <div class="brillianceAboutSecond__container">
      <div class="brillianceAboutSecond__textBox">
        <PageAppCollectionName
          name="Brilliance"
          class="brillianceAboutSecond__name"
        />

        <span class="brillianceAboutSecond__nameMiddle">манящие...</span>

        <span class="brillianceAboutSecond__nameBottom">ГРАНИ</span>

        <PageAppParagraph class="brillianceAboutSecond__text"
          >Украшения коллекции Brilliance представляют собой классические
          &laquo;бриллиантовые&raquo; модели, выполненные в серебре и со
          вставками кубического циркония (CZ).</PageAppParagraph
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.brillianceAboutSecond {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-02.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  margin-top: 70px;
}
.brillianceAboutSecond__container {
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;
}
.brillianceAboutSecond__textBox {
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 620px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 20px;
}
.brillianceAboutSecond__name {
  position: absolute;
  top: 0;
  left: 260px;
}
.brillianceAboutSecond__nameMiddle {
  position: absolute;
  top: 50px;
  left: 130px;
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 54px;
  color: var(--black-primary);
}
.brillianceAboutSecond__nameBottom {
  position: absolute;
  top: 100px;
  left: 60px;
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 64px;
  color: var(--grey-dark-secondary);
}
.brillianceAboutSecond__text {
  font-size: 24px;
  color: var(--black-primary);
  padding-top: 195px;
}

@media (max-width: 767px) {
  .brillianceAboutSecond__container {
    padding: 0;
  }
  .brillianceAboutSecond__textBox {
    max-width: 100%;
    background: none;
    border-radius: 0;
    padding: 40px 10px;
  }
  .brillianceAboutSecond__text {
    font-size: 18px;
    color: var(--white-primary);
    text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary);
  }
  .brillianceAboutSecond__name {
    top: 210px;
    left: auto;
    right: 10px;
  }
  .brillianceAboutSecond__nameMiddle {
    top: 270px;
    left: auto;
    right: 10px;
    color: var(--white-primary);
    font-size: 40px;
    text-shadow: 1px 0 20px var(--brown-secondary),
      0 1px 20px var(--brown-secondary), -1px 0 20px var(--brown-secondary),
      0 -1px 20px var(--brown-secondary);
  }
  .brillianceAboutSecond__nameBottom {
    top: 310px;
    left: auto;
    right: 10px;
    font-size: 51px;
    color: var(--white-secondary);
  }
  .brillianceAboutSecond__text {
    padding-top: 395px;
  }
}
</style>
