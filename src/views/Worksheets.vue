<template>
  <h2>Worksheets</h2>
  <router-link :to="{ name: 'Worksheet', params: { id: 'ws1' } }"
    >Worksheet Test</router-link
  >
</template>

<script>
export default {
  name: "Worksheets",
  components: {},
};
</script>

<style></style>
