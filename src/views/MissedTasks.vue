<template>
	<div class="">
		<TasksContainer tasksToShow="Missed" />
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