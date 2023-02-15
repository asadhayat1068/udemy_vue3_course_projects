const app = Vue.createApp({
  data() {
    return {
      mTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask(_task) {
      if (_task.length == 0) {
        alert("Task can not be empty!");
        return;
      }
      this.tasks.push(_task);
      console.log("Task: ", this.tasks);
      this.mTask = "";
    },
  },
});

app.mount("#assignment");
