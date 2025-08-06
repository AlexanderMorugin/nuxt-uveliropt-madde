<template>
  <Transition name="modal">
    <div
      v-if="isProductModalOpen"
      class="modal-overlay"
      @click="$emit('closeProductModal')"
    >
      <div class="modal" @click.stop>
        <button class="modal__close" @click="$emit('closeProductModal')">
          <img
            src="/icons/icon-close-gray.svg"
            alt="Кнопка закрыть"
            class="modal__image"
          />
        </button>

        <span class="modal__title">{{ item.text }}</span>

        <img
          :src="item.imageLarge"
          :alt="item.text"
          class="modal__productImage"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { isProductModalOpen, item } = defineProps([
  'isProductModalOpen',
  'item',
]);
const emit = defineEmits(['closeProductModal']);
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 50;
}
.modal {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* max-width: 560px; */
  background: var(--white-primary);
  /* padding: 40px 45px; */
  animation: slide-in 0.5s ease-in-out;
}
.modal__close {
  position: absolute;
  top: 50px;
  right: 50px;
}
.modal__image {
  display: block;
  width: 28px;
  height: 28px;
}
.modal__image:hover {
  animation: spin 1s ease-in-out;
}
.modal__title {
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-family: 'Montserrat-Regular';
  font-size: 44px;
  color: var(--brown-secondary);
  /* text-align: center; */
}
.modal__productImage {
  /* width: 90%; */
  height: 100%;
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
  .modal__close {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  .modal__title {
    bottom: 30px;
    right: 30px;
    font-size: 32px;
  }
  .modal__image {
    display: block;
    width: 20px;
    height: 20px;
  }
  .modal__title {
    font-size: 28px;
  }
  .modal__productImage {
  width: 100%;
  height: auto;
}
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
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
