<template>
  <p class="paragraphShadow">
    <slot />
  </p>
</template>

<script setup></script>

<style scoped>
.paragraphShadow {
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  line-height: 1.5;
  color: var(--white-primary);
  text-shadow: 1px 0 10px var(--brown-secondary),
    0 1px 10px var(--brown-secondary), -1px 0 10px var(--brown-secondary),
    0 -1px 10px var(--brown-secondary);
}
</style>
