<template>
  <div class="task" draggable="true" @dragstart="onDragstart($event, task)">
    <p>
      <b>{{ task.title }}</b>
    </p>
    <p>
      <em>{{ task.body }}</em>
    </p>
    <div class="task-btns">
      <button @click="remove(task.id)">Delete</button>
      <button @click="isOpenEditModal = true">Edit</button>
      <button @click="isOpenComments = !isOpenComments">comments</button>
    </div>
    <Comments v-show="isOpenComments" />
    <edit-modal
      :task="task"
      v-show="isOpenEditModal"
      @close="isOpenEditModal = false"
    />
  </div>
</template>

<script lang="ts">
import { TaskType } from "@/store";
import EditModal from "../../../components/EditModal.vue";
import Comments from "./Comments.vue";
export default {
  name: "Task",
  components: {
    EditModal,
    Comments,
  },
  props: ["task"],
  data() {
    return {
      isOpenEditModal: false,
      isOpenComments: false,
    };
  },
  methods: {
    remove(id: string) {
      // @ts-ignore
      this.$store.dispatch("DELETE_TASK", id);
    },
    onDragstart(e: DragEvent, task: TaskType) {
      e.dataTransfer?.setData("taskId", task.id);
    },
  },
};
</script>

<style scoped>
.task {
  width: 100%;
  padding: 10px;
  box-shadow: 5px 5px 10px gray;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: start;
  background-color: white;
}
.task-btns {
  display: flex;
  gap: 5px;
}
</style>
