<template>
  <div class="header"></div>
  <div>
    <Questions :id="a" />
  </div>
</template>

<script>
import { ref } from "vue";
import Questions from "../components/Questions.vue";
export default {
  name: "Worksheet",
  components: {
    Questions,
  },
  props: ['id'],
  setup(props){
      return {a : ref(props['id'])}
  },
};
</script>

<style></style>
