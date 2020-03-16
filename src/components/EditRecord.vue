<template>
    <div class="popup-container">
        <form class="edit-record-form" @submit.prevent="updatePhoneBookRecord">
            <div class="edit-record-form__title">Редактирование<br>информации</div>
            <div class="edit-record-form__close-button" v-on:click="closeEditing"></div>
            <label class="edit-record-form__label">
                ФИО
                <input type="text" required class="edit-record-form__input"
                    v-model="name" />
            </label>
            <label class="edit-record-form__label">
                Email
                <input type="email" required class="edit-record-form__input"
                    v-model="email" />
            </label>
            <label class="edit-record-form__label">
                Телефон
                <input type="phone" required class="edit-record-form__input"
                    v-model="phone" />
            </label>
            <div class="edit-record-form__buttons-container">
                <input type="submit" class="edit-record-form__submit" value="Обновить" />
                <input type="button" class="edit-record-form__submit" value="Удалить"
                    v-on:click="deletePhoneBookRecord" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'EditRecord',
  data() {
    return {
      name: this.$store.state.choosedPhoneBookRecord.name,
      email: this.$store.state.choosedPhoneBookRecord.email,
      phone: this.$store.state.choosedPhoneBookRecord.phone,
      index: this.$store.state.choosedPhoneBookRecord.index,
    };
  },
  methods: {
    ...mapMutations(['updateChoosedPhoneBookRecord', 'removePhoneBookRecord']),
    closeEditing() {
      this.$emit('closeEditing');
    },
    updatePhoneBookRecord() {
      // здесь можно добавить валидацию введеных параметров
      const newRecord = {
        name: this.name, email: this.email, phone: this.phone, index: this.index,
      };
      this.updateChoosedPhoneBookRecord(newRecord);
      this.$emit('closeEditing');
    },
    deletePhoneBookRecord() {
      this.removePhoneBookRecord(this.index);
      this.$emit('closeEditing');
    },
  },
};
</script>

<style lang="scss">
  .popup-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
  }

  .edit-record-form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px auto;
    background: #fff;
    max-width: 450px;
    height: 430px;
    padding: 50px;
    &__title {
      font-size: 30px;
      color: #9e9e9e;
      text-align: center;
      margin-top: -30px;
      margin-bottom: 40px;
    }
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
    &__buttons-container {
      display: flex;
      justify-content: space-between;
      width: 200px;
    }
    &__submit {
      border: 1px solid black;
      padding: 15px 20px;
      background-color: transparent;
    }
    &__close-button {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        &:before, &:after {
            content: ' ';
            position: absolute;
            left: 15px;
            height: 33px;
            width: 2px;
            background-color: #333;
        }
        &:hover {
            opacity: 1;
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }
  }

</style>
