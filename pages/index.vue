<template>
  <div>
    <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
    <div class="mainPageImage">
      <img
        fetchpriority="high"
        src="/images/img-main-01.webp"
        alt="Подложка"
        class="mainPageImage__item"
      />
    </div>

    <ClientOnly>
      <LazyPageAppLeftTitleBadge />
    </ClientOnly>

    <!-- Шапка -->
    <Header :linksData="headerMainNav" />

    <!-- Контент -->
    <main class="content">
      <!-- Блок Хединга с главным титлом -->
      <PageAppHeading
        title="Эксклюзивные украшения из Италии"
        :headingList="headingMainList"
      />

      <!-- Блок Коллекции -->
      <section
        ref="collectionsRef"
        class="collections page-screen observer"
        id="collections"
      >
        <LazyPageAppCollections :collections="collections" />
      </section>

      <!-- Блок Ювелирный бренд MADDE -->
      <section ref="aboutRef" class="about observer" id="about">
        <LazyPageAppAbout />
      </section>

      <!-- Блок Выгоды сотрудничества -->
      <section
        ref="cooperationRef"
        class="cooperation observer"
        id="cooperation"
      >
        <LazyPageAppCooperation />
      </section>

      <!-- Блок Этапы работы -->
      <section ref="stagesRef" class="stages page-screen observer">
        <LazyPageAppStages />
      </section>

      <!-- Блок Выставки -->
      <section ref="exhibitionsRef" class="exhibitions page-screen observer">
        <LazyPageAppExhibitions />
      </section>

      <!-- Слайдер Выставки -->
      <section ref="exhibitionCarouselRef" class="contentCarousel observer">
        <LazyEmblaAppCenterCarousel :data="exebitionPhoto" />
      </section>

      <!-- Блок Часто задаваемые вопросы -->
      <section ref="questionsRef" class="questions observer" id="questions">
        <LazyPageAppQuestions />
      </section>
    </main>
  </div>
</template>

<script setup>
const { data: headerMainNav } = await useFetch('/api/header/header-main-nav');
const { data: headingMainList } = await useFetch(
  '/api/heading/heading-main-list'
);
const { data: collections } = await useFetch('/api/collections/collections');
const { data: exebitionPhoto } = await useFetch(
  '/api/exebition/exebition-photo'
);

const collectionsRef = ref(null);
const aboutRef = ref(null);
const cooperationRef = ref(null);
const stagesRef = ref(null);
const exhibitionsRef = ref(null);
const exhibitionCarouselRef = ref(null);
const questionsRef = ref(null);
const questionsFormRef = ref(null);
const contactsRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observer_animate');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  if (collectionsRef.value) {
    observer.observe(collectionsRef.value);
  }

  if (aboutRef.value) {
    observer.observe(aboutRef.value);
  }

  if (cooperationRef.value) {
    observer.observe(cooperationRef.value);
  }

  if (stagesRef.value) {
    observer.observe(stagesRef.value);
  }

  if (exhibitionsRef.value) {
    observer.observe(exhibitionsRef.value);
  }

  if (exhibitionCarouselRef.value) {
    observer.observe(exhibitionCarouselRef.value);
  }

  if (questionsRef.value) {
    observer.observe(questionsRef.value);
  }

  if (questionsFormRef.value) {
    observer.observe(questionsFormRef.value);
  }

  if (contactsRef.value) {
    observer.observe(contactsRef.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
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
.mainPageImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
}
.mainPageImage__item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top right;
}
.collections {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
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
  padding-top: 70px;
}
.exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 70px;
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
  .mainPageImage {
    height: 700px;
  }
  .mainPageImage__item {
    object-position: top 0 right -200px;
  }
  .collections {
    padding-top: 60px;
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
  }
  .exhibitions {
    padding-top: 60px;
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
