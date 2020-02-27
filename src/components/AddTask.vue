<template>
  <div class="row add-task-container">
    <div class="col col-9 p-0">
      <Input
        :text="toDoText"
        :placeholder="taskPlaceholder"
        @update-text="value => updateInputText('toDoText', value)"
      />
    </div>

    <div class="col col-3 p-0 add-button-container">
      <Button text="Add" :onClick="addTask" />
    </div>
  </div>
</template>

<script>
import Input from "./generic/Input";
import Button from "./generic/Button";
import { showToast } from "@/utils/GenericFunctions";

export default {
  name: "AddTask",
  props: {},
  components: {
    Input,
    Button
  },
  data() {
    return {
      taskPlaceholder: "Write the task to do",
      toDoText: ""
    };
  },
  methods: {
    updateInputText(text, value) {
      this[text] = value;
    },
    addTask() {
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
.add-task-container {
  margin-right: unset;
  margin-left: unset;

  .add-button-container {
    display: flex;
    justify-content: center;
  }
}
</style>
