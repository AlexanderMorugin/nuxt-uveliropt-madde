<template>
  <PageAppCooperationButton
    :title="buttonTitle"
    @openCooperationModal="openCooperationModal"
  />

  <!-- Модалка с формой заявки на сотрудничество -->
  <Teleport to="#teleports">
    <PageAppCooperationModal
      :isCooperationModalOpen="isCooperationModalOpen"
      @closeCooperationModal="closeCooperationModal"
      title="Оставить заявку"
    >
      <FormAppRequest @closeCooperationModal="closeCooperationModal" />
    </PageAppCooperationModal>
  </Teleport>
</template>

<script setup>
const { buttonTitle } = defineProps(['buttonTitle']);

const isCooperationModalOpen = ref(false);

const openCooperationModal = () => (isCooperationModalOpen.value = true);
const closeCooperationModal = () => (isCooperationModalOpen.value = false);

</script>
