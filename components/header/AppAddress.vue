<template>
  <div class="address">
    <a :href="`mailto:${email}`" class="address__text">{{ email }}</a>
    <a :href="`tel:${phone}`" class="address__text">{{ phoneNumber }}</a>
    <span class="address__text">{{ address }}</span>
  </div>
</template>

<script setup>
import { email, phone, phoneNumber, address } from '@/mock/constants';
</script>

<style scoped>
.address {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.address__text {
  font-family: 'CormorantGaramond-Medium';
  font-size: 18px;
  color: var(--white-primary);
}
</style>
