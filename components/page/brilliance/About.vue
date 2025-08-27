<template>
  <div class="brillianceAbout__background">
    <div class="brillianceAbout__textBox">
      <PageAppSecondTitle title="О коллекции" class="brillianceAbout__title" />
      <PageBrillianceCollectionName
        name="Brilliance"
        class="brillianceAbout__name"
      />
      <p class="brillianceAbout__text page-screen text-monserat-accent">
        Коллекция Brilliance от MADDE – это бриллиантовая классика, воплощенная
        в серебре со вставками кубического циркония (CZ). Концепция коллекций -
        достигнуть максимального сходства с бриллиантовыми моделями из белого
        золота.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.brillianceAbout__background {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-01.webp');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}
.brillianceAbout__textBox {
  position: relative;
  background: linear-gradient(transparent 50%, var(--brown-secondary));
}
.brillianceAbout__title {
  position: absolute;
  top: 310px;
  right: 130px;
  color: var(--black-primary);
}
.brillianceAbout__name {
  position: absolute;
  top: 350px;
  right: 260px;
  font-size: 82px;
  text-shadow: rgba(137, 251, 251, 0.5) 0 0 0;
}
.brillianceAbout__text {
  color: var(--white-primary);
  padding-top: 495px;
  padding-bottom: 40px;
}

@media (max-width: 1279px) {
  .brillianceAbout__title {
    right: 40px;
  }
  .brillianceAbout__name {
    right: 160px;
  }
}

@media (max-width: 767px) {
  .brillianceAbout__textBox {
    background: linear-gradient(transparent 40%, var(--brown-secondary));
  }
  .brillianceAbout__title {
    top: 370px;
    left: 0;
    right: 0;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    color: var(--white-primary);
  }
  .brillianceAbout__name {
    top: 400px;
    left: 0;
    right: 0;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-size: 64px;
  }
  .brillianceAbout__text {
    padding-bottom: 20px;
  }
}
</style>
