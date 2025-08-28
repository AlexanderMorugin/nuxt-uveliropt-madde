<template>
  <button class="catalogCard" @click="openProductModal">
    <span class="catalogCard__name">{{ product.text }}</span>
    <img
      loading="lazy"
      :src="product.imageSmall"
      :alt="product.text"
      class="catalogCard__image"
    />
  </button>

  <Teleport to="#teleports">
    <ModalAppProduct
      :isProductModalOpen="isProductModalOpen"
      :item="product"
      @closeProductModal="closeProductModal"
    />
  </Teleport>
</template>

<script setup>
const { product } = defineProps(['product']);

const isProductModalOpen = ref(false);

const openProductModal = () => (isProductModalOpen.value = true);
const closeProductModal = () => (isProductModalOpen.value = false);
</script>

<style scoped>
.catalogCard {
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}
.catalogCard__name {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 20px;
  color: var(--brown-secondary);
}
.catalogCard__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .catalogCard__name {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
  }
}
</style>
