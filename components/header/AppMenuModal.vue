<template>
  <!-- <Teleport to="#teleports"> -->
    <!-- <div class="menuModal__overlay"> -->
      <div :class="['menuModal', {menuModal_active: props.isMenuModalOpen}]">
        <h1 class="title">HELLO</h1>
        HELLO
      </div>
    <!-- </div> -->
  <!-- </Teleport> -->
</template>

<script setup>
const props = defineProps(['isMenuModalOpen']);
</script>

<style scoped>
/* .menuModal__overlay {
  position: fixed;
  top: 103px;
  bottom: 0;
  left: 0;
  right: 0;

} */
.menuModal {
  position: fixed;
  top: 103px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: var(--brown-primary);
  transform: translateX(100%);
  transition: 0.3s ease all;
  /* animation: slide-from-right 0.3s ease-in-out; */
}
.menuModal_active {
  transform: translateX(0);
}
.title {
  font-family: 'CormorantGaramond-Medium';
  font-size: 48px;
  color: black;
}

@keyframes slide-from-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
