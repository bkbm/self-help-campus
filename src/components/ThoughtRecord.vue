<template>
<div>{{ worksheet }}</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        
        const store = useStore();
        store.dispatch('fetchUserWorksheet');
        const worksheet = computed(() => {
            return store.getters.getWorksheets;
        });
        console.log('hello', worksheet)
        return {worksheet}
    },
};
</script>

<style></style>
