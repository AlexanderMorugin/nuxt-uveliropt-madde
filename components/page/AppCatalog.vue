<template>
  <PageAppSecondTitle title="Каталог" class="catalog__title" />
  <ul class="catalog__list">
    <li v-for="item in data" :key="item.id" class="catalog__listItem">
      <EmblaAppCatalogCarousel :data="item.slideItems" />

      <ul class="catalog__products">
        <li
          v-for="product in item.items"
          :key="product.id"
          class="catalog__productsItem"
        >
          <PageAppCatalogCard :product="product" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const { data } = defineProps(['data']);
</script>

<style scoped>
.catalog__title {
  color: var(--brown-secondary);
}
.catalog__list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
.catalog__listItem {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
}
.catalog__products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  padding-left: 20px;
}
.catalog__productsItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  .catalog__listItem {
    grid-template-columns: 1fr;
  }
  .catalog__products {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 10px;
    padding-left: 0;
  }
}
</style>
