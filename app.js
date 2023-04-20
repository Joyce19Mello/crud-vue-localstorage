
const app = Vue.createApp({
  data() {
    return {
      settings: JSON.parse(localStorage.getItem("settings")) || [],
      newSetting: { key: "", value: "" },
      editIndex: null
    };
  },
  methods: {
    addSetting() {
      if (this.editIndex !== null) {
        this.settings.splice(this.editIndex, 1, this.newSetting);
        this.editIndex = null;
      } else {
        this.settings.push(this.newSetting);
      }
      this.newSetting = { key: "", value: "" };
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
    deleteSetting(index) {
      this.settings.splice(index, 1);
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
    editSetting(index) {
      this.newSetting = { ...this.settings[index] };
      this.editIndex = index;
    }
  }
});

app.mount("#app");
