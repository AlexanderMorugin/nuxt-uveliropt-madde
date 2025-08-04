<template>
  <section class="brillianceAbout" id="about">
    <!-- Блок с титлом и текстами -->
    <div class="brillianceAbout__container">
      <div class="brillianceAbout__textBox">
        <PageAppSecondTitle
          title="О коллекции"
          class="brillianceAbout__title"
        />

        <PageAppCollectionName
          name="Brilliance"
          class="brillianceAbout__name"
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

<script setup></script>

<style scoped>
.brillianceAbout {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-01.webp');
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
  padding: 100px 20px;
}
.brillianceAbout__textBox {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  max-width: 620px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 20px;
}
.brillianceAbout__title {
  color: var(--black-primary);
  padding: 0;
}
.brillianceAbout__name {
  position: absolute;
  top: 70px;
  right: 80px;
}
.brillianceAbout__text {
  font-size: 24px;
  color: var(--black-primary);
}

@media (max-width: 767px) {
  .brillianceAbout__container {
    padding: 0;
  }
  .brillianceAbout__textBox {
    align-items: center;
    gap: 320px;
    max-width: 100%;
    background: none;
    border-radius: 0;
    padding: 40px 10px;
  }
  .brillianceAbout__title {
    color: var(--white-primary);
    text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary);
  }
  .brillianceAbout__text {
    font-size: 18px;
    color: var(--white-primary);
    text-shadow: 1px 0 20px var(--black-primary),
      0 1px 20px var(--black-primary), -1px 0 20px var(--black-primary),
      0 -1px 20px var(--black-primary);
  }
  .brillianceAbout__name {
    position: absolute;
    right: auto;
    left: 10px;
  }
}
</style>
