import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phoneBookRecords: [
      {
        name: 'Иванов Иван Иванович',
        email: 'test@mail.ru',
        phone: '+7(123)1231231',
        index: 0,
      },
      {
        name: 'Петров Иван Иванович',
        email: 'test1@mail.ru',
        phone: '+7(123)1231231',
        index: 1,
      },
      {
        name: 'Сидоров Иван Иванович',
        email: 'test2@mail.ru',
        phone: '+7(123)1231231',
        index: 2,
      },
    ],
    choosedPhoneBookRecord: {
      name: 'Иванов Иван Иванович',
      email: 'test@mail.ru',
      phone: '+7(123)1231231',
      index: 0,
    },
  },
  mutations: {
    addPhoneBookRecord(state, newPhoneBookRecord) {
      state.phoneBookRecords.push(newPhoneBookRecord);
    },
    updateChoosedPhoneBookRecord(state, newRecord) {
      if (newRecord.name) {
        state.phoneBookRecords[newRecord.index].name = newRecord.name;
        state.phoneBookRecords[newRecord.index].phone = newRecord.phone;
        state.phoneBookRecords[newRecord.index].email = newRecord.email;
        state.phoneBookRecords[newRecord.index].index = newRecord.index;
      }
      state.choosedPhoneBookRecord = state.phoneBookRecords[newRecord.index];
      state.choosedPhoneBookRecord.index = newRecord.index;
    },
    removePhoneBookRecord(state, index) {
      state.phoneBookRecords.splice(index, 1);
    },
  },
  actions: {
  },
  getters: {
    choosedPhoneBookRecord(state) {
      return state.choosedPhoneBookRecord;
    },
    allPhoneBookRecords(state) {
      return state.phoneBookRecords;
    },
    currentPhoneBookRecord(state, index) {
      return state.phoneBookRecords[index];
    },
  },
});
