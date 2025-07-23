<template>
  <div class="default-layout">
    <!-- <Header
      :linksData="headerMainNav"
      :phone="phone"
      :phoneNumber="phoneNumber"
    /> -->
    <slot />
    <Footer />
  </div>
</template>

<!-- <script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { phone, phoneNumber } from '@/mock/constants';
</script> -->

<style scoped>
.default-layout {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
