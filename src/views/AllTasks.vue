<template>
  <div class="all-tasks">
    <AddTask />
    <TasksContainer tasksToShow="All" />
  </div>
</template>

<script>
import AddTask from "@/components/AddTask";
import TasksContainer from "@/components/TasksContainer/TasksContainer";

export default {
  name: "AllTasks",
  components: {
    AddTask,
    TasksContainer
  },
  data() {
    return {};
  }
};
</script>
