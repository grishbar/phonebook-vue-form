<template>
    <form class="add-record-form" @submit.prevent="submit">
        <label class="add-record-form__label">
            ФИО
            <input type="text" required class="add-record-form__input" v-model="name" />
        </label>
        <label class="add-record-form__label">
            Email
            <input type="email" required class="add-record-form__input" name="" v-model="email" />
        </label>
        <label class="add-record-form__label">
            Телефон
            <input type="phone" required class="add-record-form__input" name="" v-model="phone" />
        </label>
        <input type="submit" class="add-record-form__submit" value="Добавить">
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddRecord',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    ...mapMutations(['addPhoneBookRecord']),
    submit() {
      // здесь можно добавить валидацию введеных параметров
      this.addPhoneBookRecord({
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
      this.name = '';
      this.email = '';
      this.phone = '';
    },
  },
};
</script>

<style lang="scss">
  $breakpoint-tablet: 768px;
  .add-record-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    &__label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    &__input {
      box-sizing: border-box;
      border: 1px solid black;
      min-width: 200px;
      min-height: 25px;
    }
    &__submit {
      border: 1px solid black;
      padding: 15px 20px;
      background-color: transparent;
    }
  }
  @media (max-width: $breakpoint-tablet) {
    .add-record-form {
      font-size: 12px;
      align-items: inherit;
    }
  }
</style>
