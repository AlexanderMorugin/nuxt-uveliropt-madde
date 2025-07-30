<template>
  <section class="questionsForm">
    <div class="questionsForm__container">
      <!-- Блок с титлом -->
      <PageAppSecondTitle
        title="Остались вопросы?"
        class="questionsForm__title"
      />

      <form class="questionsForm__form" @submit.prevent="submitRequestForm">
        <!-- Поле ввода компании -->
        <div class="form-field">
          <label for="companyField" class="form-label">Компания</label>
          <input
            type="text"
            id="companyField"
            name="companyField"
            placeholder="Компания"
            v-model="v$.companyField.$model"
            :class="[
              'form-input',
              { 'form-input-warning': v$.companyField.$errors.length },
            ]"
          />
          <span
            v-for="item in v$.companyField.$errors"
            :key="item.$uid"
            class="form-input-error"
            >{{ item.$message }}</span
          >
        </div>

        <!-- Поле ввода имени -->
        <div class="form-field">
          <label for="nameField" class="form-label">Имя</label>
          <input
            type="text"
            id="nameField"
            name="nameField"
            placeholder="Имя"
            v-model="v$.nameField.$model"
            :class="[
              'form-input',
              { 'form-input-warning': v$.nameField.$errors.length },
            ]"
          />
          <span
            v-for="item in v$.nameField.$errors"
            :key="item.$uid"
            class="form-input-error"
            >{{ item.$message }}</span
          >
        </div>

        <!-- Поле ввода телефона -->
        <div class="form-field">
          <label for="phoneField" class="form-label">Телефон</label>
          <input
            type="text"
            id="phoneField"
            name="phoneField"
            placeholder="Телефон"
            v-model="v$.phoneField.$model"
            :class="[
              'form-input',
              { 'form-input-warning': v$.phoneField.$errors.length },
            ]"
          />
          <span
            v-for="item in v$.phoneField.$errors"
            :key="item.$uid"
            class="form-input-error"
            >{{ item.$message }}</span
          >
        </div>

        <!-- Поле ввода вопроса -->
        <div class="form-field">
          <label for="questionField" class="form-label">Вопрос</label>
          <input
            type="text"
            id="questionField"
            name="questionField"
            placeholder="Напишите свой вопрос"
            v-model="questionField"
            class="form-input"
          />
        </div>

        <!-- Заглушка показывается вместо кнопки Сабмита, если валидация не прошла -->
        <div v-if="isFromEmpty || isValid.length" class="questionsForm__button">
          <div class="form-button">Заполните все поля</div>
        </div>

        <!-- Кнопка Сабмит -->
        <div v-else class="questionsForm__button">
          <button class="form-button form-button-active">
            <!-- Лоадер, крутится пока данные отправляются на сервер -->
            <AppButtonLoader v-if="isLoading" />
            <span v-else>Отправить</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, minLength, numeric } from '@vuelidate/validators';

const isLoading = ref(false);
const companyField = ref(null);
const nameField = ref(null);
const phoneField = ref(null);
const questionField = ref(null);

const rules = computed(() => ({
  companyField: {
    required: helpers.withMessage('Укажите название компании', required),
    minLength: helpers.withMessage(
      'Компания не менее 2 символов',
      minLength(2)
    ),
  },
  nameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Имя не менее 2 символов', minLength(2)),
  },
  phoneField: {
    required: helpers.withMessage('', required),
    numeric: helpers.withMessage('Укажите цифрами без пробелов', numeric),
    minLength: helpers.withMessage('', minLength(11)),
  },
}));

const v$ = useVuelidate(rules, {
  companyField,
  nameField,
  phoneField,
});

const isFromEmpty = computed(
  () => !companyField.value || !nameField.value || !phoneField.value
);

const isValid = computed(() => v$.value.$errors);

const submitRequestForm = () => {
  isLoading.value = true;

  console.log(
    'submitRequestForm',
    companyField.value,
    nameField.value,
    phoneField.value,
    questionField.value
  );

  setTimeout(() => {
    isLoading.value = false;
    emit('closeCooperationModal');
  }, 2000);
};
</script>

<style scoped>
.questionsForm {
  width: 100%;
  background-image: url('/images/img-questions-form-01.webp');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  padding-top: 40px;
}
.questionsForm__title {
  text-align: left;
  padding-left: 0;
  padding-right: 0;
}
.questionsForm__container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 180px;
  padding-left: 20px;
  padding-right: 20px;
}
.questionsForm__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 490px;
  padding-top: 40px;
}
.questionsForm__button {
  padding-left: 16px;
  padding-right: 16px;
}

@media (max-width: 1023px) {
  .questionsForm {
    background-position: top 0 right -300px;
  }
}

@media (max-width: 767px) {
  .questionsForm {
    background-position: top 0 left 0;
  }
  .questionsForm__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .questionsForm__title {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
