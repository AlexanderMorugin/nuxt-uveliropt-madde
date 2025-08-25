<template>
  <section
    ref="collectionsBlock"
    class="collections page-screen observer"
    id="collections"
  >
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Коллекции" class="collections__title" />

    <ul class="collections__list">
      <li
        v-for="item in collections"
        :key="item.id"
        class="collections__listItem"
      >
        <NuxtLink :to="`collections/${item.route}`">
          <img
            loading="lazy"
            :src="item.thumb"
            :alt="item.name"
            class="collections__thumb"
          />
          <span class="collections__name">{{ item.name }}</span>
          <div class="collections__look">
            <span class="collections__lookText">Смотреть</span>
            <img
              fetchpriority="low"
              loading="lazy"
              src="/icons/icon-arrow-white.svg"
              alt="Стрелка"
              class="collections__lookArrow"
            />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { collections } = defineProps(['collections']);

const collectionsBlock = ref(null);

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

  if (collectionsBlock.value) {
    observer.observe(collectionsBlock.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.collections {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
}
.collections__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 10px;
}
.collections__listItem {
  position: relative;
}
.collections__thumb {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 7px;
}
.collections__name {
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 22px;
  color: var(--white-primary);
  transition: 0.3s all;
}
.collections__title {
  color: var(--brown-secondary);
}
.collections__look {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
}
.collections__lookText {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--white-primary);
  transition: 0.8s all;
}
.collections__lookArrow {
  height: 12px;
  transform: rotate(180deg);
}
.collections__listItem:hover .collections__name {
  color: var(--red-primary);
}
.collections__listItem:hover .collections__lookText {
  color: var(--red-primary);
}

@media (max-width: 1023px) {
  .collections__list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 2px;
  }
}

@media (max-width: 767px) {
  .collections {
    padding-top: 60px;
  }
  .collections__list {
    grid-template-columns: 1fr;
  }
}
</style>
