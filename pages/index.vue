<template>
  
  <PageAppMainImage />
  <PageAppLeftTitleBadge />

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
</script>

<style scoped></style>
