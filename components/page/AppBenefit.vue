<template>
  <section class="benefit">
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Выгоды сотрудничества" />

    <div class="benefit__background">
      <div class="benefit__container">
        <ul class="benefit__list">
          <li v-for="item in benefit" :key="item.id" class="benefit__listItem">
            <img :src="item.image" :alt="item.title" class="benefit__image" />
            <div class="benefit__textBox">
              <span class="benefit__title">{{ item.title }}</span>
              <PageAppParagraph class="benefit__text">{{
                item.text
              }}</PageAppParagraph>
            </div>
          </li>
        </ul>

        <!-- Модалка заявки на сотрудничество, с кнопкой -->
        <div class="benefit__button">
          <ModalAppCooperation buttonTitle="Заявка на сотрудничество" />
        </div>
      </div>
    </div>

    <!-- Карусель с меняющимися картинками. В десктопе как бекграунд под текстом. В мобильной версии, отдельным блоком -->
    <!-- <div class="benefit__embla">
      <EmblaAppFadeCarousel :data="benefitPhoto" />
    </div> -->
  </section>
</template>

<script setup>
import { benefitPhoto } from '@/mock/benefit-photo';
import { benefit } from '@/mock/benefit';
</script>

<style scoped>
.benefit {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-image: url('/images/img-benefit-01.webp'); */
  /* position: relative;
  height: 900px; */

  /* background: darkgoldenrod; */
  /* border: 2px solid red; */
}
/* .benefit__embla {
  position: absolute;
  top: 100px;
  left: 0;
} */
.benefit__background {
  width: 100%;
  /* height: 800px; */
  background-image: url('/images/img-benefit-01.webp');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.benefit__container {
  /* position: relative; */
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  /* z-index: 20; */

  /* border: 1px solid red; */
}
.benefit__list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.benefit__listItem {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 530px;

  /* border: 1px solid red; */
}
.benefit__image {
  width: 65px;
  height: 65px;
}
.benefit__textBox {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.benefit__title {
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--blue-primary);
  text-transform: uppercase;
}
.benefit__text {
  color: var(--white-primary);
}
.benefit__button {
  padding-left: 85px;
  margin-top: 40px;
}

@media (max-width: 767px) {
  .benefit__background {
    background-blend-mode: multiply;
    background-position: top 0 right -350px;
    background-color: rgba(0, 0, 0, 0.3);
    
  }
  .benefit__listItem {
    flex-direction: column;
  }
  .benefit__button {
    padding-left: 0;
    /* padding-right: 16px; */
  }
}
</style>

<!-- <template>
  <section class="benefit">
    Картинка в виде бекграунда
    <img
      src="/images/img-benefit.webp"
      alt="Выгоды сотрудничества"
      class="benefit__image"
    />

    <div class="benefit__container"></div>
  </section>
</template>

<style scoped>
.benefit {
  position: relative;
  width: 100%;
  height: 750px;
}
.benefit__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
  object-fit: cover;
  object-position: top;
}
.benefit__container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 20;
  border: 2px solid white;
}

@media (max-width: 767px) {
  .benefit__container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style> -->
