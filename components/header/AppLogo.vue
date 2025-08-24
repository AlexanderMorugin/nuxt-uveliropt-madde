<template>
  <NuxtLink to="/" class="logo__link">
    <!-- Логотип при скролле странице вниз -->
    <img
      loading="lazy"
      v-if="isScroll"
      src="/logo/logo-scroll.webp"
      alt="Логотип"
      class="logo-scroll"
    />
    <!-- Логотип при скролле странице вниз -->
    <img
      loading="lazy"
      v-if="!isScroll"
      src="/logo/logo.webp"
      alt="Логотип"
      class="logo"
    />
  </NuxtLink>
</template>

<script setup>
const { isScroll } = defineProps(['isScroll']);
</script>

<style scoped>
.logo {
  width: 90px;
  height: 90px;
}
.logo-scroll {
  width: 120px;
}
.logo__link {
  display: flex;
  align-items: center;
}

@media (max-width: 1023px) {
  .logo {
    width: 75px;
    height: 75px;
  }
  .logo-scroll {
    width: 60px;
  }
}
@media (max-width: 767px) {
  .logo-scroll {
    width: 90px;
  }
}
</style>
