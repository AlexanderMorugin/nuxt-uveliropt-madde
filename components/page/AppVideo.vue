<template>
  <section class="video">
    <PageAppSecondTitle title="Дискотека 80-х" class="video__title" />
    <div
      ref="videoOne"
      class="video__container observerVideo"
      @click="setControlsVisible"
    >
      <video
        src="/video/modern-talking.mp4"
        width="100%"
        height="100%"
        autoplay
        loop
        playsinline
        disablepictureinpicture
        controls="false"
        muted
        :class="['video__item', { video__item_controls: isControlsVisible }]"
      ></video>
    </div>
  </section>
</template>

<script setup>
const videoOne = ref(null);
const isControlsVisible = ref(false);

const setControlsVisible = () =>
  (isControlsVisible.value = !isControlsVisible.value);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('observerVideo_animate');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (videoOne.value) {
    observer.observe(videoOne.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
/* video::-webkit-media-controls {
  opacity: 0;
} */
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 70px;
}
.video__title {
  color: var(--brown-secondary);
}
.video__container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
  overflow: hidden;
}
.video__item::-webkit-media-controls {
  opacity: 0;
}
.video__item_controls::-webkit-media-controls {
  opacity: 1;
}

/* Анимация */
.observerVideo {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.observerVideo_animate {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 767px) {
  .video {
    padding-left: 0;
    padding-right: 0;
    padding-top: 60px;
  }
  .video__container {
    max-width: 100%;
    border-radius: 0;
  }
}
</style>
