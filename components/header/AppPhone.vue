<template>
  <!-- Телефон для скрольной шапки -->
  <a
    v-if="props.isScroll"
    :href="`tel:${props.phone}`"
    title="Позвонить"
    class="headerPhone headerPhone_scroll"
    >{{ props.phoneNumber }}</a
  >

  <!-- Телефон для обычной шапки шапки и подвала -->
  <a
    v-else
    :href="`tel:${props.phone}`"
    title="Позвонить"
    :class="['headerPhone', { headerPhone_footer: location === 'footer' }]"
    >{{ props.phoneNumber }}</a
  >
</template>

<script setup>
const props = defineProps(['phone', 'phoneNumber', 'location', 'isScroll']);
</script>

<style scoped>
.headerPhone {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--white-primary);
  white-space: nowrap;
  transition: 0.3s ease all;
}
.headerPhone:hover {
  color: var(--blue-primary);
}
.headerPhone_footer {
  font-size: 26px;
  color: var(--brown-secondary);
  transition: 0.3s ease all;
}
.headerPhone_footer:hover {
  color: var(--brown-thirdary);
}
.headerPhone_scroll {
  color: var(--black-primary);
}
.headerPhone_scroll:hover {
  color: var(--grey-dark-primary);
}

@media (max-width: 1023px) {
  .headerPhone {
    font-size: 13px;
  }
  .headerPhone_footer {
    font-size: 26px;
  }
}

@media (max-width: 767px) {
  .headerPhone {
    font-size: 16px;
  }
  .headerPhone_footer {
    font-size: 18px;
  }
}
</style>
