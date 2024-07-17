<script setup lang="ts">
import RecordsTable from "./components/Records/RecordsTable.vue";

import { useRecordsStore } from "./stores/records";

const store = useRecordsStore();
</script>

<template>
  <div class="w-10 m-auto">
    <div class="flex align-items-center gap-3 pb-3">
      <h1>Учетные записи</h1>
      <Button
        icon="pi pi-plus"
        outlined
        severity="contrast"
        @click="store.addRecord"
      />
    </div>

    <Message severity="info" icon="pi pi-question-circle"
      >Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ;</Message
    >

    <RecordsTable />
  </div>
</template>

<style scoped></style>
