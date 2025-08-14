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
      <ul class="cutting__details">
        <li class="cutting__detailsBlock">
          <img
            src="/images/collections/brilliance/img-cutting-003.webp"
            alt="Картинка микроскопа"
            class="cutting__detailsBlockImage"
          />
          <p class="cutting__detailsBlockText">
            Только когда все крошечные грани идеально совпадают со своими
            аналогами на противоположной стороне, будет отображаться четкий узор
            в виде Сердец и Стрел.
          </p>
        </li>
        <li class="cutting__detailsBlock">
          <img
            src="/images/collections/brilliance/img-cutting-004.webp"
            alt="Картинка микроскопа"
            class="cutting__detailsBlockImage"
          />
          <p class="cutting__detailsBlockText">
            «Сердца и Стрелы», можно рассмотреть, глядя на CZ с идеальной
            огранкой, используя специальное приспособление файерскоп
            («FireScope»). При просмотре камня сверху, становятся видны восемь
            изображений «стрел», при просмотре снизу – восемь изображений
            «сердец».
          </p>
        </li>
        <li class="cutting__detailsBlock">
          <img
            src="/images/collections/brilliance/img-cutting-005.webp"
            alt="Картинка узоров"
            class="cutting__detailsBlockImage"
          />
          <p class="cutting__detailsBlockText">
            Таким образом, узор “Сердеца и Стрелы” является визуальным
            свидетельством мастерства, и гарантирует наилучший эффект сверкания
            и блеска. Именно эта огранка является идеальной и самой дорогой в
            производстве.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.cutting {
  background: var(--blue-dark-thirdary);
  margin-top: 70px;
  padding-bottom: 40px;
}
.cutting__container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
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
  padding-top: 30px;
  padding-bottom: 20px;
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
.cutting__details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  padding-top: 30px;
}
.cutting__detailsBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--white-primary);
  /* border: 2px solid var(--brown-secondary); */
  border-radius: 15px;
  /* padding: 10px; */
  overflow: hidden;
}
.cutting__detailsBlockImage {
  width: 100%;
}
.cutting__detailsBlockText {
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 18px;
  color: var(--brown-secondary);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

@media (max-width: 1279px) {
  .cutting__textTop {
    padding-bottom: 200px;
  }
  .cutting__details {
    column-gap: 20px;
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
  .cutting__details {
    grid-template-columns: 1fr;
    row-gap: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 479px) {
  .cutting__textTop {
    padding-bottom: 120px;
  }
}
</style>
