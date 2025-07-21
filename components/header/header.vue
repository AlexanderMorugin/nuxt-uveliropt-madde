<template>
  <header class="header">
    <LayoutMainContainer>
      <NuxtLink to="/" class="link1">Эксклюзивные</NuxtLink>
      <NuxtLink to="/contact" class="link2">КОНТАКТЫ</NuxtLink>
    </LayoutMainContainer>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  border: 1px solid red;
}
.link1 {
  font-family: 'CormorantGaramond-Medium';
  font-size: 48px;
  color: black;
  text-decoration: none;
}
.link2 {
  font-family: 'Montserrat-Regular';
  letter-spacing: 1px;
  font-size: 30px;
  color: black;
  text-decoration: none;
}
</style>
