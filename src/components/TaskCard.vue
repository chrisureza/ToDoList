<template>
  <b-card
    :bg-variant="parseStatus()"
    text-variant="white"
    class="text-center card-container"
  >
    <MoreOptionsMenu :options="moreOptions" />
    <b-card-text>
      {{ text }}
    </b-card-text>
    <div class="buttons-container">
      <Button
        v-if="status !== 'Completed'"
        customClass="card-button card-button--completed"
        text="Completed"
        :onClick="() => changeTaskStatus('Completed')"
      />
      <Button
        v-if="status !== 'Missed'"
        customClass="card-button card-button--missed"
        text="Missed"
        :onClick="() => changeTaskStatus('Missed')"
      />
    </div>
  </b-card>
</template>

<script>
import Button from "./generic/Button";
import MoreOptionsMenu from "./generic/MoreOptionsMenu";
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
    Button,
    MoreOptionsMenu
  },
  data() {
    return {
      moreOptions: [
        {
          text: "Mark as Pending",
          onClick: () => this.changeTaskStatus("Pending"),
          hideOption: this.status === "Pending"
        },
        {
          text: "Delete Task",
          onClick: () => this.deleteTask(this.text)
        }
      ]
    };
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
    },
    deleteTask() {
      this.$store
        .dispatch("RegisteredTasks/deleteTask", this.text)
        .then(() => {
          showToast(this, "success", "Success", `The task was deleted`);
        })
        .catch(error => {
          showToast(this, "danger", "Error", `The task was not deleted`);
          console.error(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 6px !important;
  margin-bottom: 8px;

  .card-body {
    padding: 0;

    .card-text {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
