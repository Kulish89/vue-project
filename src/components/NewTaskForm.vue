<template>
  <div class="form-container">
    <form @submit.prevent="createTask" class="form">
      <input type="text" v-model="task.title" placeholder="Task title" />
      <input type="text" v-model="task.body" placeholder="Task description" />
      <fieldset>
        <legend>Task Status</legend>
        <div>
          <input
            type="radio"
            id="toDostatus"
            name="status"
            value="toDo"
            v-model="task.status"
          />
          <label for="toDostatus">To Do</label>

          <input
            type="radio"
            id="doingStatus"
            name="status"
            value="doing"
            v-model="task.status"
          />
          <label for="doingStatus">Doing</label>

          <input
            type="radio"
            id="doneStatus"
            name="status"
            value="done"
            v-model="task.status"
          />
          <label for="doneStatus">Done</label>
        </div>
      </fieldset>
      <div class="form-btns">
        <button type="submit" class="btn">Create</button>
        <button @click.prevent="cancel" class="btn cancel-btn">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewTaskForm",
  data() {
    return {
      task: { id: "", title: "", body: "", status: "" },
    };
  },
  methods: {
    createTask() {
      this.task.id = Date.now().toString();
      if (!this.task.status) this.task.status = "toDo";
      this.$emit("create", this.task);
      this.$emit("cancel");
      this.task = { id: "", title: "", body: "", status: "" };
    },
    cancel() {
      this.$emit("cancel");
      this.task = { id: "", title: "", body: "", status: "" };
    },
  },
});
</script>

<style scoped>
.form-container {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.5);
  backdrop-filter: blur(10px);
}
.form {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 20px;
  border: solid 2px white;
  border-radius: 10px;
  padding: 0 30px 0 30px;
}
.form-btns {
  display: flex;
  justify-content: space-around;
}
.btn {
  padding: 10px;
  color: rgb(82, 134, 82);
  border: solid 2px rgb(82, 134, 82);
  border-radius: 5px;
  cursor: pointer;
}
.cancel-btn {
  color: red;
  border: solid 2px red;
}
</style>
