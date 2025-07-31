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
    <PageAppHeading
      title="Эксклюзивные украшения из Италии"
      :headingMainList="headingMainList"
    />

    <PageAppAbout />

    <PageAppStages />

    <PageAppBenefit />

    <PageAppQuestions />

    <PageAppQuestionsForm />

    <PageAppExhibitions />

    <div class="content__carousel">
      <EmblaAppCenterCarousel :data="exebitionPhoto" />
    </div>
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
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
