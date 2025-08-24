<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <div class="mainPageImage" />
  <PageAppLeftTitleBadge />

  <!-- Шапка -->
  <Header :linksData="headerMainNav" />

  <!-- Контент -->
  <main class="content"></main>
</template>

<script setup>
const { data: headerMainNav } = await useFetch('/api/header/header-main-nav');
// const { data: headingMainList } = await useFetch(
//   '/api/heading/heading-main-list'
// );

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
  background-image: url('/images/img-main-01.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
}

@media (max-width: 767px) {
  .mainPageImage {
    height: 700px;
    background-position: top right -200px;
  }
}
</style>
