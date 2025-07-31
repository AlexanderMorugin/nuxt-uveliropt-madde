<template>
  <section className="embla">
    <div className="embla__viewport" ref="emblaRef">
      <ul class="embla__container">
        <li v-for="item in data" :key="item.id" class="embla__slide">
          <div class="embla__imageBox">
          <img :src="item.image" :alt="item.title" class="embla__image" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
const { data } = defineProps(['data']);

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [
  Autoplay(),
]);

// onMounted(() => {
//   if (emblaApi.value) {
//     console.log(emblaApi.value.slideNodes()); // Access API
//   }
// });
</script>

<style scoped>
.embla {
  max-width: 100%;
  margin: auto;
  --slide-spacing: 1rem;
  --slide-size: 70%;
  --slide-size-m: 100%;
  /* --slide-size-m: 100%; */
  /* width: 100%;
  max-width: 1440px;
  margin: 0 auto; */
  /* --slide-spacing: 60px; */
  /* --slide-size: 820px; */
  /* --slide-size: 60%; */
  /* overflow: hidden; */

  /* border: 1px solid red; */
}
.embla__viewport {
  /* width: 100%; */
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  overflow: hidden;
  /* border: 1px solid blue; */
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
    /* border-radius: 15px; */
  height: 460px;
  overflow: hidden;
}
.embla__image {
      display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
/* width: var(--slide-size);
  height: 420px;
  object-fit: cover; */
}

/* @media (max-width: 767px) {
  .embla__slide {
    flex: 0 0 var(--slide-size-m);
  }
} */
</style>
