<template>
	<b-card :bg-variant="parseStatus()" text-variant="white" class="text-center">
		<b-card-text>
			{{ text }}
		</b-card-text>
		<Button
			v-if="status !== 'Completed'"
			text="Completed"
			:onClick="() => changeTaskStatus('Completed')"
		/>
		<Button
			v-if="status !== 'Missed'"
			text="Missed"
			:onClick="() => changeTaskStatus('Missed')"
		/>
	</b-card>
</template>

<script>
import Button from "./generic/Button";
import { showToast } from "@/utils/GenericFunctions";

export default {
	name: "TaskCard",
	props: {
		text: {
			text: String,
			default: () => ""
		},
		status: {
			type: String,
			default: () => "Pending"
		}
	},
	components: {
		Button
	},
	methods: {
		parseStatus() {
			switch (this.status) {
				case "Pending":
					return "info";
				case "Completed":
					return "success";
				case "Missed":
					return "danger";
				default:
					break;
			}
		},
		changeTaskStatus(newStatus) {
			this.$store
				.dispatch("RegisteredTasks/changeTaskStatus", {
					text: this.text,
					status: newStatus
				})
				.then(() => {
					showToast(
						this,
						"success",
						"Success",
						`The task was marked as ${newStatus}`
					);
				})
				.catch(error => {
					showToast(
						this,
						"danger",
						"Error",
						`The task was not marked as ${newStatus}`
					);
					console.error(error);
				});
		}
	}
};
</script>