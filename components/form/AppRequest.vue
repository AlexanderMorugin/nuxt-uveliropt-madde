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

@media (max-width: 767px) {
  .request-form {
    gap: 20px;
    padding-top: 26px;
  }
}
</style>
