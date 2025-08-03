<template>
  <!-- <div>
    <Head>
      <Title>{{ route }}</Title>
    </Head> -->

  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage
    :desktopImage="currentCollection.details.desktopImage"
    :mobileImage="currentCollection.details.desktopImage"
  />
  <PageAppLeftTitleBadge />

  <!-- Шапка -->
  <Header
    :linksData="headerCollectionNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      :title="currentCollection.details.title"
      :headingList="currentCollection.details.subtitle"
      location="collections"
    />
  </main>

  <h1>Name of Collection - {{ route }}</h1>

  {{ currentCollection }}
  <!-- </div> -->
</template>

<script setup>
const { route } = useRoute().params;
import { collections } from '@/mock/collections/collections';
import { headerCollectionNav } from '@/mock/header-collection-nav';
import { phone, phoneNumber, address } from '@/mock/constants';

const currentCollection = collections.find((item) => item.route === route);

console.log(currentCollection.details)
</script>
