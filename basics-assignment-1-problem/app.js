const app = Vue.createApp({
  data() {
    return {
      name: "Asad Hayat",
      age: 32,
      photo:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    };
  },
  methods: {
    getAgeAfter(years = 0) {
      return this.age + years;
    },
  },
});
app.mount("#assignment");
