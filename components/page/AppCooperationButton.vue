<template>
  <button
    :class="[
      'cooperationButton',
      { cooperationButton_small: location === 'heading' },
    ]"
    @click="$emit('openCooperationModal')"
  >
    {{ title }}
  </button>
</template>

<script setup>
const emit = defineEmits(['openCooperationModal']);
const { title, location } = defineProps(['title', 'location']);
</script>

<style scoped>
.cooperationButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  min-height: 64px;
  padding: 10px;
  background: var(--blue-secondary);
  border: 1px solid var(--white-secondary);
  font-family: 'Montserrat-Regular';
  font-size: 21px;
  color: var(--white-primary);
  text-transform: uppercase;
  transition: 0.3s ease all;
}
.cooperationButton:hover {
  background: var(--blue-dark-primary);
}

@media (max-width: 767px) {
  .cooperationButton {
    min-height: 58px;
    font-size: 18px;
  }
  .cooperationButton_small {
    max-width: 360px;
  }
}

@media (max-width: 479px) {
  .cooperationButton_small {
    max-width: 260px;
    min-height: 45px;
    font-size: 14px;
  }
}
</style>
