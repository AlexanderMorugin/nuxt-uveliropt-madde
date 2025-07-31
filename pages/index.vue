<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage />
  <PageAppLeftTitleBadge />

  <!-- Шапка -->
  <Header
    :linksData="headerMainNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      title="Эксклюзивные украшения из Италии"
      :headingMainList="headingMainList"
    />

    <!-- Блок Ювелирный бренд MADDE -->
    <PageAppAbout />

    <!-- Блок Выгоды сотрудничества -->
    <PageAppBenefit />

    <!-- Блок Этапы работы -->
    <PageAppStages />

    <!-- Блок Выставки -->
    <PageAppExhibitions />
    <!-- Слайдер Выставки -->
    <div class="content__carousel">
      <EmblaAppCenterCarousel :data="exebitionPhoto" />
    </div>

    <!-- Блок Часто задаваемые вопросы -->
    <PageAppQuestions />
    <!-- Блок Остались вопросы? -->
    <PageAppQuestionsForm />
  </main>
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { headingMainList } from '@/mock/heading-main-list';
import { phone, phoneNumber } from '@/mock/constants';
import { exebitionPhoto } from '@/mock/exebition-photo';
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 72px;
}
.content__carousel {
  width: 100%;
  margin: 0 auto;
}
</style>
