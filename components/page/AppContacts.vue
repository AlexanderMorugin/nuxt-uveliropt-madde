<template>
  <div class="contacts__titleBox">
    <!-- Блок с титлом -->
    <PageAppSecondTitle
      title="Приезжайте к нам в офис"
      class="contacts__title"
    />

    <!-- Блок с телефоном и адресом -->
    <div class="contacts__addressBox">
      <div class="contacts__addressBoxItem">
        <span class="contacts__addressTop">Звоните нам</span>
        <HeaderAppPhone
          :phone="phone"
          :phoneNumber="phoneNumber"
          location="footer"
        />
      </div>
      <div class="contacts__addressBoxItem">
        <span class="contacts__addressTop">Без выходных: 9:00-21:00</span>
        <span class="contacts__addressBottom">{{ props.address }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['phone', 'phoneNumber', 'address']);
</script>

<style scoped>
.contacts__titleBox {
  display: flex;
  justify-content: space-between;
}
.contacts__title {
  max-width: 320px;
  text-align: left;
  line-height: 1.2;
  color: var(--brown-secondary);
}
.contacts__addressBox {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contacts__addressBoxItem {
  display: flex;
  flex-direction: column;
}
.contacts__addressTop {
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: var(--brown-secondary);
}
.contacts__addressBottom {
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: var(--brown-secondary);
}

@media (max-width: 767px) {
  .contacts__titleBox {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .contacts__title {
    text-align: center;
  }
  .contacts__addressBox {
    align-items: center;
  }
  .contacts__addressBoxItem {
    align-items: center;
  }
  .contacts__addressBottom {
    font-size: 18px;
  }
}
</style>
