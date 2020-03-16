<template>
    <table class="phone-book-table">
        <tr class="phone-book-table__head">
            <th class="phone-book-table__head-cell">№</th>
            <th class="phone-book-table__head-cell">ФИО</th>
            <th class="phone-book-table__head-cell">Email</th>
            <th class="phone-book-table__head-cell">Телефон</th>
            <th class="phone-book-table__head-cell"></th>
        </tr>
        <tr class="phone-book-table__row"
            v-for="(phoneBookRecord, index) in allPhoneBookRecords" :key="index">
            <td class="phone-book-table__cell">{{ index + 1 }}</td>
            <td class="phone-book-table__cell">{{ phoneBookRecord.name }}</td>
            <td class="phone-book-table__cell">{{ phoneBookRecord.email }}</td>
            <td class="phone-book-table__cell">{{ phoneBookRecord.phone }}</td>
            <td class="phone-book-table__cell">
              <button class="phone-book-table__edit-button" v-on:click="openEditing(index)">
                Изменить
              </button>
            </td>
        </tr>
    </table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PhoneBookTable',
  computed: mapGetters(['allPhoneBookRecords']),
  methods: {
    ...mapMutations(['updateChoosedPhoneBookRecord']),
    openEditing(index) {
      this.updateChoosedPhoneBookRecord({ index });
      this.$emit('openEditing');
    },
  },
};

</script>

<style lang="scss">
  $breakpoint-tablet: 768px;
  .phone-book-table {
    border-collapse: collapse;
    margin: 0 auto;
    &__head-cell {
      background-color: #9e9e9e;
      font-family: "open_sans";
      color: white;
      font-weight: bold;
    }
    &__cell, &__head-cell {
      padding: 25px 30px;
      border: 1px solid black;
    }
    &__row:nth-child(2n) {
      background-color: #e6e6e6;
    }
    &__edit-button {
      border: none;
      background: transparent;
      color: blue;
      text-decoration: underline;
    }
  }
  @media (max-width: $breakpoint-tablet) {
    .phone-book-table {
      font-size: 12px;
      &__cell, &__head-cell {
        padding: 10px 15px;
      }
    }
  }
</style>
