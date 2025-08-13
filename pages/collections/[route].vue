<template>
  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage
    :desktopImage="currentCollection.details.desktopImage"
    :mobileImage="currentCollection.details.mobileImage"
  />
  <PageAppLeftTitleBadge location="collections" />

  <!-- Шапка -->
  <Header
    :linksData="headerCollectionNav"
    :phone="phone"
    :phoneNumber="phoneNumber"
    location="collections"
    :route="currentCollection.route"
  />

  <!-- Контент -->
  <main class="content">
    <!-- Блок Хединга с главным титлом -->
    <PageAppHeading
      :title="currentCollection.details.title"
      :headingList="currentCollection.details.subtitle"
      location="collections"
    />

    <!-- Блок О коллекции -->
    <section ref="brillianceAboutSecond" class="brillianceAboutSecond observer">
      <LazyPageBrillianceAboutSecond hydrate-on-visible />
    </section>

    <!-- Блок Каталог -->
    <section class="catalog" id="catalog">
      <LazyPageAppCatalog
        :data="currentCollection.details.products"
        hydrate-on-visible
      />
    </section>

    <!-- Блок О коллекции -->
    <section ref="brillianceAbout" class="brillianceAbout observer" id="about">
      <LazyPageBrillianceAbout hydrate-on-visible />
    </section>

    <!-- Блок О коллекции -->
    <section ref="brillianceAboutThird" class="brillianceAboutThird observer">
      <LazyPageBrillianceAboutThird
        :headingList="currentCollection.details.subtitle"
        hydrate-on-visible
      />
    </section>

    <!-- Блок О Цирконии -->
    <LazyPageBrillianceZirconium />
    <!-- <section class="brillianceZirconium brillianceZirconium_one">
      <img
        src="/images/collections/brilliance/img-zirconium-001.webp"
        alt="Картинка циркония"
        class="brillianceZirconium__image"
      />
      <div></div>
    </section> -->
  </main>

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
</template>

<script setup>
const { route } = useRoute().params;
import { collections } from '@/mock/collections/collections';
import { headerCollectionNav } from '@/mock/header-collection-nav';
import { phone, phoneNumber, address } from '@/mock/constants';

const currentCollection = collections.find((item) => item.route === route);

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
});

useHead({
  title: currentCollection.title,
  meta: [
    {
      name: 'description',
      content: currentCollection.description,
    },
  ],
});

useSeoMeta({
  title: currentCollection.title,
  ogTitle: currentCollection.title,
  description: currentCollection.description,
  ogDescription: currentCollection.description,
  ogImage: `https://nuxt-uveliropt-madde.vercel.app${currentCollection.OgImage}`,
  twitterCard: 'summary_large_image',
  ogUrl: `https://nuxt-uveliropt-madde.vercel.app/collections/${currentCollection.route}`,
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
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 70px 20px 0 20px;
}
/* .brillianceZirconium {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  border: 1px solid red;
}
.brillianceZirconium_one {
  padding-top: 70px;
}
.brillianceZirconium__image {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation: rotate-one 1.5s ease-in-out infinite;
} */

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
    margin-top: 60px;
  }
  .brillianceAboutThird {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .catalog {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

/* @keyframes rotate-one {
  0% {
    opacity: 0;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
    transform-origin: bottom left;
  }
} */
</style>
