<template>
  <div>
    <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
    <div class="mainPageImage">
      <img
        fetchpriority="high"
        src="/images/img-main-01.webp"
        alt="Подложка"
        class="mainPageImage__item"
      />
    </div>

    <ClientOnly>
      <LazyPageAppLeftTitleBadge />
    </ClientOnly>

    <!-- Шапка -->
    <Header :linksData="headerMainNav" />

    <!-- Контент -->
    <main class="content">
      <!-- Блок Хединга с главным титлом -->
      <PageAppHeading
        title="Эксклюзивные украшения из Италии"
        :headingList="headingMainList"
      />

      <!-- Блок Коллекции -->
      <LazyPageAppCollections :collections="collections" />

      <!-- Блок Ювелирный бренд MADDE -->
      <LazyPageAppAbout />

      <!-- Блок Выгоды сотрудничества -->
      <LazyPageAppCooperation />

      <!-- Блок Этапы работы -->
      <LazyPageAppStages />

      <!-- Блок Выставки -->
      <LazyPageAppExhibitions hydrate-on-visible />
    </main>
  </div>
</template>

<script setup>
const { data: headerMainNav } = await useFetch('/api/header/header-main-nav');
const { data: headingMainList } = await useFetch(
  '/api/heading/heading-main-list'
);
const { data: collections } = await useFetch('/api/collections/collections');

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
.mainPageImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
}
.mainPageImage__item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top right;
}

@media (max-width: 767px) {
  .mainPageImage {
    height: 700px;
  }
  .mainPageImage__item {
    object-position: top 0 right -200px;
  }
}
</style>
