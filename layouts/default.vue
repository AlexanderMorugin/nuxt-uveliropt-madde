<template>
  <div class="default-layout">
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.default-layout {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
