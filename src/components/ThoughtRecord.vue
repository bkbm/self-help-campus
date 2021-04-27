<template>
<div v-for="item in worksheet" :key="item.id">
    <Thought :record = "item" />
</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Thought from './Thought.vue'
export default {
    components: {
        Thought
    },
    setup() {
        
        const store = useStore();
        const worksheet = computed(() => {
            return store.getters.getWorksheet;
        });
        console.log('hello', store.getters.getWorksheet)
        return {worksheet}
    },
};
</script>

<style></style>
