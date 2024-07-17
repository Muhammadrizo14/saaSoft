// stores/counter.js
import { defineStore } from "pinia";

type IRecord = {
  label: {
    text: string;
  }[];
  type: string;
  login: string;
  password: string;
};

type IState = {
  records: IRecord[];
};

export const useRecordsStore = defineStore("records", {
  state: (): IState[] => {
    return {
      records: [
        {
          id: 0,
          label: [{ text: "1" }, { text: "2" }, { text: "4" }],
          type: "Локальная",
          login: "rizasdfasdfasdos",
          password: "pin12",
        },
        {
          id: 1,
          label: [{ text: "asdf" }, { text: "qadf" }, { text: "2q4" }],
          type: "Локальная",
          login: "rizos",
          password: "pin12",
        },
        {
          id: 2,
          label: [{ text: "1" }, { text: "2" }, { text: "4" }],
          type: "LDAP",
          login: "rizos",
          password: "pin12",
        },
        {
          id: 3,
          label: [{ text: "1" }, { text: "2" }, { text: "4" }],
          type: "Локальная",
          login: "rizos",
          password: "pin12",
        },
      ],
    };
  },

  actions: {
    addRecord() {
      const new_array = {
        id: this.records.length,
        label: [],
        type: "Локальная",
        login: "",
        password: "",
      };

      this.records.push(new_array);
    },
    removeRecord(id) {
      console.log(id);

      this.records = this.records.filter((record) => record.id !== id);
    },
  },
});
