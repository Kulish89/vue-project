<template>
  <div class="main">
    <button class="btn" @click="isOpenForm = true">Create New Task</button>
    <new-task-form
      @create="createTask"
      v-show="isOpenForm"
      @cancel="isOpenForm = false"
    />
    <Desk :tasks="tasksList" />
  </div>
</template>

<script lang="ts">
import { TaskType } from "@/store";
import Desk from "./Desk/Desk.vue";
import NewTaskForm from "../../components/NewTaskForm.vue";

export default {
  name: "Main",
  components: { Desk, NewTaskForm },
  data() {
    return {
      isOpenForm: false,
    };
  },
  computed: {
    // @ts-ignore
    tasksList() {
      // @ts-ignore
      return this.$store.getters.TASKS;
    },
  },

  methods: {
    createTask(task: TaskType) {
      // @ts-ignore
      this.$store.dispatch("ADD_TASK", task);
    },
  },
  mounted() {
    // @ts-ignore
    this.$store.dispatch("GET_TASKS");
  },
};
</script>

<style scoped>
.main {
  flex-grow: 1;
}
.btn {
  background: transparent;
  padding: 10px;
  color: rgb(82, 134, 82);
  border: solid 2px rgb(82, 134, 82);
  border-radius: 5px;
  cursor: pointer;
}
</style>
