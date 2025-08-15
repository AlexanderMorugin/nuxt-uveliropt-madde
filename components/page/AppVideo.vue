<template>
  <section class="video">
    <PageAppSecondTitle title="Дискотека 80-х" class="video__title" />
    <div class="video__container">
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
      ></video>
    </div>
  </section>
</template>

<style scoped>
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
