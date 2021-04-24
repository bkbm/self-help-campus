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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup(props){
    const store = useStore()
    const worksheetid = ref(props.id)
    const array = computed(() => {
      return store.getters.getQuestions[worksheetid]
    })
    return {array}
  }
};
</script>

<style></style>
