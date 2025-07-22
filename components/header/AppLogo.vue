<template>
  <NuxtLink to="/">
    <img src="/logo/logo.webp" alt="Логотип" class="logo" />
  </NuxtLink>
</template>

<script setup></script>

<style scoped>
.logo {
  width: 90px;
  height: 90px;
}

@media (max-width: 1023px) {
  .logo {
    width: 75px;
    height: 75px;
  }
}
</style>
