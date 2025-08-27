<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage :image="currentCollection.image" />

  <ClientOnly>
    <LazyPageAppLeftTitleBadge location="collections" />
  </ClientOnly>

  <!-- Шапка -->
  <Header
    :linksData="headerCollectionNav"
    location="collections"
    :route="currentCollection.route"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      :title="currentCollection.title"
      :headingList="currentCollection.subtitle"
      location="collections"
    />

    <!-- Блок О коллекции -->
    <section ref="brillianceAboutSecond" class="brillianceAboutSecond observer">
      <LazyPageBrillianceAboutSecond />
    </section>

    <!-- Блок Каталог -->
    <!-- <section class="catalog" id="catalog">
      <LazyPageAppCatalog
        :data="currentCollection.details.products"
        hydrate-on-visible
      />
    </section> -->

    <!-- Блок О коллекции -->
    <section ref="brillianceAbout" class="brillianceAbout observer" id="about">
      <LazyPageBrillianceAbout />
    </section>

    <!-- Блок Видео -->
    <LazyPageAppVideo />

    <!-- Блок О коллекции -->
    <section
      ref="brillianceAboutThird"
      class="brillianceAboutThird page-screen observer"
    >
      <LazyPageBrillianceAboutThird :headingList="currentCollection.subtitle" />
    </section>

    <!-- Блок О Цирконии -->
    <LazyPageBrillianceZirconium />

    <!-- Блок Огранка -->
    <LazyPageBrillianceCutting />

    <!-- Блок с контактами -->
    <!-- <section ref="contacts" class="contacts observer" id="contacts">
      <LazyPageAppContacts
        hydrate-on-visible
        :phone="phone"
        :phoneNumber="phoneNumber"
        :address="address"
      />
    </section> -->

    <!-- Блок с картой -->
    <LazyPageAppMap />
  </main>
</template>

<script setup>
const { route } = useRoute().params;
// import { phone, phoneNumber, address } from '@/mock/constants';

const { data: headerCollectionNav } = await useFetch(
  `/api/header/header-collection-nav/${route}`
);
const { data: currentCollection } = await useFetch(`/api/collections/${route}`);

const brillianceAbout = ref(null);
const brillianceAboutSecond = ref(null);
const brillianceAboutThird = ref(null);
const contacts = ref(null);

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

  if (brillianceAbout.value) {
    observer.observe(brillianceAbout.value);
  }
  if (brillianceAboutSecond.value) {
    observer.observe(brillianceAboutSecond.value);
  }
  if (brillianceAboutThird.value) {
    observer.observe(brillianceAboutThird.value);
  }
  if (contacts.value) {
    observer.observe(contacts.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

useHead({
  title: currentCollection.value.titleSeo,
  meta: [
    {
      name: 'description',
      content: currentCollection.value.descriptionSeo,
    },
  ],
});

useSeoMeta({
  title: currentCollection.value.titleSeo,
  ogTitle: currentCollection.value.titleSeo,
  description: currentCollection.value.descriptionSeo,
  ogDescription: currentCollection.value.descriptionSeo,
  ogImage: `https://nuxt-uveliropt-madde.vercel.app${currentCollection.value.OgImage}`,
  twitterCard: 'summary_large_image',
  ogUrl: `https://nuxt-uveliropt-madde.vercel.app/collections/${currentCollection.value.route}`,
  ogSiteName: 'MADDE - Эксклюзивные украшения из серебра',
  ogType: 'website',
  ogLocale: 'ru_RU',
});
</script>

<style scoped>
.brillianceAbout {
  padding-top: 70px;
}
.brillianceAboutSecond {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-02.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  margin-top: 70px;
}
.brillianceAboutThird {
  padding-top: 70px;
}
.catalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 70px 20px 0 20px;
}

@media (max-width: 767px) {
  .brillianceAbout {
    padding-top: 60px;
  }
  .brillianceAboutSecond {
    margin-top: 80px;
  }
  .brillianceAboutThird {
    padding-top: 60px;
  }
  .catalog {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
