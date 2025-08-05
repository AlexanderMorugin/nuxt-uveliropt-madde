<template>
  <!-- <Head>
      <Title>{{ route }}</Title>
    </Head> -->

  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage
    :desktopImage="currentCollection.details.desktopImage"
    :mobileImage="currentCollection.details.mobileImage"
  />
  <PageAppLeftTitleBadge />

  <!-- Шапка -->
  <Header
    :linksData="headerCollectionNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
    location="collections"
    :route="currentCollection.route"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      :title="currentCollection.details.title"
      :headingList="currentCollection.details.subtitle"
      location="collections"
    />

    <!-- Блок О коллекции -->
    <PageAppBrillianceAboutSecond />

    <!-- Слайдер с изделиями -->
    <div class="content__carousel" id="catalog">
      <PageAppSecondTitle title="Каталог" class="content__secondTitle"/>
      <EmblaAppProductCarousel :data="currentCollection.details.items" />
    </div>

    <!-- Блок О коллекции -->
    <PageAppBrillianceAbout />
  </main>

  <!-- Блок с контактами -->
  <PageAppContacts
    :phone="phone"
    :phoneNumber="phoneNumber"
    :address="address"
  />
  <!-- Блок с картой -->
  <PageAppMap />
</template>

<script setup>
const { route } = useRoute().params;
import { collections } from '@/mock/collections/collections';
import { headerCollectionNav } from '@/mock/header-collection-nav';
import { phone, phoneNumber, address } from '@/mock/constants';

const currentCollection = collections.find((item) => item.route === route);

// console.log(currentCollection);
</script>

<style scoped>
.content__secondTitle {
  color: var(--brown-secondary);
}
</style>
