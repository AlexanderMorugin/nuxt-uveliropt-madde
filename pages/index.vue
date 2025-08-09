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
    <div ref="about" class="demo">
      <LazyPageAppAbout hydrate-on-visible />
    </div>

    <!-- Блок Выгоды сотрудничества -->
    <div ref="benefit" class="demo">
      <PageAppBenefit />
    </div>

    <!-- Блок Этапы работы -->
    <div ref="stages" class="demo">
      <PageAppStages />
    </div>

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
import DesktopImage from '/images/img-01-desktop.webp';
import MobileImage from '/images/img-01-mobile.webp';

const about = ref(null);
const benefit = ref(null);
const stages = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add 'animate-delay' class to the target
          entry.target.classList.add('animate-delay');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (about.value) {
    observer.observe(about.value);
  }

  if (benefit.value) {
    observer.observe(benefit.value);
  }

  if (stages.value) {
    observer.observe(stages.value);
  }
});

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
.animate-delay {
  animation: animate-delay 1s both;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.demo {
  display: inline-block;
  opacity: 0;
  transform: translateY(0);
}
</style>
