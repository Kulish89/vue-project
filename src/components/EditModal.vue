<template>
  <div class="edit-modal">
    <form @submit.prevent="updateTask" class="edit-form">
      <input type="text" v-model="newTitle" />
      <input type="text" v-model="newBody" />
      <button type="submit" @click="$emit('close')">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EditModal",
  props: ["task"],
  data() {
    return {
      newTitle: this.task.title,
      newBody: this.task.body,
    };
  },
  methods: {
    updateTask() {
      // @ts-ignore
      this.$store.dispatch("UPDATE_TASK", {
        title: this.newTitle,
        body: this.newBody,
        id: this.task.id,
      });
    },
  },
  mounted() {
    this.newBody = this.task.body;
    this.newTitle = this.task.title;
  },
});
</script>

<style>
.edit-modal {
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
.edit-form {
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
</style>
