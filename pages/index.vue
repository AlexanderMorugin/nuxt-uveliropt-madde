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
  </main>
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { headingMainList } from '@/mock/heading-main-list';
import { phone, phoneNumber } from '@/mock/constants';
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 72px;
}
</style>
