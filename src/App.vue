<template>
    <div id="app">
        <list></list>

    </div>
</template>
<script>
    import list from './components/list.vue'

    export default {
        name: 'app',
        components: {
            list
        },
    }

    
</script>
<style>
    #app {
        margin: 0px auto;
        max-width: 700px;
        border: solid 1px grey;
        border-radius: 3px;
    }
</style>
