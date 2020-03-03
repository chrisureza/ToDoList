<template>
  <div class="tasks-container">
    <div v-if="tasksToShow !== 'All'">
      <TasksContainerItem
        :label="tasksToShow"
        :tasks="filteredTasks(tasksToShow)"
      />
    </div>
    <div v-if="tasksToShow === 'All'">
      <TasksContainerItem label="Pending" :tasks="filteredTasks('Pending')" />
      <TasksContainerItem label="Missed" :tasks="filteredTasks('Missed')" />
      <TasksContainerItem
        label="Completed"
        :tasks="filteredTasks('Completed')"
      />
    </div>
  </div>
</template>

<script>
import TasksContainerItem from "./components/TasksContainerItem";

export default {
  name: "TasksContainer",
  props: {
    tasksToShow: {
      type: String,
      default: () => "All"
    }
  },
  components: { TasksContainerItem },
  data() {
    return {
      registeredTasks: this.$store.state.RegisteredTasks.registeredTasks
    };
  },
  methods: {
    filteredTasks(status) {
      switch (status) {
        case "Completed":
          return this.registeredTasks.filter(
            task => task.status === "Completed"
          );
        case "Missed":
          return this.registeredTasks.filter(task => task.status === "Missed");
        case "Pending":
          return this.registeredTasks.filter(task => task.status === "Pending");
        default:
          break;
      }
    }
  }
};
</script>
