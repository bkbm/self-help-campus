<template>
  <form>
    <div class="list" v-for="item in array" :key="item">
      <div class="question">
        <label> {{ item }} </label>
        <br />
        <input type="textarea" />
      </div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      array: ["question 1", "question 2"],
    };
  },
  methods: {
    call() {
      return this.$data.array;
    },
  },
};
</script>

<style></style>
