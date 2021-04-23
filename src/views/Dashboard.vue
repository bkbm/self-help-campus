<template>
    <h2>Dashboard</h2>
    <p>{{ user.firstName }}</p>
</template>

<script>
import { computed } from "vue";
//import {ref} from 'vue'
import { useStore } from "vuex";
export default {
    name: "Dashboard",
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.getUserProfile);

        return { user };
    },
};
</script>

<style></style>
