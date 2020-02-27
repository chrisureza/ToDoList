<template>
  <div class="">
    <span>Here are the pending tasks:</span>
    <TasksContainer tasksToShow="Pending" noLabel />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer";

export default {
  name: "AllTasks",
  components: {
    TasksContainer
  }
};
</script>
