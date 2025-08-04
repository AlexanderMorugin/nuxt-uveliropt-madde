<template>
  <section class="benefit" id="cooperation">
    <!-- Блок с титлом -->
    <PageAppSecondTitle
      title="Выгоды сотрудничества"
      class="benefit__secondTitle"
    />

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
  </section>
</template>

<script setup>
import { benefit } from '@/mock/benefit';
</script>

<style scoped>
.benefit {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
}
.benefit__background {
  width: 100%;
  background-image: url('/images/img-benefit-01.webp');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.benefit__container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
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
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    var(--blue-primary) 20%,
    var(--white-primary) 30%,
    var(--purple-primary) 50%,
    var(--white-primary) 70%,
    var(--blue-primary) 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
.benefit__listItem:nth-child(2) .benefit__title {
  animation: textShine 4s ease-in-out infinite alternate;
}
.benefit__listItem:nth-child(3) .benefit__title {
  animation: textShine 6s ease-in-out infinite alternate;
}
.benefit__text {
  color: var(--white-primary);
}
.benefit__button {
  padding-left: 85px;
  margin-top: 40px;
}
.benefit__secondTitle {
  color: var(--brown-fourdary);
}

@media (max-width: 767px) {
  .benefit {
    padding-top: 60px;
  }
  .benefit__background {
    background-blend-mode: multiply;
    background-position: top 0 right -350px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .benefit__container {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .benefit__listItem {
    flex-direction: column;
  }
  .benefit__button {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
