<template>
  <section class="collections" id="collections">
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Коллекции" class="collections__title" />

    <ul class="collections__list">
      <li
        v-for="item in collections"
        :key="item.id"
        class="collections__listItem"
      >
        <NuxtLink :to="`collections/${item.route}`">
          <img :src="item.thumb" :alt="item.name" class="collections__thumb" />
          <span class="collections__name">{{ item.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { collections } = defineProps(['collections']);
</script>

<style scoped>
.collections {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.collections__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 10px;
}
.collections__listItem {
  position: relative;
  /* width: 100%;
  height: 260px; */
}
.collections__thumb {
  width: 100%;
  height: 260px;
  object-fit: cover;
}
.collections__name {
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Montserrat-Regular';
  font-size: 22px;
  color: var(--white-primary);
}
.collections__title {
  color: var(--brown-fourdary);
}

@media (max-width: 1023px) {
  .collections__list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 2px;
  }
}

@media (max-width: 767px) {
  .collections {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .collections__list {
    grid-template-columns: 1fr;
  }
}
</style>
