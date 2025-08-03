<template>
  <header class="header" :class="isScroll ? 'header_scroll' : ''">
    <div
      class="header__container"
      :class="
        isScroll ? 'header__container_scroll' : 'header__container_scrollOut'
      "
    >
      <div
        :class="
          isScroll ? 'header__subcontainerScroll' : 'header__subcontainer'
        "
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
    </div>
  </header>

  <!-- Мобильное меню -->
  <HeaderAppMenuMobile
    v-if="isScreenMedium"
    :isMenuMobileActive="isMenuMobileActive"
    @toggleMobileMenu="toggleMobileMenu"
  >
    <HeaderAppNav
      :linksData="props.linksData"
      @toggleMobileMenu="toggleMobileMenu"
    />
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
  z-index: 10;
  height: 130px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), transparent);
}
.header_scroll {
  position: sticky;
  top: 0;
  display: flex;
  height: 130px;
  background: none;
  z-index: 30;
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
  max-width: 100%;
  height: 70px;
  background: var(--background-primary);
  box-shadow: rgba(252, 249, 243, 0.6) 0px 8px 24px;
  padding-top: 0;
  padding-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  animation: slide-from-top 2s ease;
}
.header__container_scrollOut {
  animation: slide-to-bottom 1s ease;
}
.header__subcontainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
}
.header__subcontainerScroll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.header__right {
  display: flex;
  align-items: center;
  gap: 36px;
}

@media (max-width: 1023px) {
  .header {
    height: 115px;
  }
  .header_scroll {
    height: 115px;
  }
  .header__container {
    gap: 15px;
  }
  .header__subcontainer {
    gap: 15px;
  }
  .header__subcontainerScroll {
    gap: 15px;
  }
}

@media (max-width: 767px) {
  .header {
    height: 75px;
  }
  .header_scroll {
    height: 75px;
  }
  .header__container {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header__right {
    gap: 20px;
  }
  .header__container_scroll {
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

@keyframes slide-to-bottom {
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
