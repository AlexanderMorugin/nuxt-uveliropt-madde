<template>
  <!-- Блок с титлом и текстами -->
  
    <div class="brillianceAboutSecond__textBox">
      <!-- <div class="brillianceAboutSecond__container"> -->
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
  <!-- </div> -->
</template>

<script setup></script>

<style scoped>
.brillianceAboutSecond__container {
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  /* padding: 100px 20px; */
}
.brillianceAboutSecond__textBox {
  position: relative;
  display: flex;
  align-items: flex-start;
background: linear-gradient(transparent  50%, var(--brown-secondary));
  /* max-width: 620px; */
  /* background: rgba(255, 255, 255, 0.6); */
  /* border-radius: 15px; */
  /* padding: 100px 20px; */
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
  /* color: var(--black-primary); */
  color: var(--white-primary);
  /* background: linear-gradient(transparent  50%, var(--brown-secondary)); */
  /* padding-top: 495px; */
  padding: 495px 20px 40px 20px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .brillianceAboutSecond__container {
    padding: 0;
  }
  .brillianceAboutSecond__textBox {
    /* max-width: 100%; */
    /* background: none; */
    /* border-radius: 0; */
    /* padding: 40px 0 0 0; */
  }
  .brillianceAboutSecond__text {
    font-size: 18px;
    /* color: var(--white-primary); */
    /* background: linear-gradient(transparent  50%, var(--brown-secondary)); */
    /* text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary); */
    padding: 0 10px 40px 10px;
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
