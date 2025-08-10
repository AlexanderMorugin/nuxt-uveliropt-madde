<template>
  <!-- <section class="catalog" id="catalog"> -->
  <PageAppSecondTitle title="Каталог" class="catalog__title" />
  <ul class="catalog__list">
    <li v-for="item in data" :key="item.id" class="catalog__listItem">
      <!-- {{ item.slideItems }} -->
      <EmblaAppCatalogCarousel :data="item.slideItems" />
      <!-- <PageAppCatalogCard :product="item.slideItems"/> -->
      <ul class="catalog__products">
        <li
          v-for="product in item.items"
          :key="product.id"
          class="catalog__productsItem"
        >
          <!-- {{ product}} -->
          <PageAppCatalogCard :product="product" />
        </li>
      </ul>
    </li>
  </ul>
  <!-- </section> -->
</template>

<script setup>
const { data } = defineProps(['data']);
</script>

<style scoped>
/* .catalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 70px 20px 0 20px;


} */
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
  /* gap: 20px; */
  width: 100%;

  /* border: 1px solid red; */
  /* width: 570px;
  height: 570px; */
  /* border: 1px solid red; */
}
.catalog__products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  padding-left: 20px;

  /* border: 1px solid green; */
  /* width: fit-content; */
}
.catalog__productsItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  /* .catalog {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  } */
  .catalog__listItem {
    grid-template-columns: 1fr;
  }
  .catalog__products {
    grid-template-columns: repeat(2, 1fr);
    /* align-items: center; */
    gap: 10px;
    padding-left: 0;
  }
}
</style>
