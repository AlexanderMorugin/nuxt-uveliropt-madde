<template>
  <section class="heading">
    <!-- Главный титл для страниц коллекции -->
    <div v-if="location === 'collections'" class="heading__titleBox">
      <span class="heading__titleTop">Коллекция</span>
      <h1 class="heading__titleCollection">
        {{ title }}
      </h1>
      <span class="heading__titleBottom">MADDE</span>
    </div>

    <!-- Главный титл для главной страницы -->
    <h1 v-else class="heading__title">{{ title }}</h1>

    <ul class="heading__list">
      <li v-for="item in headingList" :key="item.id" class="heading__listItem">
        <img
          src="/icons/icon-triangle.svg"
          alt="Стрелка"
          class="heading__listItemArrow"
        />
        <PageAppParagraphShadow class="heading__listItemText">{{
          item.text
        }}</PageAppParagraphShadow>
      </li>
    </ul>

    <!-- Модалка заявки на сотрудничество, с кнопкой -->
    <ClientOnly>
      <div class="heading__button">
        <ModalAppCooperation
          buttonTitle="Заявка на сотрудничество"
          location="heading"
        />
      </div>
    </ClientOnly>
  </section>
</template>

<script setup>
const { title, headingList, location } = defineProps([
  'title',
  'headingList',
  'location',
]);
</script>

<style scoped>
.heading {
  position: relative;
  width: 100%;
  max-width: 1440px;
  /* height: 666px; */
  /* height: 670px; */
  height: 100%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 20px;
  z-index: 20;

  /* border: 1px solid red; */
}
.heading__titleBox {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.heading__titleTop {
  font-family: 'Montserrat-Regular';
  font-size: 28px;
  color: var(--white-primary);
  text-shadow: 1px 0 10px var(--brown-secondary),
    0 1px 10px var(--brown-secondary), -1px 0 10px var(--brown-secondary),
    0 -1px 10px var(--brown-secondary);
  padding-left: 20px;
  padding-right: 20px;
  animation: slide-in .4s ease-out;
}
.heading__titleCollection {
  font-family: 'Montserrat-SemiBold';
  line-height: 1;
  font-size: 80px;
  color: var(--white-primary);
  text-shadow: #000000 0 0 20px;
  padding-left: 20px;
  padding-right: 20px;
  animation: slide-in .7s ease-out;
}
.heading__titleBottom {
  font-family: 'Montserrat-SemiBold';
  line-height: 1;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  text-shadow: white 0 0 20px;
  padding-left: 20px;
  padding-right: 20px;
  animation: slide-in 1.1s ease-out;
}
.heading__title {
  width: 100%;
  max-width: 580px;
  font-family: 'CormorantGaramond-Medium';
  line-height: 1.2;
  font-size: 60px;
  color: var(--white-primary);
  padding-left: 20px;
  padding-right: 20px;
  animation: slide-in 0.6s ease-out;
}
.heading__list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.heading__listItem {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  animation: slide-in 0.3s ease-out;
}
.heading__listItem:nth-child(2) {
  animation: slide-in 0.9s ease-out;
}
.heading__listItem:nth-child(3) {
  animation: slide-in 1.2s ease-out;
}
.heading__listItem:nth-child(4) {
  animation: slide-in 1.5s ease-out;
}
.heading__listItem:nth-child(5) {
  animation: slide-in 1.8s ease-out;
}
.heading__listItemArrow {
  width: 6px;
  height: 6px;
  transform: rotate(90deg);
}
.heading__listItemText {
  line-height: 1.2;
}
.heading__button {
  margin-top: 80px;
  padding-left: 20px;
}

@media (max-width: 1023px) {
  .heading {
    height: 681px;
    padding-top: 180px;
  }
  .heading__list {
    background: rgba(0, 0, 0, 0.2);
  }
  .heading__title {
    font-size: 51px;
  }
  .heading__listItemText {
    text-shadow: none;
  }
  .heading__button {
    margin-top: 50px;
  }
}

@media (max-width: 767px) {
  .heading {
    height: 624px;
  }
  .heading__titleTop {
    font-size: 28px;
    padding-left: 40px;
  }
  .heading__titleCollection {
    font-size: 60px;
    padding-left: 40px;
  }
  .heading__titleBottom {
    font-size: 22px;
    padding-left: 40px;
  }
  .heading__title {
    font-size: 40px;
    max-width: 380px;
    padding-left: 40px;
    padding-right: 10px;
  }
  .heading__list {
    padding-left: 40px;
  }
  .heading__listItem {
    padding-left: 10px;
    padding-right: 10px;
  }
  .heading__button {
    margin-top: 30px;
    padding-left: 40px;
  }
}

@media (max-width: 479px) {
  .heading__titleTop {
    font-size: 20px;
  }
  .heading__titleCollection {
    font-size: 50px;
  }
  .heading__titleBottom {
    font-size: 18px;
  }
  .heading__list {
    margin-top: 10px;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
