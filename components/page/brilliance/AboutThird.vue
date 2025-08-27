<template>
  <div class="brillianceAboutThird__container">
    <div class="brillianceAboutThird__textBox">
      <h2 class="brillianceAboutThird__title">Почему? Как это возможно?</h2>
      <p class="brillianceAboutThird__text text-monserat-accent">
        Максимальная схожесть с бриллиантовыми моделями достигается благодаря:
      </p>

      <ul class="brillianceAboutThird__list">
        <li class="brillianceAboutThird__listItem">
          <img
            src="/icons/icon-triangle.svg"
            alt="Стрелка"
            class="brillianceAboutThird__listItemArrow"
          />
          <p class="brillianceAboutThird__listItemText text-monserat">
            Использованию
            <span class="brillianceAboutThird__listItemText_span"
              >CZ класса ААА.</span
            >
          </p>
        </li>

        <li class="brillianceAboutThird__listItem">
          <img
            loading="lazy"
            src="/icons/icon-triangle.svg"
            alt="Стрелка"
            class="brillianceAboutThird__listItemArrow"
          />
          <p class="brillianceAboutThird__listItemText text-monserat">
            Применению
            <span class="brillianceAboutThird__listItemText_span"
              >бриллиантовой огранки H&A.</span
            >
          </p>
        </li>

        <li class="brillianceAboutThird__listItem">
          <img
            loading="lazy"
            src="/icons/icon-triangle.svg"
            alt="Стрелка"
            class="brillianceAboutThird__listItemArrow"
          />
          <p class="brillianceAboutThird__listItemText text-monserat">
            Качественному
            <span class="brillianceAboutThird__listItemText_span"
              >родированию и полировке металла.</span
            >
          </p>
        </li>

        <li class="brillianceAboutThird__listItem">
          <img
            loading="lazy"
            src="/icons/icon-triangle.svg"
            alt="Стрелка"
            class="brillianceAboutThird__listItemArrow"
          />
          <p class="brillianceAboutThird__listItemText text-monserat">
            Подбору
            <span class="brillianceAboutThird__listItemText_span"
              >модельного ряда</span
            >
            из бриллиантовой классики.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.brillianceAboutThird__container {
  width: 100%;
  height: 800px;
  background-image: url('/images/collections/brilliance/img-brilliance-about-03.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
}
.brillianceAboutThird__textBox {
  width: 100%;
  height: 100%;
  padding-top: 160px;
  padding-left: 40px;
  background: linear-gradient(to left, transparent 30%, var(--brown-secondary));
}
.brillianceAboutThird__title {
  width: 100%;
  max-width: 340px;
  font-family: 'Montserrat-SemiBold', sans-serif;
  line-height: 1;
  font-size: 56px;
  color: transparent;
  background-image: linear-gradient(
    0.48turn,
    var(--white-primary),
    var(--yellow-primary) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  padding-bottom: 100px;
}
.brillianceAboutThird__text {
  width: 100%;
  max-width: 600px;
  color: var(--white-primary);
}
.brillianceAboutThird__list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 400px;
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.brillianceAboutThird__listItem {
  display: flex;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.brillianceAboutThird__listItemArrow {
  width: 6px;
  height: 6px;
  transform: rotate(90deg);
  margin-top: 10px;
}
.brillianceAboutThird__listItemText {
  color: var(--white-primary);
}
.brillianceAboutThird__listItemText_span {
  font-family: 'Montserrat-SemiBold', sans-serif;
}

@media (max-width: 1279px) {
  .brillianceAboutThird__textBox {
    padding-left: 20px;
  }
  .brillianceAboutThird__text {
    max-width: 500px;
  }
}

@media (max-width: 767px) {
  .brillianceAboutThird__container {
    height: 700px;
  }
  .brillianceAboutThird__title {
    max-width: 280px;
    font-size: 45px;
    padding-bottom: 20px;
  }
  .brillianceAboutThird__textBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 10px;
  }
  .brillianceAboutThird__list {
    max-width: 400px;
    margin-top: 0;
    padding-left: 0;
  }
  .brillianceAboutThird__listItem {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 479px) {
  .brillianceAboutThird__container {
    height: 600px;
  }
  .brillianceAboutThird__textBox {
    background: linear-gradient(
      transparent,
      transparent,
      var(--brown-secondary),
      var(--blue-dark-primary),
      var(--brown-secondary),
      var(--grey-dark-primary)
    );
    padding-bottom: 10px;
    animation: background-fade 20s ease-in-out infinite;
    background-size: 500% 800%;
    -webkit-animation: background-fade 20s ease-in-out infinite;
    -moz-animation: background-fade 20s ease-in-out infinite;
  }
  .brillianceAboutThird__title {
    max-width: 100%;
    font-size: 36px;
  }
  .brillianceAboutThird__list {
    max-width: 100%;
  }
}

@keyframes background-fade {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
</style>
