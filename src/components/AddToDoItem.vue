<template>
	<div>
		<Input
			:text="toDoText"
			:placeholder="toDoPlaceholder"
			@update-text="value => updateInputText('toDoText', value)"
		/>
		<Button text="Add" :onClick="addToDoItem" />
	</div>
</template>

<script>
import Input from "./generic/Input";
import Button from "./generic/Button";
import { showToast } from "@/utils/GenericFunctions";

export default {
	name: "AddToDoItem",
	props: {},
	components: {
		Input,
		Button
	},
	data() {
		return {
			toDoPlaceholder: "To Do Item",
			toDoText: ""
		};
	},
	methods: {
		updateInputText(text, value) {
			this[text] = value;
		},
		addToDoItem() {
			/// here should add the task to the store
			const newTask = {
				text: this.toDoText,
				status: "Pending"
			};
			this.$store
				.dispatch("RegisteredTasks/addTask", newTask)
				.then(() => {
					showToast(this, "success", "Success", "The task was added");
				})
				.catch(error => {
					showToast(this, "danger", "Error", "The task was not added");
					console.error(error);
				});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
