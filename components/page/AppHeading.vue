<template>
  <div class="heading">
    <h1 class="heading__title">{{ title }}</h1>

    <ul class="heading__list">
      <li
        v-for="item in headingMainList"
        :key="item.id"
        class="heading__listItem"
      >
        <img
          src="/icons/icon-triangle.svg"
          alt="Стрелка"
          class="heading__listItemArrow"
        />
        <span class="heading__listItemText">{{ item.text }}</span>
      </li>
    </ul>

    <!-- Кнопка модалки заявки на сотрудничество -->
    <div class="heading__button">
      <PageAppCooperationButton @openCooperationModal="openCooperationModal" />
    </div>
  </div>

  <!-- Модалка с формой заявки на сотрудничество -->

  <!-- <PageAppCooperationModal
    v-if="isCooperationModalOpen"
    @closeCooperationModal="closeCooperationModal"
  /> -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="modal-overlay"
        v-if="isCooperationModalOpen"
        @click="closeCooperationModal"
      >
        <div class="modal" @click.stop>
          <div class="modal-close" @click="closeCooperationModal">&#10006;</div>
          <h1>HELLO!</h1>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { title, headingMainList } = defineProps(['title', 'headingMainList']);

const isCooperationModalOpen = ref(false);

const openCooperationModal = () => (isCooperationModalOpen.value = true);
const closeCooperationModal = () => (isCooperationModalOpen.value = false);
</script>

<style scoped>
.heading {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 20px;
  z-index: 20;
  border: 1px solid red;
}
.heading__title {
  width: 100%;
  max-width: 580px;
  font-family: 'CormorantGaramond-Medium';
  font-size: 60px;
  color: var(--white-primary);
  padding-left: 20px;
  padding-right: 20px;
}
.heading__list {
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.heading__listItem {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  padding-left: 20px;
  padding-right: 20px;
}
.heading__listItemArrow {
  width: 6px;
  height: 6px;
  transform: rotate(90deg);
}
.heading__listItemText {
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  color: var(--white-primary);
}
.heading__button {
  padding-left: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  overflow: hidden;
  z-index: 50;
}
.modal {
  position: relative;
  width: 55%;
  background: white;
  padding-top: 30px;
  animation: slide-in 0.2s ease-in-out;
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

@media (max-width: 1023px) {
  .heading {
    padding-top: 180px;
  }
  .heading__list {
    background: rgba(0, 0, 0, 0.2);
  }
  .heading__title {
    font-size: 51px;
  }
}

@media (max-width: 767px) {
  .heading__title {
    font-size: 40px;
    max-width: 380px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .heading__list {
    padding-left: 10px;
  }
  .heading__listItem {
    height: 27px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .heading__listItemText {
    font-size: 16px;
  }
  .heading__button {
    padding-left: 10px;
  }
}

@media (max-width: 479px) {
  .heading__list {
    margin-top: 10px;
  }
  .heading__listItem {
    height: 24px;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
