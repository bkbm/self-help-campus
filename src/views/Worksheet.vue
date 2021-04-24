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
    const  a = ref(props['id'])
    console.log(a)
      return {a}
  },
};
</script>

<style></style>
