<template>
  <div :class="['menuMbile', { menuMbile_active: isMenuMobileActive }]">
    <slot />

    <HeaderAppAddress />
  </div>
</template>

<script setup>
const { isMenuMobileActive } = defineProps(['isMenuMobileActive']);
</script>

<style scoped>
.menuMbile {
  position: fixed;
  top: 103px;
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
}
.menuMbile_active {
  transform: translateX(0);
}
</style>
