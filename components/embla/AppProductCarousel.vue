<template>
  <div class="embla">
    <div class="categoryName">
      <span class="categoryName__title">{{ data.title }}</span>
      <div class="embla__buttons">
        <!-- Кнопка-стрелка навигации "НАЗАД" -->
        <button
          @click="scrollPrev"
          :disabled="!canScrollPrev"
          :class="['embla__button', { embla__button_disabled: !canScrollPrev }]"
        >
          <img
            loading="lazy"
            src="/icons/icon-carousel-arrow.svg"
            alt="Стрелка"
            :class="[
              'embla__buttonArrow',
              { embla__buttonArrow_disabled: !canScrollPrev },
            ]"
          />
        </button>

        <!-- Кнопка-стрелка навигации "ВПЕРЕД" -->
        <button
          @click="scrollNext"
          :disabled="!canScrollNext"
          :class="['embla__button', { embla__button_disabled: !canScrollNext }]"
        >
          <img
            loading="lazy"
            src="/icons/icon-carousel-arrow.svg"
            alt="Стрелка"
            :class="[
              'embla__buttonArrowRight',
              { embla__buttonArrow_disabled: !canScrollNext },
            ]"
          />
        </button>
      </div>
    </div>

    <div class="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="item in data.items" :key="item.id" class="embla__slide">
          <EmblaAppProductCarouselButton :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
const { data } = defineProps(['data']);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const [emblaRef, emblaApi] = emblaCarouselVue({
  dragFree: true,
  align: 'start',
});

const onSelect = (emblaApi) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value.scrollNext();

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value.scrollPrev();

function updateButtonStates(emblaApi) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on('select', updateButtonStates);

  onSelect(emblaApi.value);
});
</script>

<style scoped>
.embla {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  --slide-spacing: 1rem;
  --slide-spacing-m: 10px;
  --slide-size: 288px;
  --slide-size-l: 256px;
  --slide-size-m: 50%;
  overflow: hidden;
}
.categoryName {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.categoryName__title {
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--brown-secondary);
  padding-left: 20px;
  border-bottom: 1px solid var(--brown-secondary);
}
.embla__viewport {
  margin-top: 10px;
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.embla__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
  padding-right: 20px;
}
.embla__button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.embla__button_disabled {
  cursor: default;
}
.embla__buttonArrow {
  height: 14px;
}
.embla__buttonArrowRight {
  height: 14px;
  transform: rotate(180deg);
}
.embla__buttonArrow_disabled {
  opacity: 0.3;
}

@media (max-width: 1024px) {
  .embla__slide {
    flex: 0 0 var(--slide-size-l);
    padding-left: var(--slide-spacing-m);
  }
}

@media (max-width: 479px) {
  .embla__slide {
    flex: 0 0 var(--slide-size-m);
  }
}
</style>
