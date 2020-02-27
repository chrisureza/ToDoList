<template>
  <div class="">
    <span>Here are the completed tasks:</span>
    <TasksContainer tasksToShow="Completed" noLabel />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer";

export default {
  name: "CompletedTasks",
  components: {
    TasksContainer
  }
};
</script>
