<template>
  <footer class="footer page-screen flex-between">
    <p class="footer__text">Ювелирный бренд MADDE &copy; 2025</p>
    <p class="footer__text">ИНН 7743820574</p>
    <p class="footer__text">ОГРН 1117746459104</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--background-primary);
  padding-top: 50px;
  padding-bottom: 50px;
}
.footer__text {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .footer {
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
  }
}
</style>
