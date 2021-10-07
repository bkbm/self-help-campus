<template>
    <h2>Worksheets</h2>
    <router-link :to="{ name: 'Worksheet', params: { id: 'ws1' } }"
        >Automatic Thought Record</router-link
    >
    <router-link :to="{ name: 'Worksheet', params: { id: 'ws2' } }">
        Venting
    </router-link>
    <router-link :to="{ name: 'Worksheet', params: { id: 'ws3' } }">
        DBT Check the Facts
    </router-link>
    <router-link :to="{ name: 'Worksheet', params: { id: 'ws4' } }">
        CSS Test Worksheet
    </router-link>
        <router-link :to="{ name: 'Worksheet', params: { id: 'ws5' } }">
        DEARMAN worksheet
    </router-link>
</template>

<script>
export default {
    name: 'Worksheets',
    components: {},
    setup() {},
};
</script>

<style></style>
