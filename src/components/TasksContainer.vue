<template>
	<div>
		<div v-if="tasksToShow !== 'All'">
			<span>{{ tasksToShow }}:</span>
			<div
				v-for="(task, taskIndex) in filteredTasks(tasksToShow)"
				:key="`${tasksToShow}-${taskIndex}`"
			>
				<TaskCard :text="task.text" :status="task.status" />
			</div>
		</div>
		<div v-if="tasksToShow === 'All'">
			<span>Pending:</span>
			<div
				v-for="(task, taskIndex) in filteredTasks('Pending')"
				:key="`Pending-${taskIndex}`"
			>
				<TaskCard :text="task.text" :status="task.status" />
			</div>
			<span>Missed:</span>
			<div
				v-for="(task, taskIndex) in filteredTasks('Missed')"
				:key="`Missed-${taskIndex}`"
			>
				<TaskCard :text="task.text" :status="task.status" />
			</div>
			<span>Completed:</span>
			<div
				v-for="(task, taskIndex) in filteredTasks('Completed')"
				:key="`Completed-${taskIndex}`"
			>
				<TaskCard :text="task.text" :status="task.status" />
			</div>
		</div>
	</div>
</template>

<script>
import TaskCard from "@/components/TaskCard";

export default {
	name: "TasksContainer",
	props: {
		tasksToShow: {
			type: String,
			default: () => "All"
		}
	},
	components: { TaskCard },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
