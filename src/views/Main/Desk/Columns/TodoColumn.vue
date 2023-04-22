<template>
  <div
    class="column toDo-column"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop($event, columnStatus)"
  >
    <h6 class="column-title">To Do</h6>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import Task from "../Task.vue";
export default {
  name: "TodoColumn",
  components: { Task },
  props: ["tasks"],
  data() {
    return {
      columnStatus: "toDo",
    };
  },
  methods: {
    onDrop(e: DragEvent, columnStatus: string) {
      const taskId = e.dataTransfer?.getData("taskId");
      // @ts-ignore
      this.$store.dispatch("CHANGE_TASK_STATUS", { taskId, columnStatus });
    },
  },
};
</script>

<style>
.column {
  flex: 1 1 33.3%;
  border: solid 2px gray;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 3px;
}
.toDo-column {
  background-color: rgba(246, 142, 142, 0.2);
}
.column-title {
  font-size: 20px;
  color: rgb(246, 142, 142);
}
</style>
