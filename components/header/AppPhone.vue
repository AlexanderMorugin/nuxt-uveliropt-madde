<template>
  <a :href="`tel:${props.phone}`" title="Позвонить" class="headerPhone">{{
    props.phoneNumber
  }}</a>
</template>

<script setup>
const props = defineProps(['phone', 'phoneNumber']);
</script>

<style scoped>
.headerPhone {
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: var(--white-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerPhone:hover {
  color: var(--blue-primary);
}

@media (max-width: 1023px) {
  .headerPhone {
    font-size: 13px;
  }
}
</style>
