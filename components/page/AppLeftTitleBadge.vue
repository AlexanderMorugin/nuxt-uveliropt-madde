<template>
  <div class="leftTitleBadge">
    <div class="leftTitleBadge__text">MADDE</div>
  </div>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium';

const { isScreenMedium } = useResizeMedium();
</script>

<style scoped>
.leftTitleBadge {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 800px;
  display: flex;
  overflow: hidden;
}
.leftTitleBadge__text {
  font-family: 'Montserrat-SemiBold';
  line-height: 80px;
  font-size: 210px;
  color: rgba(0, 0, 0, 0.2);
  text-shadow: rgba(0, 0, 0, 0.2) 1px 0 10px;
  transform: rotate(270deg);
  animation: slide-in 5s ease-out;
}

@media (max-width: 767px) {
  .leftTitleBadge {
    height: 700px;
  }
  .leftTitleBadge__text {
    line-height: 80px;
    font-size: 180px;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: rotate(270deg) translateX(100%);
  }
  80% {
    opacity: 0;
    transform: rotate(270deg) translateX(100%);
  }
  100% {
    opacity: 1;
    transform: rotate(270deg) translateX(0);
  }
}
</style>
