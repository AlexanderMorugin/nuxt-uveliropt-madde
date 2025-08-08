<template>
  <section class="exhibitions">
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Выставки" class="exhibitions__title" />

    <p class="exhibitions__text">
      Приглашаем посетить стенд компании MADDE на выставке для знакомства со
      всем ассортиментом и условиями сотрудничества
    </p>

    <div>
      <NuxtImg
        src="/images/img-exhibitions-01.webp"
        alt="Выставка JunWex"
        class="exhibitions__image"
      />
      <p class="exhibitions__text">
        27 сентября - 1 октября<br />Москва, ВДНХ, павильон 75
      </p>
    </div>

    <!-- Модалка заявки пригласительного, с кнопкой -->
    <ModalAppCooperation buttonTitle="Получить пригласительный" />
  </section>
</template>

<script setup></script>

<style scoped>
.exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.exhibitions__text {
  width: 100%;
  max-width: 730px;
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 18px;
  color: var(--brown-secondary);
  text-align: center;
}
.exhibitions__image {
  width: 100%;
  max-width: 640px;
}
.exhibitions__title {
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .exhibitions {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
