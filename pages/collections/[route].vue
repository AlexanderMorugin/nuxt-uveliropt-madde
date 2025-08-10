<template>
  <!-- <Head>
      <Title>{{ route }}</Title>
    </Head> -->

  <!-- Верхняя картинка и левый боковой бейдж, под шапкой и блоком хединга -->
  <PageAppMainImage
    :desktopImage="currentCollection.details.desktopImage"
    :mobileImage="currentCollection.details.mobileImage"
  />
  <PageAppLeftTitleBadge />

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
      <LazyPageAppBrillianceAboutSecond hydrate-on-visible />
    </section>

    <!-- Блок Каталог -->
    <section ref="catalog" class="catalog observer" id="catalog">
      <LazyPageAppCatalog
        :data="currentCollection.details.products"
        hydrate-on-visible
      />
    </section>

    <!-- Блок О коллекции -->
    <section ref="brillianceAbout" class="brillianceAbout observer" id="about">
      <LazyPageAppBrillianceAbout hydrate-on-visible />
    </section>
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

const brillianceAboutSecond = ref(null);
const catalog = ref(null);
const brillianceAbout = ref(null);
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

  if (brillianceAboutSecond.value) {
    observer.observe(brillianceAboutSecond.value);
  }
  if (catalog.value) {
    observer.observe(catalog.value);
  }
  if (brillianceAbout.value) {
    observer.observe(brillianceAbout.value);
  }
  if (contacts.value) {
    observer.observe(contacts.value);
  }
});
</script>

<style scoped>
.brillianceAboutSecond {
  width: 100%;
  background-image: url('/images/collections/brilliance/img-brilliance-about-02.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  margin-top: 70px;
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
.brillianceAbout {
  padding-top: 70px;
}

@media (max-width: 767px) {
  .brillianceAboutSecond {
    margin-top: 60px;
  }
  .catalog {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .brillianceAbout {
    padding-top: 60px;
  }
}
/* .content__secondTitle {
  color: var(--brown-secondary);
} */
/* .content__carouselList {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%; */
/* margin: 0 auto; */
/* padding-top: 70px; */
/* } */
</style>
