<template>
  <section class="exhibitions">
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Выставки" />

    <PageAppParagraph class="exhibitions__text"
      >Приглашаем посетить стенд компании MADDE на выставке для знакомства со
      всем ассортиментом и условиями сотрудничества</PageAppParagraph
    >

    <div>
      <img
        src="/images/img-exhibitions-01.webp"
        alt="Выставка JunWex"
        class="exhibitions__image"
      />
      <PageAppParagraph class="exhibitions__text"
        >27 сентября - 1 октября<br />Москва, ВДНХ, павильон
        75</PageAppParagraph
      >
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
  padding-left: 20px;
  padding-right: 20px;

  border: 1px solid red;
}
.exhibitions__text {
  width: 100%;
  max-width: 730px;
  text-align: center;
}
.exhibitions__image {
  width: 100%;
  max-width: 640px;
}
</style>
