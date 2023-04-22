<template>
  <div class="desk">
    <div class="columns-container">
      <todo-column :tasks="toDo" />
      <doing-column :tasks="doing" />
      <done-column :tasks="done" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoColumn from "./Columns/TodoColumn.vue";
import DoingColumn from "./Columns/DoingColumn.vue";
import DoneColumn from "./Columns/DoneColumn.vue";

export default defineComponent({
  components: {
    TodoColumn,
    DoingColumn,
    DoneColumn,
  },
  props: ["tasks"],
  computed: {
    toDo() {
      return this.tasks.filter((task: any) => {
        return task.status === "toDo";
      });
    },
    doing() {
      return this.tasks.filter((task: any) => {
        return task.status === "doing";
      });
    },
    done() {
      return this.tasks.filter((task: any) => {
        return task.status === "done";
      });
    },
  },
});
</script>

<style scoped>
.columns-container {
  height: 100%;
  display: flex;
  gap: 15px;
  align-items: stretch;
  border-radius: 3px;
}
.desk {
  background-color: rgb(237, 249, 243);
  height: 100%;
  padding: 10px;
  margin-top: 15px;
}
</style>
