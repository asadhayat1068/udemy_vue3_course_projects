const app = Vue.createApp({
  data() {
    return {
      mTask: "",
      tasks: [],
      showTasks: true,
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
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
