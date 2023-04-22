<template>
  <div
    class="column doing-column"
    @drop="onDrop($event, columnStatus)"
    @dragover.prevent
    @dragenter.prevent
  >
    <h6 class="column-title">Doing</h6>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import Task from "../Task.vue";
export default {
  name: "DoingColumn",
  components: { Task },
  props: ["tasks"],
  data() {
    return {
      columnStatus: "doing",
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
  color: rgb(243, 243, 96);
}
.doing-column {
  background-color: rgba(243, 243, 96, 0.2);
}
</style>
