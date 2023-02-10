const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      finalInput: "",
    };
  },
  methods: {
    quickAlert() {
      alert("Yay! I am an alert!");
    },
    updateInput() {
      this.inputValue = event.target.value;
    },
    updateFinalInput() {
      this.finalInput = event.target.value;
    },
  },
});

app.mount("#assignment");
