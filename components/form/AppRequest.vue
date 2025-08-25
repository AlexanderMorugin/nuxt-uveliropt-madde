<template>
  <form class="request-form" @submit.prevent="submitRequestForm">
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

    <!-- Заглушка показывается вместо кнопки Сабмита, если валидация не прошла -->
    <div v-if="isFromEmpty || isValid.length" class="form-button">
      Заполните все поля
    </div>

    <!-- Кнопка Сабмит -->
    <button v-else class="form-button form-button-active">
      <!-- Лоадер, крутится пока данные отправляются на сервер -->
      <AppButtonLoader v-if="isLoading" />
      <span v-else>Отправить</span>
    </button>
  </form>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, minLength, numeric } from '@vuelidate/validators';

const emit = defineEmits(['closeCooperationModal']);

const isLoading = ref(false);
const companyField = ref(null);
const nameField = ref(null);
const phoneField = ref(null);

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
    phoneField.value
  );

  setTimeout(() => {
    isLoading.value = false;
    emit('closeCooperationModal');
  }, 2000);
};
</script>

<style scoped>
.request-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 40px;
}
.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.form-label {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 20px;
  color: var(--blue-dark-secondary);
}
.form-input {
  width: 100%;
  height: 60px;
  border: 1px solid var(--brown-thirdary);
  background: var(--background-primary);
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--black-primary);
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.3s ease all;
}
.form-input:focus {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--black-primary);
  outline: 0;
  border: 1px solid var(--blue-primary);
}
.form-input::placeholder {
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--brown-thirdary);
}
.form-input-error {
  position: absolute;
  top: 93px;
  left: 0;
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 14px;
  color: var(--red-primary);
}
.form-input-warning {
  border: 1px solid red;
}
.form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid var(--brown-thirdary);
  font-family: 'Montserrat-Regular', sans-serif;
  font-size: 16px;
  color: var(--brown-thirdary);
  text-transform: uppercase;
  cursor: auto;
  margin-top: 10px;
}
.form-button-active {
  background: var(--blue-secondary);
  color: var(--white-primary);
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease all;
}
.form-button-active:hover {
  background: var(--blue-dark-primary);
}

@media (max-width: 767px) {
  .request-form {
    gap: 20px;
    padding-top: 26px;
  }
  .form-label {
    font-size: 16px;
  }
  .form-input {
    height: 50px;
  }
  .form-input-error {
    top: 78px;
  }
}
</style>
