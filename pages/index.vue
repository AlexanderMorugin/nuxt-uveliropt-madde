<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage :desktopImage="DesktopImage" :mobileImage="MobileImage" />
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
      :headingList="headingMainList"
    />

    <!-- Блок Коллекции -->
    <PageAppCollections :collections="collections" />

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

    <!-- Блок с контактами -->
    <PageAppContacts
      :phone="phone"
      :phoneNumber="phoneNumber"
      :address="address"
    />
    <!-- Блок с картой -->
    <PageAppMap />
  </main>
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { headingMainList } from '@/mock/heading-main-list';
import { phone, phoneNumber, address } from '@/mock/constants';
import { exebitionPhoto } from '@/mock/exebition-photo';
import { collections } from '@/mock/collections/collections';
import DesktopImage from '../public/images/img-01-desktop.webp';
import MobileImage from '../public/images/img-01-mobile.webp';

useHead({
  title: 'MADDE - Эксклюзивные украшения из серебра',
  meta: [
    {
      name: 'description',
      content:
        'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
    },
  ],
});

useSeoMeta({
  title: 'MADDE - Эксклюзивные украшения из серебра',
  ogTitle: 'MADDE - Эксклюзивные украшения из серебра',
  description:
    'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
  ogDescription:
    'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
  ogImage: 'https://nuxt-uveliropt-madde.vercel.app/images/img-01-desktop.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://nuxt-uveliropt-madde.vercel.app/',
  ogSiteName: 'MADDE - Эксклюзивные украшения из серебра',
  ogType: 'website',
  ogLocale: 'ru_RU',
});
</script>

<style scoped>
.content__carousel {
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
}

@media (max-width: 767px) {
  .content__carousel {
    padding-top: 60px;
  }
}
</style>
