<template>
  <section ref="exhibitionsBlock" class="exhibitions page-screen observer">
    <!-- Блок с титлом -->
    <PageAppSecondTitle title="Выставки" class="exhibitions__title" />

    <p class="exhibitions__text text-monserat">
      Приглашаем посетить стенд компании MADDE на выставке для знакомства со
      всем ассортиментом и условиями сотрудничества
    </p>

    <div>
      <img
        loading="lazy"
        src="/images/img-exhibitions-01.webp"
        alt="Выставка JunWex"
        class="exhibitions__image"
      />
      <p class="exhibitions__text text-monserat">
        27 сентября - 1 октября<br />Москва, ВДНХ, павильон 75
      </p>
    </div>

    <!-- Модалка заявки пригласительного, с кнопкой -->
    <ClientOnly>
      <LazyModalAppCooperation buttonTitle="Получить пригласительный" />
    </ClientOnly>
  </section>
</template>

<script setup>
const exhibitionsBlock = ref(null);

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

  if (exhibitionsBlock.value) {
    observer.observe(exhibitionsBlock.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 70px;
}
.exhibitions__text {
  width: 100%;
  max-width: 730px;
  color: var(--brown-secondary);
  text-align: center;
}
.exhibitions__image {
  width: 100%;
  max-width: 640px;
}
.exhibitions__title {
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .exhibitions {
    padding-top: 60px;
  }
}
</style>
