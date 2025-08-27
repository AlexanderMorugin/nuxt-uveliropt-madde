<template>
  <PageAppSecondTitle title="Этапы работы" class="stages__title" />
  <ul class="stages__content">
    <li
      v-for="item in stagesList"
      :key="item.id"
      class="stages__item"
      :class="item.gridName"
    >
      <div class="stages__itemImageBox">
        <img
          loading="lazy"
          :src="item.image"
          :alt="item.title"
          class="stages__itemImage"
        />
        <div class="stages__itemTitleBox">
          <span>{{ item.number }}</span>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <ul class="stages__itemList">
        <li
          v-for="element in item.list"
          :key="element.id"
          class="stages__itemText"
        >
          <img
            loading="lazy"
            src="/icons/icon-triangle-brown.svg"
            alt="Стрелка"
            class="stages__itemArrow"
          />
          <p class="stages__text text-monserat">{{ element.text }}</p>
        </li>
      </ul>
    </li>
  </ul>

  <!-- Модалка заявки на сотрудничество, с кнопкой -->

  <div class="stages__button">
    <LazyModalAppCooperation buttonTitle="Оставить заявку" />
  </div>
</template>

<script setup>
const { data: stagesList } = await useFetch('/api/stages/stages');
</script>

<style scoped>
.stages__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'request selection payment'
    'change control control';
  gap: 40px;
}
.stages__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.request {
  grid-area: request;
}
.selection {
  grid-area: selection;
}
.payment {
  grid-area: payment;
}
.change {
  grid-area: change;
}
.control {
  grid-area: control;
}
.stages__itemImageBox {
  display: flex;
  align-items: center;
  gap: 20px;
}
.stages__itemImage {
  width: 65px;
  height: 65px;
}
.stages__itemTitleBox {
  display: flex;
  gap: 6px;
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 20px;
  color: var(--blue-dark-secondary);
  text-transform: uppercase;
}
.stages__itemList {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 10px;
}
.stages__itemText {
  display: flex;
  gap: 12px;
}
.stages__itemArrow {
  width: 6px;
  height: 6px;
  transform: rotate(90deg);
  margin-top: 8px;
  animation: slide 2s linear infinite;
}
.stages__button {
  display: flex;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
}
.stages__text {
  color: var(--brown-secondary);
}
.stages__title {
  color: var(--brown-secondary);
}

@media (max-width: 1023px) {
  .stages__content {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'request selection'
      'payment change'
      'control control';
  }
}

@media (max-width: 767px) {
  .stages__content {
    grid-template-columns: 1fr;
    grid-template-areas:
      'request'
      'selection'
      'payment'
      'change'
      'control';
  }
  .stages__itemImageBox {
    flex-direction: column;
    gap: 10px;
  }
  .stages__itemList {
    padding-left: 0;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0) rotate(90deg);
  }
  50% {
    transform: translateX(5px) rotate(90deg);
  }
  100% {
    transform: translateX(0) rotate(90deg);
  }
}
</style>
