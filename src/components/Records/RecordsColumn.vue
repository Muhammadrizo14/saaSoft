<template>
  <tr>
    <td style="width: 30%">
      <InputText v-model="data.label" style="width: 100%" />
    </td>
    <td style="width: 20%">
      <Select
        v-model="data.type"
        :options="listTypes"
        optionLabel="type"
        style="width: 100%"
      />
    </td>
    <td style="width: 100%">
      <InputText v-model="data.login" style="width: 100%" />
    </td>
    <td style="width: 30%" v-if="data.type.type !== 'LDAP'">
      <Password v-model="data.password" :feedback="false" toggleMask />
    </td>
    <td style="width: 10%">
      <Button
        icon="pi pi-trash"
        text
        severity="danger"
        @click="store.removeRecord(product.id)"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useRecordsStore } from "../../stores/records";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Password from "primevue/password";
import Button from "primevue/button";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useRecordsStore();

const listTypes = ref([{ type: "LDAP" }, { type: "Локальная" }]);

const useJoinedItems = (array) => {
  return array.map((item) => item.text).join("; ");
};

const data = reactive({
  label: useJoinedItems(props.product.label),
  type: props.product.type === "LDAP" ? listTypes.value[0] : listTypes.value[1],
  login: props.product.login,
  password: props.product.password,
});

const customMessages = {
  required: "Это поле не может быть пустым",
};

const rules = {
  label: {
    required: helpers.withMessage(customMessages.required, required),
  },
  type: {
    required: helpers.withMessage(customMessages.required, required),
  },
  login: {
    required: helpers.withMessage(customMessages.required, required),
  },
  password: {
    required: helpers.withMessage(customMessages.required, required),
  },
};

const v$ = useVuelidate(rules, data);

watchEffect(() => {
  data.label = useJoinedItems(props.product.label);
  data.type =
    props.product.type === "LDAP" ? listTypes.value[0] : listTypes.value[1];
  data.login = props.product.login;
  data.password = props.product.password;
});
</script>

<style scoped>
/* Add any required styles here */
</style>
