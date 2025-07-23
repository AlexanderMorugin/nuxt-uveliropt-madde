<template>
  <div :class="['menuMobile', { menuMobile_active: isMenuMobileActive }]">
    <div class="menuMobile__top">
      <!-- Кнопка Закрыть -->
      <HeaderAppMenuButton
        :isMenuMobileActive="isMenuMobileActive"
        @toggleMobileMenu="$emit('toggleMobileMenu')"
        class="menuMobile__button"
      />

      <!-- Основное содержание меню -->
      <slot />
    </div>

    <!-- Адрес внизу меню -->
    <HeaderAppAddress />
  </div>
</template>

<script setup>
const { isMenuMobileActive } = defineProps(['isMenuMobileActive']);
const emit = defineEmits(['toggleMobileMenu']);
</script>

<style scoped>
.menuMobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--brown-primary);
  transform: translateX(100%);
  transition: 0.3s ease all;
  padding: 40px 20px 60px 20px;
  z-index: 20;
}
.menuMobile_active {
  transform: translateX(0);
}
.menuMobile__top {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.menuMobile__button {
  align-self: flex-end;
}
</style>
