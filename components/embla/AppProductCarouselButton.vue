<template>
  <button class="embla__imageBox" @click="openProductModal">
    <span class="itemName">{{ item.text }}</span>
    <img :src="item.imageSmall" :alt="item.text" class="embla__image" />
  </button>

  <Teleport to="#teleports">
    <ModalAppProduct
      :isProductModalOpen="isProductModalOpen"
      :item="item"
      @closeProductModal="closeProductModal"
    />
  </Teleport>
</template>

<script setup>
const { item } = defineProps(['item']);

const isProductModalOpen = ref(false);

const openProductModal = () => (isProductModalOpen.value = true);
const closeProductModal = () => (isProductModalOpen.value = false);
</script>

<style scoped>
.embla__imageBox {
  position: relative;
  height: 272px;
  border-radius: 15px;
  overflow: hidden;
}
.itemName {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--brown-secondary);
}
.embla__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
