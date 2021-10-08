<template>
  <span v-for="item in rec" :key="item.key">[{{item.key}}{{item}}] </span>
  
</template>

<script>
export default {
    props: ['record'],
    setup(props){
        return { rec: props.record}
    }

}
</script>

<style>

</style>
