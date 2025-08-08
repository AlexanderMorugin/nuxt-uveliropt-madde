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
    <LazyPageAppAbout hydrate-on-visible />

    <!-- Блок Выгоды сотрудничества -->
    <LazyPageAppBenefit hydrate-on-visible />

    <!-- Блок Этапы работы -->
    <LazyPageAppStages hydrate-on-visible />

    <!-- Блок Выставки -->
    <PageAppExhibitions hydrate-on-visible />
    <!-- Слайдер Выставки -->
    <div class="content__carousel" hydrate-on-visible>
      <LazyEmblaAppCenterCarousel :data="exebitionPhoto" />
    </div>

    <!-- Блок Часто задаваемые вопросы -->
    <LazyPageAppQuestions hydrate-on-visible />
    <!-- Блок Остались вопросы? -->
    <LazyPageAppQuestionsForm hydrate-on-visible />

    <!-- Блок с контактами -->
    <LazyPageAppContacts
      hydrate-on-visible
      :phone="phone"
      :phoneNumber="phoneNumber"
      :address="address"
    />
    <!-- Блок с картой -->
    <LazyPageAppMap hydrate-on-visible />
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

<style scoped></style>
