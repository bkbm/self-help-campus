<template>
  <h2>Worksheets</h2>
  <router-link :to="{ name: 'Worksheet', params: { id: 'ws1' } }"
    >Worksheet Test</router-link
  >
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Worksheets",
  components: {},
=======
import Questions from '../components/Questions.vue';
export default {
    name: 'Worksheets',
    components: {
        Questions,
    },
>>>>>>> ece66b8b530affcbc69cc95cb4a1d42e626d9781
};
</script>

<style></style>
