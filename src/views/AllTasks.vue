<template>
	<div class="all-tasks">
		<AddToDoItem />
		<TasksContainer tasksToShow="All" />
	</div>
</template>

<script>
import AddToDoItem from "@/components/AddToDoItem";
import TasksContainer from "@/components/TasksContainer";

export default {
	name: "AllTasks",
	components: {
		AddToDoItem,
		TasksContainer
	},
	data() {
		return {};
	}
};
</script>
