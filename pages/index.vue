<template>
  <PageAppMainImage />
  <Header
    :linksData="headerMainNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
  />
  <main>
    <LayoutMainContainer>
      <PageAppTitle title="Эксклюзивные украшения из Франции" />
    </LayoutMainContainer>
  </main>
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { phone, phoneNumber } from '@/mock/constants';
</script>

<style scoped></style>
