<template>
  <button class="cooperationButton" @click="$emit('openCooperationModal')">
    Заявка на сотрудничество
  </button>
</template>

<script setup>
const emit = defineEmits(['openCooperationModal']);
</script>

<style scoped>
.cooperationButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 419px;
  min-height: 64px;
  padding: 10px;
  background: var(--blue-secondary);
  border: 1px solid var(--white-secondary);
  font-family: 'Montserrat-Regular';
  font-size: 21px;
  color: var(--white-primary);
  text-transform: uppercase;
  margin-top: 80px;
  transition: 0.3s ease all;
}
.cooperationButton:hover {
  background: var(--blue-dark-primary);
}

@media (max-width: 1023px) {
  .cooperationButton {
    margin-top: 50px;
  }
}

@media (max-width: 767px) {
  .cooperationButton {
    max-width: 360px;
    min-height: 58px;
    font-size: 18px;
    margin-top: 30px;
  }
}

@media (max-width: 479px) {
  .cooperationButton {
    max-width: 260px;
    min-height: 45px;
    font-size: 14px;
  }
}
</style>
