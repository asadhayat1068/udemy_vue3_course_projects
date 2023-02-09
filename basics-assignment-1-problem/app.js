const app = Vue.createApp({
  data() {
    return {
      name: "Asad Hayat",
      age: 32,
    };
  },
  methods: {
    getAgeAfter(years = 0) {
      return this.age + years;
    },
  },
});
app.mount("#assignment");
