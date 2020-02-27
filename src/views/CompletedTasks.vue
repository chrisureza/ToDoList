<template>
	<div class="">
		<TasksContainer tasksToShow="Completed" />
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