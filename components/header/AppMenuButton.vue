<template>
  <button
    :class="[
      'headerMenuButton',
      { headerMenuButton_active: isMenuMobileActive },
    ]"
    @click="$emit('toggleMobileMenu')"
    title="Кнопка меню"
  >
    <span
      :class="[
        'headerMenuButton__span',
        { headerMenuButton__span_active: isMenuMobileActive },
      ]"
    ></span>
  </button>
</template>

<script setup>
const emit = defineEmits(['toggleMobileMenu']);
const { isMenuMobileActive } = defineProps(['isMenuMobileActive']);
</script>

<style scoped>
.headerMenuButton {
  position: relative;
  display: flex;
  width: 24px;
  height: 16px;
}
.headerMenuButton__span {
  position: absolute;
  top: 7px;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--white-primary);
  transition: all 0.3s ease 0s;
}
.headerMenuButton__span_active {
  display: none;
}
.headerMenuButton:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--white-primary);
  transition: all 0.3s ease 0s;
}
.headerMenuButton:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--white-primary);
  transition: all 0.3s ease 0s;
}
.headerMenuButton_active:before {
  transform: rotate(45deg);
  top: 7px;
}
.headerMenuButton_active:after {
  transform: rotate(-45deg);
  bottom: 7px;
}
</style>
