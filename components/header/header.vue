<template>
  <header class="header" :class="isScroll ? 'header_scroll' : ''">
    <div
      class="header__container"
      :class="isScroll ? 'header__container_scroll' : ''"
    >
      <HeaderAppLogo :isScroll="isScroll" />
      <HeaderAppNav
        v-if="!isScreenMedium"
        :linksData="props.linksData"
        :isScroll="isScroll"
      />

      <div class="header__right">
        <HeaderAppPhone
          :phone="props.phone"
          :phoneNumber="props.phoneNumber"
          :isScroll="isScroll"
        />

        <!-- Кнопка мобильного меню -->
        <HeaderAppMenuButton
          v-if="isScreenMedium"
          :isMenuMobileActive="isMenuMobileActive"
          :isScroll="isScroll"
          @toggleMobileMenu="toggleMobileMenu"
        />
      </div>
    </div>
  </header>

  <!-- Мобильное меню -->
  <HeaderAppMenuMobile
    v-if="isScreenMedium"
    :isMenuMobileActive="isMenuMobileActive"
    @toggleMobileMenu="toggleMobileMenu"
  >
    <HeaderAppNav :linksData="props.linksData" />
  </HeaderAppMenuMobile>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium';
import { useScroll } from '@/use/useScroll';

const props = defineProps(['linksData', 'phone', 'phoneNumber']);

const { isScreenMedium } = useResizeMedium();
const { isScroll } = useScroll();

const isMenuMobileActive = ref(false);

const toggleMobileMenu = () => {
  isMenuMobileActive.value = !isMenuMobileActive.value;
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
}
.header_scroll {
  display: flex;
  align-items: center;
  height: 70px;
  background: var(--white-primary);
  box-shadow: rgba(255, 255, 255, 0.6) 0px 8px 24px;
  z-index: 30;
  animation: slide-from-top 2s ease;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.header__container_scroll {
  padding-top: 10px;
  padding-bottom: 10px;
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
  .header__container {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header__right {
    gap: 20px;
  }
  .header_scroll {
    height: 60px;
  }
}

@keyframes slide-from-top {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
