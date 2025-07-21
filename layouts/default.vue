<template>
  <div class="default-layout">
    <Header />
    <main>
      <slot />
    </main>
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
