<template>
  <div class="heading">
    <!-- <LayoutMainContainer> -->
    <!-- <div class="heading__container"> -->
    <h1 class="heading__title">{{ title }}</h1>

    <ul class="heading__list">
      <li
        v-for="item in headingMainList"
        :key="item.id"
        class="heading__listItem"
      >
        <span class="heading__listItemText">{{ item.text }}</span>
      </li>
    </ul>
    <!-- </div> -->
    <!-- </LayoutMainContainer> -->
  </div>
</template>

<script setup>
const { title, headingMainList } = defineProps(['title', 'headingMainList']);
</script>

<style scoped>
.heading {
  position: relative;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  padding-top: 90px;
  padding-bottom: 20px;
  /* padding-left: 20px;
  padding-right: 20px; */
  z-index: 20;

  border: 1px solid red;
}
/* .heading__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
} */
.heading__title {
  width: 100%;
  max-width: 580px;
  font-family: 'CormorantGaramond-Medium';
  font-size: 60px;
  color: var(--white-primary);
  padding-left: 20px;
  padding-right: 20px;
}
.heading__list {
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.heading__listItem {
  display: flex;
  align-items: center;
  height: 36px;
  padding-left: 20px;
  padding-right: 20px;
}
.heading__listItemText {
  font-family: 'Montserrat-Regular';
  font-size: 18px;
  color: var(--white-primary);
}

@media (max-width: 1023px) {
  .heading {
    padding-top: 180px;
  }
  .heading__list {
    background: rgba(0, 0, 0, 0.2);
  }
  .heading__title {
    font-size: 51px;
    /* max-width: 480px; */
  }
}

@media (max-width: 767px) {
  /* .heading {
    padding-top: 250px;
  } */
  .heading__title {
    font-size: 40px;
    max-width: 380px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .heading__listItem {
    height: 27px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .heading__listItemText {
    font-size: 16px;
  }
}

@media (max-width: 479px) {
  /* .heading {
    max-width: 330px;
  } */
  .heading__title {
    font-size: 32px;
    max-width: 330px;
  }
  .heading__listItem {
    height: 24px;
  }
  .heading__listItemText {
    font-size: 14px;
  }
}
</style>
