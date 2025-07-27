<template>
  <header class="header">



    <!-- <LayoutMainContainer class="header__container"> -->
    <div class="header__container">



      <HeaderAppLogo />
      <HeaderAppNav v-if="!isScreenMedium" :linksData="props.linksData" />
      <!-- <HeaderAppNav :linksData="props.linksData" /> -->
      <div class="header__right">
        <HeaderAppPhone :phone="props.phone" :phoneNumber="props.phoneNumber" />

        <!-- Кнопка мобильного меню -->
        <HeaderAppMenuButton
          v-if="isScreenMedium"
          :isMenuMobileActive="isMenuMobileActive"
          @toggleMobileMenu="toggleMobileMenu"
        />
      </div>
    </div>
    <!-- </LayoutMainContainer> -->
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

const props = defineProps(['linksData', 'phone', 'phoneNumber']);

const { isScreenMedium } = useResizeMedium();

const isMenuMobileActive = ref(false);

const toggleMobileMenu = () => {
  isMenuMobileActive.value = !isMenuMobileActive.value;
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 10;
  /* border: 1px solid red; */
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
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header__right {
    gap: 20px;
  }
}
</style>
