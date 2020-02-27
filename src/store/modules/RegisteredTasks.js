export default {
  namespaced: true,
  state: {
    registeredTasks: []
  },

  mutations: {
    addTask(state, task) {
      state.registeredTasks.push(task);
    },
    deleteTask(state, taskText) {
      const taskIndex = state.registeredTasks.indexOf(
        state.registeredTasks.find(task => task.text === taskText)
      );
      state.registeredTasks.splice(taskIndex, 1);
    },
    changeTaskStatus(state, { text, status }) {
      state.registeredTasks.find(task => task.text === text).status = status;
    }
  },
  actions: {
    addTask(context, task) {
      return new Promise(resolve => {
        context.commit("addTask", task);
        resolve();
      });
    },
    deleteTask(context, taskText) {
      return new Promise(resolve => {
        context.commit("deleteTask", taskText);
        resolve();
      });
    },
    changeTaskStatus(context, value) {
      return new Promise(resolve => {
        context.commit("changeTaskStatus", value);
        resolve();
      });
    }
  }
};
