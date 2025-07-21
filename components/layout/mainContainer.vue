<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid red;
}
</style>
