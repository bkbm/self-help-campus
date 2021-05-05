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
  props: ['id'],
  setup(props){
    const store = useStore()
    const worksheetid = ref(props.id)
    const array = computed(() => {
      return store.getters.getQuestions[worksheetid.value]
    })
    const submitWorksheet = () => {
      store.dispatch("submitFormData", {
        
      })
    }
    console.log(worksheetid)
    return {worksheetid, array, submitWorksheet}
  }
};
</script>

<style></style>
