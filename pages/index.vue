<template>
  <PageAppMainImage />
  <Header
    :linksData="headerMainNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
  />
  <!-- <main> -->
    <!-- <LayoutMainContainer> -->
      <PageAppHeading
        title="Эксклюзивные украшения из Италии"
        :headingMainList="headingMainList"
      />
    <!-- </LayoutMainContainer> -->
  <!-- </main> -->
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { headingMainList } from '@/mock/heading-main-list';
import { phone, phoneNumber } from '@/mock/constants';

// onMounted(() => {
//   window.history.scrollRestoration = 'manual'
// })
</script>

<style scoped></style>
