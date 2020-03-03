<template>
  <div class="tasks-container">
    <div class="specific-tasks" v-if="tasksToShow !== 'All'">
      <TasksContainerItem
        :label="tasksToShow"
        :tasks="filteredTasks(tasksToShow)"
      />
    </div>
    <div class="all-tasks" v-if="tasksToShow === 'All'">
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

<style lang="scss" scoped>
.tasks-container {
  @media (min-width: 640px) {
    position: absolute;
    width: 100%;
    left: 0;
  }
  .all-tasks {
    @media (min-width: 640px) {
      display: flex;
    }

    .tasks-container-item {
      @media (min-width: 640px) {
        width: 33.33%;
      }
    }
  }
}

.specific-tasks .tasks-container {
  @media (min-width: 640px) {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
