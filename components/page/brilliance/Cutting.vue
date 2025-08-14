<template>
  <section class="cutting">
    <div class="cutting__container">
      <h2 class="cutting__title">
        Огранка <span class="cutting__titleSpan">H</span>earts &
        <span class="cutting__titleSpan">A</span>rrows
      </h2>
      <div class="cutting__imageBox">
        <img
          src="/images/collections/brilliance/img-cutting-002.webp"
          alt="Картинка огранки камней"
          class="cutting__image"
        />
      </div>
      <div class="cutting__textTop">
        <p class="cutting__text">
          Огранка Hearts and Arrows (CZ H&A) представляют собой вариацию
          традиционной круглой огранки с 57 гранями. Кристаллы огранены до
          «идеальных» пропорций с хорошей оптической симметрией, полировкой и
          особым рисунком огранки.
        </p>
        <p class="cutting__text">
          Огранка камня оказывает наибольший эффект на его сверкание и блеск.
          «Сердца и Стрелы», Hearts&Arrows, H&A - это особый световой эффект,
          образующий определенный контрастный узор (как в калейдоскопе).
        </p>
        <img
          src="/images/collections/brilliance/img-cutting-001.webp"
          alt="Картинка огранки камней"
          class="cutting__textTopImage"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.cutting {
  background: var(--blue-dark-thirdary);
  margin-top: 70px;
}
.cutting__container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;

  border: 1px solid red;
}
.cutting__title {
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 51px;
  text-align: center;
  color: var(--white-primary);
}
.cutting__titleSpan {
  font-family: 'CormorantGaramond-SemiBold';
  font-size: 51px;
  text-align: center;
  color: var(--red-primary);
}
.cutting__imageBox {
  display: flex;
  justify-content: center;
}
.cutting__image {
  width: 100%;
  max-width: fit-content;
}
.cutting__textTop {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding-bottom: 150px;
}
.cutting__textTopImage {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: fit-content;
}
.cutting__text {
  width: 100%;
  max-width: 500px;
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 18px;
  color: var(--white-primary);
}

@media (max-width: 1279px) {
  .cutting__textTop {
    padding-bottom: 200px;
  }
}

@media (max-width: 1023px) {
  .cutting__textTopImage {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .cutting {
    margin-top: 60px;
  }
  .cutting__container {
    padding-left: 10px;
    padding-right: 10px;
  }
  .cutting__title {
    line-height: 1.2;
    font-size: 45px;
  }
  .cutting__titleSpan {
    line-height: 1.2;
    font-size: 45px;
    color: var(--red-primary);
  }
  .cutting__textTop {
    flex-direction: column;
    gap: 40px;
  }
  .cutting__text {
    max-width: 100%;
  }
}

@media (max-width: 479px) {
  .cutting__textTop {
    padding-bottom: 120px;
  }
}
</style>
