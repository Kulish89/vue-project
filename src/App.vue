<template>
  <div class="app-wrapper" id="app">
    <Header />
    <Main />
  </div>
</template>

<script lang="ts">
import Header from "./views/Header/Header.vue";
import Main from "./views/Main/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-wrapper {
  text-align: center;
  max-width: 1280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  gap: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px;
  position: relative;
}
</style>
