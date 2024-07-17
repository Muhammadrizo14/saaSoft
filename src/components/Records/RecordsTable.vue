<template>
  <div class="pt-3">
    <table class="record-table">
      <thead>
        <tr>
          <th class="text-500">Метки</th>
          <th class="text-500">Тип записи</th>
          <th class="text-500">Логин</th>
          <th class="text-500">Пароль</th>
        </tr>
      </thead>
      <tbody>
        <RecordsColumn
          v-for="product in store.records"
          :key="product.id"
          :product="product"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRecordsStore } from "../../stores/records";

const store = useRecordsStore();
</script>

<style lang="scss">
.record-table {
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    text-align: left;
    padding: 3px;
  }
  thead {
    padding-bottom: 10px;
    tr {
      th {
        padding-bottom: 15px;
        font-size: var(--subtitle);
      }
    }
  }
}
</style>
