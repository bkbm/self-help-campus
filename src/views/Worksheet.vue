<template>
  <div class="header"></div>
  <div>
      <Questions />
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";
export default {
  name: Worksheet,
  components: {
    Questions,
  },
  props: [id],
  setup(props) {
    const id = ref(props.id);

    return { id };
  },
};
</script>

<style></style>
