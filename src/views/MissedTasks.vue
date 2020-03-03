<template>
  <div class="">
    <TasksContainer tasksToShow="Missed" noLabel />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer/TasksContainer";

export default {
  name: "MissedTasks",
  components: {
    TasksContainer
  }
};
</script>
