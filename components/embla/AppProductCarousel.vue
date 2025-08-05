<template>
  <section className="embla">
    <div className="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="item in data" :key="item.id" class="embla__slide">
          <div class="embla__imageBox">
            <AppParagraph class="embla__name">{{ item.text }}</AppParagraph>
            <img
              :src="item.imageMedium"
              :alt="item.text"
              class="embla__image"
            />
          </div>
        </li>
      </ul>
    </div>
    <!-- </section> -->
    <!-- Блок навигации-пагинации -->
    <div class="embla__navigation">
      <div class="embla__buttons">
        <!-- Кнопка-стрелка навигации "НАЗАД" -->
        <button
          @click="scrollPrev"
          :disabled="!canScrollPrev"
          :class="['embla__button', { embla__button_disabled: !canScrollPrev }]"
        >
          <img
            src="/icons/icon-carousel-arrow.svg"
            alt="Стрелка"
            :class="[
              'embla__buttonArrow',
              { embla__buttonArrow_disabled: !canScrollPrev },
            ]"
          />
        </button>

        <!-- Кнопки-точки пагинации -->
        <div class="embla__dots">
          <button
            v-for="(dot, index) in dots"
            @click="scrollTo(index)"
            :key="index"
            class="embla__dotButton"
          >
            <div
              :class="[
                'embla__dot',
                { embla__dot_active: selectedIndex === index },
              ]"
            />
          </button>
        </div>

        <!-- Кнопка-стрелка навигации "ВПЕРЕД" -->
        <button
          @click="scrollNext"
          :disabled="!canScrollNext"
          :class="['embla__button', { embla__button_disabled: !canScrollNext }]"
        >
          <img
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
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
const { data } = defineProps(['data']);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const selectedIndex = ref(0);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);
const dots = ref([]);

const [emblaRef, emblaApi] = emblaCarouselVue(
  { dragFree: true, align: 'start', loop: true },
  [Autoplay({ stopOnInteraction: false })]
);

const onSelect = (emblaApi) => {
  selectedIndex.value = emblaApi.selectedScrollSnap();
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

const createDots = (emblaApi) => {
  dots.value = emblaApi.scrollSnapList();
};
// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value.scrollNext();

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value.scrollPrev();

// Функция перехода к слайду, по нажатию на Thumb
const scrollTo = (index) => emblaApi.value?.scrollTo(index);

function updateButtonStates(emblaApi) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on('select', updateButtonStates);

  onSelect(emblaApi.value);
  createDots(emblaApi.value);

  emblaApi.value.on('select', onSelect);
  emblaApi.value.on('reInit', createDots);
});
</script>

<style scoped>
.embla {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  --slide-spacing: 1rem;
  --slide-size: 300px;
  --slide-size-m: 100%;
  overflow: hidden;
}
.embla__viewport {
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
}
.embla__imageBox {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.embla__name {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--brown-secondary);
}
.embla__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.embla__navigation {
  display: flex;
  padding-left: 20px;
  margin-top: 40px;
}
.embla__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
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
  height: 16px;
}
.embla__buttonArrowRight {
  height: 16px;
  transform: rotate(180deg);
}
.embla__buttonArrow_disabled {
  opacity: 0.3;
}
.embla__dots {
  display: flex;
  align-items: center;
  gap: 20px;
}
.embla__dotButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
}
.embla__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brown-secondary);
  opacity: 0.7;
  cursor: pointer;
}
.embla__dot_active {
  width: 10px;
  height: 10px;
  opacity: 1;
  cursor: default;
}

@media (max-width: 767px) {
  .embla__dots {
    gap: 10px;
  }
  .embla__buttons {
    gap: 25px;
  }
}

@media (max-width: 479px) {
  .embla__slide {
    flex: 0 0 var(--slide-size-m);
  }
  .embla__imageBox {
    height: 360px;
  }
  .embla__navigation {
    justify-content: center;
    padding-left: 0;
  }
}
</style>
