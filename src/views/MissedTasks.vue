<template>
  <div class="">
    <span>Here are the missed tasks:</span>
    <TasksContainer tasksToShow="Missed" noLabel />
  </div>
</template>

<script>
import TasksContainer from "@/components/TasksContainer";

export default {
  name: "MissedTasks",
  components: {
    TasksContainer
  }
};
</script>
