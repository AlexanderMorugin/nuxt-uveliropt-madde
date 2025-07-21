<template>
  <header class="header">
    <LayoutMainContainer>
      <ul class="header__nav">
        <li v-for="item in headerNav" :key="item.id">
          <NuxtLink :to="item.route" class="header__link">{{
            item.title
          }}</NuxtLink>
        </li>
      </ul>
    </LayoutMainContainer>
  </header>
</template>

<script setup>
import { headerNav } from '@/mock/header-nav';
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  border: 1px solid red;
}
.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__link {
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: var(--black-primary);
  text-transform: uppercase;
}
</style>
