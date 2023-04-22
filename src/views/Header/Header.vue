<template>
  <header>
    <h3>Hello friend!</h3>
    <h3>You have {{ tasksList.length }} deals today!</h3>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header",
  computed: {
    // @ts-ignore
    tasksList() {
      // @ts-ignore
      return this.$store.getters.TASKS;
    },
  },
};
</script>

<style scoped>
header {
  height: 80px;
  padding: 10px;
  border: 2px solid rgb(82, 134, 82);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgb(237, 249, 243);
}
</style>
