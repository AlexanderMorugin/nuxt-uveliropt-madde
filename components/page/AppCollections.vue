<template>
  <!-- Блок с титлом -->
  <PageAppSecondTitle title="Коллекции" class="collections__title" />

  <ul class="collections__list">
    <li
      v-for="item in collections"
      :key="item.id"
      class="collections__listItem"
    >
      <NuxtLink :to="`collections/${item.route}`">
        <img
          loading="lazy"
          :src="item.thumb"
          :alt="item.name"
          class="collections__thumb"
        />
        <span class="collections__name">{{ item.name }}</span>
        <div class="collections__look">
          <span class="collections__lookText">Смотреть</span>
          <img
            loading="lazy"
            src="/icons/icon-arrow-white.svg"
            alt="Стрелка"
            class="collections__lookArrow"
          />
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const { collections } = defineProps(['collections']);
</script>

<style scoped>
.collections__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 10px;
}
.collections__listItem {
  position: relative;
}
.collections__thumb {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 7px;
}
.collections__name {
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 22px;
  color: var(--white-primary);
  transition: 0.3s all;
}
.collections__title {
  color: var(--brown-secondary);
}
.collections__look {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
}
.collections__lookText {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--white-primary);
  transition: 0.8s all;
}
.collections__lookArrow {
  height: 12px;
  transform: rotate(180deg);
}
.collections__listItem:hover .collections__name {
  color: var(--red-primary);
}
.collections__listItem:hover .collections__lookText {
  color: var(--red-primary);
}

@media (max-width: 1023px) {
  .collections__list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 2px;
  }
}

@media (max-width: 767px) {
  .collections__list {
    grid-template-columns: 1fr;
  }
}
</style>
