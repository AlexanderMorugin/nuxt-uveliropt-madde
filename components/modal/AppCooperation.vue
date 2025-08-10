<template>
  <!-- Кнопка модалки -->
  <PageAppCooperationButton
    :title="buttonTitle"
    :location="location"
    @openCooperationModal="openCooperationModal"
  />

  <!-- Модалка с формой заявки на сотрудничество -->
  <Teleport to="#teleports">
    <ClientOnly>
      <PageAppCooperationModal
        :isCooperationModalOpen="isCooperationModalOpen"
        @closeCooperationModal="closeCooperationModal"
        title="Оставить заявку"
      >
        <FormAppRequest @closeCooperationModal="closeCooperationModal" />
      </PageAppCooperationModal>
    </ClientOnly>
  </Teleport>
</template>

<script setup>
const { buttonTitle, location } = defineProps(['buttonTitle', 'location']);

const isCooperationModalOpen = ref(false);

const openCooperationModal = () => (isCooperationModalOpen.value = true);
const closeCooperationModal = () => (isCooperationModalOpen.value = false);
</script>
