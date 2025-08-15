<template>
  <section class="video">
    <div class="video__container">
      <video
        src="/video/modern-talking.mp4"
        width="100%"
        height="100%"
        autoplay
        controls
        muted
      ></video>
    </div>
  </section>
</template>

<style scoped>
.video {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 70px;

  /* border: 1px solid red; */
}
.video__container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 720px;
}

@media (max-width: 767px) {
  .video {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
  }
}
</style>
