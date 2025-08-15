<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage :desktopImage="DesktopImage" :mobileImage="MobileImage" />
  <PageAppLeftTitleBadge />

  <!-- Шапка -->
  <Header
    :linksData="headerMainNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      title="Эксклюзивные украшения из Италии"
      :headingList="headingMainList"
    />

    <LazyPageAppVideo />

    <!-- Блок Коллекции -->
    <section
      ref="collectionsBlock"
      class="collections observer"
      id="collections"
    >
      <LazyPageAppCollections :collections="collections" hydrate-on-visible />
    </section>

    <!-- Блок Ювелирный бренд MADDE -->
    <section ref="about" class="about observer" id="about">
      <LazyPageAppAbout hydrate-on-visible />
    </section>

    <!-- Блок Выгоды сотрудничества -->
    <section ref="cooperation" class="cooperation observer" id="cooperation">
      <LazyPageAppCooperation hydrate-on-visible />
    </section>

    <!-- Блок Этапы работы -->
    <section ref="stages" class="stages observer">
      <LazyPageAppStages hydrate-on-visible />
    </section>

    <!-- Блок Выставки -->
    <section ref="exhibitions" class="exhibitions observer">
      <LazyPageAppExhibitions hydrate-on-visible />
    </section>

    <!-- Слайдер Выставки -->
    <section ref="exhibitionCarousel" class="content__carousel observer">
      <LazyEmblaAppCenterCarousel :data="exebitionPhoto" hydrate-on-visible />
    </section>

    <!-- Блок Часто задаваемые вопросы -->
    <section ref="questions" class="questions observer" id="questions">
      <LazyPageAppQuestions hydrate-on-visible />
    </section>

    <!-- Блок Остались вопросы? -->
    <section ref="questionsForm" class="questionsForm observer">
      <LazyPageAppQuestionsForm hydrate-on-visible />
    </section>

    <!-- Блок с контактами -->
    <section ref="contacts" class="contacts observer" id="contacts">
      <LazyPageAppContacts
        hydrate-on-visible
        :phone="phone"
        :phoneNumber="phoneNumber"
        :address="address"
      />
    </section>

    <!-- Блок с картой -->
    <LazyPageAppMap hydrate-on-visible />
  </main>
</template>

<script setup>
import { headerMainNav } from '@/mock/header-main-nav';
import { headingMainList } from '@/mock/heading-main-list';
import { phone, phoneNumber, address } from '@/mock/constants';
import { exebitionPhoto } from '@/mock/exebition-photo';
import { collections } from '@/mock/collections/collections';
import DesktopImage from '/images/img-01-desktop.webp';
import MobileImage from '/images/img-01-mobile.webp';

const collectionsBlock = ref(null);
const about = ref(null);
const cooperation = ref(null);
const stages = ref(null);
const exhibitions = ref(null);
const exhibitionCarousel = ref(null);
const questions = ref(null);
const questionsForm = ref(null);
const contacts = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observer_animate');
        }
        // else {
        //   entry.target.classList.remove('observer_animate');
        // }
      });
    },
    {
      threshold: 0.2,
    }
  );

  if (collectionsBlock.value) {
    observer.observe(collectionsBlock.value);
  }

  if (about.value) {
    observer.observe(about.value);
  }

  if (cooperation.value) {
    observer.observe(cooperation.value);
  }

  if (stages.value) {
    observer.observe(stages.value);
  }

  if (exhibitions.value) {
    observer.observe(exhibitions.value);
  }

  if (exhibitionCarousel.value) {
    observer.observe(exhibitionCarousel.value);
  }

  if (questions.value) {
    observer.observe(questions.value);
  }

  if (questionsForm.value) {
    observer.observe(questionsForm.value);
  }

  if (contacts.value) {
    observer.observe(contacts.value);
  }
});

useHead({
  title: 'MADDE - Эксклюзивные украшения из серебра',
  meta: [
    {
      name: 'description',
      content:
        'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
    },
  ],
});

useSeoMeta({
  title: 'MADDE - Эксклюзивные украшения из серебра',
  ogTitle: 'MADDE - Эксклюзивные украшения из серебра',
  description:
    'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
  ogDescription:
    'Компания импортёр серебряных ювелирных украшений из Италии и Гонконга',
  ogImage: 'https://nuxt-uveliropt-madde.vercel.app/images/img-01-desktop.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://nuxt-uveliropt-madde.vercel.app/',
  ogSiteName: 'MADDE - Эксклюзивные украшения из серебра',
  ogType: 'website',
  ogLocale: 'ru_RU',
});
</script>

<style scoped>
.collections {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.about {
  position: relative;
  height: 870px;
  padding-top: 70px;
}
.cooperation {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
}
.stages {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
.questions {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
}
.questionsForm {
  width: 100%;
  background-image: url('/images/img-questions-form-01.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  padding-top: 40px;
  margin-top: 100px;
}

@media (max-width: 1023px) {
  .questionsForm {
    background-position: top 0 right -300px;
  }
}

@media (max-width: 767px) {
  .collections {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .about {
    height: min-content;
    padding-top: 60px;
  }
  .cooperation {
    padding-top: 60px;
  }
  .stages {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .exhibitions {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .questions {
    padding-top: 60px;
  }
  .questionsForm {
    background-position: top 0 left 0;
    margin-top: 80px;
  }
}
</style>
