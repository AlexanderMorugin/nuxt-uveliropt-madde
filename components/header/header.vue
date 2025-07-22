<template>
  <header class="header">
    <LayoutMainContainer class="header__container">
      <HeaderAppLogo />
      <HeaderAppNav v-if="!isScreenMedium" :linksData="props.linksData" />
      <div class="header__right">
        <HeaderAppPhone :phone="props.phone" :phoneNumber="props.phoneNumber" />
        <HeaderAppMenuButton
          v-if="isScreenMedium"
          @openMenuModal="openMenuModal"
        />
      </div>
    </LayoutMainContainer>
  </header>

  <!-- Модалка мобильного меню -->
  <HeaderAppMenuModal :isMenuModalOpen="isMenuModalOpen" />
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium';

const props = defineProps(['linksData', 'phone', 'phoneNumber']);

const { isScreenMedium } = useResizeMedium();

const isMenuModalOpen = ref(false);

const openMenuModal = () => {
  isMenuModalOpen.value = !isMenuModalOpen.value;
};
</script>

<style scoped>
.header {
  background: var(--brown-primary);
  width: 100%;
  padding: 20px;
  border: 1px solid red;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}
.header__right {
  display: flex;
  align-items: center;
  gap: 36px;
}

@media (max-width: 1023px) {
  .header__container {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 10px;
  }
}
</style>
