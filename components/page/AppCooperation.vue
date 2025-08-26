<template>
  <!-- Блок с титлом -->
  <PageAppSecondTitle
    title="Выгоды сотрудничества"
    class="cooperation__secondTitle"
  />

  <div class="cooperation__background">
    <div class="cooperation__container page-screen">
      <ul class="cooperation__list">
        <li
          v-for="item in cooperation"
          :key="item.id"
          class="cooperation__listItem"
        >
          <img
            loading="lazy"
            :src="item.image"
            :alt="item.title"
            class="cooperation__image"
          />
          <div class="cooperation__textBox">
            <span class="cooperation__title">{{ item.title }}</span>
            <p class="cooperation__text text-monserat">{{ item.text }}</p>
          </div>
        </li>
      </ul>

      <!-- Модалка заявки на сотрудничество, с кнопкой -->
      <div class="cooperation__button">
        <LazyModalAppCooperation
          buttonTitle="Заявка на сотрудничество"
          hydrate-on-visible
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: cooperation } = await useFetch('/api/cooperation/cooperation');
</script>

<style scoped>
.cooperation__background {
  width: 100%;
  background-image: url('/images/img-cooperation-01.webp');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.cooperation__container {
  padding-top: 80px;
  padding-bottom: 80px;
}
.cooperation__list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.cooperation__listItem {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 530px;
}
.cooperation__image {
  width: 65px;
  height: 65px;
}
.cooperation__textBox {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cooperation__title {
  font-family: 'Montserrat-Regular', sans-serif;
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
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
.cooperation__listItem:nth-child(2) .cooperation__title {
  animation: textShine 4s ease-in-out infinite alternate;
}
.cooperation__listItem:nth-child(3) .cooperation__title {
  animation: textShine 6s ease-in-out infinite alternate;
}
.cooperation__text {
  color: var(--white-primary);
}
.cooperation__button {
  padding-left: 85px;
  margin-top: 40px;
}
.cooperation__secondTitle {
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .cooperation__background {
    background-blend-mode: multiply;
    background-position: top 0 right -350px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .cooperation__container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .cooperation__listItem {
    flex-direction: column;
  }
  .cooperation__button {
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
