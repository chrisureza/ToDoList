<template>
  <div class="row add-task-container">
    <div class="col col-9 p-0">
      <b-form-input
        v-model="toDoText"
        :placeholder="taskPlaceholder"
      ></b-form-input>
    </div>

    <div class="col col-3 p-0 add-button-container">
      <Button text="Add" :onClick="addTask" />
    </div>
  </div>
</template>

<script>
import Button from "./generic/Button";
import { showToast } from "@/utils/GenericFunctions";

export default {
  name: "AddTask",
  props: {},
  components: {
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
      const registeredTasks = this.$store.state.RegisteredTasks.registeredTasks;
      const toDoText = this.toDoText;
      const isTaskAlreadyAdded = registeredTasks.filter(
        item => item.text === toDoText
      ).length;

      if (toDoText.length === 0) {
        showToast(
          this,
          "danger",
          "Error",
          "The task input field is empty, please write the task before adding it"
        );
      }
      if (isTaskAlreadyAdded) {
        showToast(
          this,
          "danger",
          "Error",
          "The task is already added, please add a diferent task"
        );
      }

      if (toDoText.length !== 0 && !isTaskAlreadyAdded) {
        const newTask = {
          text: toDoText,
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
        this.toDoText = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-task-container {
  margin-right: unset;
  margin-left: unset;
  margin-bottom: 16px;
  max-width: 480px;

  .add-button-container {
    display: flex;
    justify-content: center;
  }
}
</style>
