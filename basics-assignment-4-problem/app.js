const app = Vue.createApp({
  data() {
    return {
      user: "",
      userClass: "",
      showPara: true,
      bgColor: "salmon",
    };
  },
  watch: {
    user() {
      if (this.user === "user1") {
        this.userClass = "user1";
      } else if (this.user === "user2") {
        this.userClass = "user2";
      } else {
        this.userClass = "none";
      }
    },
  },
  methods: {
    toggleShowPara() {
      this.showPara = !this.showPara;
    },
  },
});
app.mount("#assignment");
