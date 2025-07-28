<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script setup></script>

<style scoped>
.paragraph {
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 18px;
  color: var(--brown-fourdary);
}

/* @media (max-width: 767px) {
  .paragraph {
    font-size: 16px;
  }
} */
</style>
