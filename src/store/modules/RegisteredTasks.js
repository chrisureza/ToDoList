export default {
  namespaced: true,
  state: {
    registeredTasks: []
  },

  mutations: {
    addTask(state, task) {
      state.registeredTasks.push(task);
    },
    changeTaskStatus(state, { text, status }) {
      console.log(status)
      state.registeredTasks.find(task => task.text === text).status = status;
    },
  },
  actions: {
    addTask(context, task) {
      return new Promise((resolve) => {
        context.commit("addTask", task);
        resolve();
      });
    },
    changeTaskStatus(context, value) {
      return new Promise((resolve) => {
        context.commit("changeTaskStatus", value);
        resolve();
      });
    }
  }
};
