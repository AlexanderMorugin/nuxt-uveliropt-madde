<template>
  <Transition name="modal">
    <div
      v-if="isCooperationModalOpen"
      class="modal-overlay"
      @click="$emit('closeCooperationModal')"
    >
      <div class="modal" @click.stop>
        <button class="modal__close" @click="$emit('closeCooperationModal')">
          <img
            src="/icons/icon-close-gray.svg"
            alt="Кнопка закрыть"
            class="modal__image"
          />
        </button>

        <h2 class="modal__title">Оставить заявку</h2>

        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const emit = defineEmits(['closeCooperationModal']);
const { isCooperationModalOpen } = defineProps([
  'isCooperationModalOpen',
  'title',
]);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 50;
}
.modal {
  position: relative;
  width: 100%;
  max-width: 560px;
  background: var(--background-primary);
  padding: 40px 45px;
  animation: slide-in 0.2s ease-in-out;
}
.modal__close {
  position: absolute;
  top: 20px;
  right: 20px;
}
.modal__image {
  display: block;
}
.modal__image:hover {
  animation: spin 1s ease-in-out;
}
.modal__title {
  font-family: 'CormorantGaramond-Medium';
  font-size: 44px;
  color: var(--brown-secondary);
  text-align: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);

}

@media (max-width: 767px) {
  .modal {
    height: 100%;
    padding: 40px 20px;
  }
  .modal__title {
    font-size: 32px;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
