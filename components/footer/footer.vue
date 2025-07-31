<template>
  <footer class="footer">
    <span class="footer__text">Ювелирный бренд MADDE &copy; 2025</span>
    <span class="footer__text">ИНН 7743820574</span>
    <span class="footer__text">ОГРН 1117746459104</span>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  background: var(--background-primary);
  margin: 0 auto;
  padding: 50px 20px;
}
.footer__text {
  font-family: 'Montserrat-Regular';
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
