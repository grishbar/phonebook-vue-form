<template>
  <div id="app">
    <AddRecord />
    <PhoneBookTable v-on:openEditing="openEditing()" />
    <EditRecord v-if="isEditRecordOpen" v-on:closeEditing="closeEditing()" />
  </div>
</template>

<script>
import AddRecord from './components/AddRecord.vue';
import EditRecord from './components/EditRecord.vue';
import PhoneBookTable from './components/PhoneBookTable.vue';

export default {
  name: 'App',
  components: {
    AddRecord,
    EditRecord,
    PhoneBookTable,
  },
  data() {
    return {
      isEditRecordOpen: false,
    };
  },
  methods: {
    closeEditing() {
      this.isEditRecordOpen = false;
    },
    openEditing() {
      this.isEditRecordOpen = true;
    },
  },
};
</script>

<style lang="scss">
    * {
      box-sizing: border-box;
    }
</style>
