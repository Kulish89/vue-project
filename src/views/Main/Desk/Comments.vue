<template>
  <div class="comments">
    <div>
      <input type="text" v-model="commentValue" placeholder="Leave a comment" />
      <button>+</button>
    </div>
    <div>comments will be here</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Comments",

  props: ["comments"],
  data() {
    return {
      commentValue: "",
    };
  },
  methods: {},
});
</script>

<style scoped></style>
