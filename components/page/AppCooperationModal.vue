<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay" @click="$emit('closeCooperationModal')">
        <div class="modal" @click.stop>
          <div class="modal-close" @click="$emit('closeCooperationModal')">
            &#10006;
          </div>
          <h1>HELLO!</h1>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(['closeCooperationModal']);
const { visible } = defineProps(['visible']);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  overflow: hidden;
  z-index: 50;
  
}
.modal {
  position: relative;
  width: 55%;
  background: white;
  padding-top: 30px;
  /* animation: slide-in 300ms ease-in-out; */
}

.modal-enter-active,
.modal-leave-active {
  transition: all 2s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1)
}

/* @keyframes slideIn {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes slideOut {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(100px);
  }
} */
</style>
