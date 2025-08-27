<template>
  <section class="video page-screen">
    <PageAppSecondTitle title="Поступление BrS301" class="video__title" />
    <div class="video__container">
      <video
        src="/video/madde-brilliance-002-1080p.mp4"
        preload="auto"
        autoplay
        loop
        playsinline
        muted
        class="video__item"
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
  padding-top: 70px;
}
.video__title {
  color: var(--brown-secondary);
}
.video__container {
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
  overflow: hidden;
}
.video__item {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 767px) {
  .video {
    padding-left: 0;
    padding-right: 0;
    padding-top: 60px;
  }
  .video__container {
    max-width: 100%;
    min-height: 320px;
    border-radius: 0;
  }
}
</style>
