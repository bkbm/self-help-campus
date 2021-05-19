<template>
    <form @submit.prevent="submitWorksheet"> 
        <div class="list" v-for="item in array" :key="item">
            <div class="question">
                <label> {{ item }} </label>
                <br />
                <input v-model="object[item]" type="textarea" />
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
    const userId = computed( () => {
      return store.getters.getUser
    })
    const object = ref({uid: userId.value,templateId: worksheetid.value})

    const submitWorksheet = () => {
      console.log("before", object.value)
      store.dispatch("submitFormData", object.value)
    }
    return {worksheetid, array, submitWorksheet, object}
  }
};
</script>

<style></style>