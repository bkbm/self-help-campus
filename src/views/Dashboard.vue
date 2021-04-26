<template>
  <h2>Dashboard</h2>
  <ThoughtRecord  />
</template>

<script>
import { computed } from "vue";
//import {ref} from 'vue'
import { useStore } from "vuex";
import ThoughtRecord from "../components/ThoughtRecord.vue"
export default {
  name: "Dashboard",
  components:{
    ThoughtRecord
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.getUser);

    return { user };
  },
};
</script>

<style></style>
