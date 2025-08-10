<template>
  <div class="default-layout">
    <slot />
    <LazyFooter hydrate-on-visible />
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
