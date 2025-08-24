<template>
  <div class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="item in data" :key="item.id" class="embla__slide">
          <div class="embla__imageBox">
            <img :src="item.image" :alt="item.title" class="embla__image" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
const { data } = defineProps(['data']);

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
  Autoplay({ stopOnInteraction: false }),
]);
</script>

<style scoped>
.embla {
  max-width: 100%;
  margin: auto;
  --slide-spacing: 1rem;
  --slide-size: 70%;
  --slide-size-m: 100%;
  /* overflow: hidden; */
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
  height: 460px;
  overflow: hidden;
}
.embla__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .embla__slide {
    flex: 0 0 var(--slide-size-m);
  }
  .embla__imageBox {
    height: 360px;
  }
}
</style>
