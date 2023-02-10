const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet!";
      } else if (this.counter === 37) {
        return this.counter;
      } else if (this.counter > 37) {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const ref = this;
      setTimeout(() => {
        ref.counter = 0;
      }, 5000);
    },
  },
  methods: {
    increment(delta = 0) {
      this.counter += delta;
    },
  },
});

app.mount("#assignment");
