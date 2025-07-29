<template>
  <section class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="item in data" :key="item.id" class="embla__slide">
          <img :src="item.image" :alt="item.title" class="embla__slide__img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

const { data } = defineProps(['data']);

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
  Fade(),
  Autoplay({ delay: 5000 }),
]);
</script>

<style scoped>
.embla {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  margin: auto;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 100%;
  min-width: 0;
}
.embla__slide__img {
  display: block;
  height: 800px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(60%);
}

@media (max-width: 767px) {
  .embla__slide__img {
    height: 550px;
    filter: grayscale(0);
  }
}
</style>
