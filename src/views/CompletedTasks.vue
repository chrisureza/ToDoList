<template>
  <div class="">
    <TasksContainer tasksToShow="Completed" noLabel />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer/TasksContainer";

export default {
  name: "CompletedTasks",
  components: {
    TasksContainer
  }
};
</script>
