<template>
  <div
    class="column done-column"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop($event, columnStatus)"
  >
    <h6 class="column-title">Done</h6>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import Task from "../Task.vue";
export default {
  name: "DoingColumn",
  components: {
    Task,
  },
  props: ["tasks"],
  data() {
    return {
      columnStatus: "done",
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

<style scoped>
.column-title {
  color: rgb(164, 247, 164);
}
.done-column {
  background-color: rgba(164, 247, 164, 0.2);
}
</style>
