<template>
  <section class="brillianceAbout" id="brillianceAbout">
    <!-- Блок с титлом и текстами -->
    <div class="brillianceAbout__container">
      <div class="brillianceAbout__textBox">
        <PageAppSecondTitle
          title="О коллекции Brilliance"
          class="brillianceAbout__title"
        />
        <PageAppParagraph class="brillianceAbout__text"
          >Коллекция Brilliance от MADDE – это бриллиантовая классика,
          воплощенная в серебре со вставками кубического циркония (CZ).
          Концепция коллекций - достигнуть максимального сходства с
          бриллиантовыми моделями из белого золота.</PageAppParagraph
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutPhoto } from '@/mock/about-photo';
</script>

<style scoped>
.brillianceAbout {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about.webp');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  margin-top: 70px;
}
.brillianceAbout__container {
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px;
}
.brillianceAbout__textBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 620px;
  background: rgba(101, 82, 70, 0.4);
  border-radius: 15px;
  padding: 20px;
}
.brillianceAbout__title {
  color: var(--white-primary);
  padding: 0;
}
.brillianceAbout__text {
  font-size: 24px;
  color: var(--white-primary);
}

@media (max-width: 767px) {
  .brillianceAbout__container {
    padding: 0;
  }
  .brillianceAbout__textBox {
    align-items: center;
    max-width: 100%;
    border-radius: 0;
    padding: 40px 10px;
    /* padding-right: 10px; */
  }
  .brillianceAbout__text {
    font-size: 18px;
  }
}
</style>
