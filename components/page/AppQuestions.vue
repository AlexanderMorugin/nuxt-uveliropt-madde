<template>
  <section class="questions" id="questions">
    <!-- Блок с титлом -->
    <PageAppSecondTitle
      title="Часто задаваемые вопросы"
      class="questions__secondTitle"
    />

    <div class="questions__container">
      <ul class="questions__list">
        <li
          v-for="item in questions"
          :key="item.id"
          class="questions__listItem"
        >
          <div
            tabindex="0"
            @keypress.enter="toggleAnswerAccordion(item.id)"
            @click="toggleAnswerAccordion(item.id)"
            class="questions__button"
          >
            <span class="questions__title">{{ item.question }}</span>
            <div class="questions__imageBox">
              <img
                src="/icons/icon-crestik.svg"
                alt="Крестик"
                :class="[
                  'questions__image',
                  { questions__image_active: isOpenAnswer(item.id) },
                ]"
              />
            </div>
          </div>
          <p
            :class="[
              'questions__text',
              { questions__text_active: isOpenAnswer(item.id) },
            ]"
            >{{ item.answer }}</p
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { questions } from '@/mock/questions';

const openAnswerIndex = ref(null);

const toggleAnswerAccordion = (index) => {
  openAnswerIndex.value = openAnswerIndex.value === index ? null : index;
};

const isOpenAnswer = (index) => {
  return openAnswerIndex.value === index;
};
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 70px;
}
.questions__container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.questions__list {
  display: flex;
  flex-direction: column;
}
.questions__listItem {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--white-secondary);
}
.questions__listItem:nth-child(1) {
  border-top: 2px solid var(--white-secondary);
}
.questions__button {
  display: grid;
  grid-template-columns: 1fr 40px;
  column-gap: 20px;
  width: 100%;
}
.questions__title {
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--blue-dark-secondary);
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: 0.2s ease all;
}
.questions__imageBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
  transition: 0.2s ease all;
}
.questions__image {
  transition: 0.5s ease all;
}
.questions__button:hover .questions__title {
  color: var(--blue-dark-primary);
}
.questions__button:hover .questions__imageBox {
  background: var(--grey-primary);
}
.questions__image_active {
  transform: rotate(135deg);
}
.questions__text {
  font-family: 'Montserrat-Regular';
  line-height: 1.5;
  font-size: 18px;
  color: var(--brown-secondary);
  height: 0;
  opacity: 0;
  transition: height 0.5s ease-in-out;
  transition: padding-bottom 0.1s ease-in-out;
}
.questions__text_active {
  height: 100%;
  padding-bottom: 40px;
  opacity: 1;
}
.questions__secondTitle {
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .questions {
    padding-top: 60px;
  }
  .questions__container {
    padding-left: 10px;
    padding-right: 10px;
  }
  .questions__text_active {
    padding-bottom: 20px;
  }
}
</style>
