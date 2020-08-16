<template>
    <div class="add_task">
        <div class="add_task__input ">
            <label>Task</label>
            <input type="text" :value="value" v-on="listeners">
        </div>
        <button class="add_task__btn" @click="$emit('add')">ADD</button>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        computed: {
            listeners() {
                return {
                    // Pass all component listeners directly to input
                    ...this.$listeners,
                    // Override input listener to work with v-model
                    input: event => this.$emit('input', event.target.value)
                }
            }
        }
    }
    
</script>

<style>
    .add_task {
        display: flex;
        padding: 15px;
        border-radius: 10px;
        position: relative;
    }

    .add_task__input input {
        width: 500px;
        height: 40px;
        text-align: left;
        border: 2px solid grey;
        border-radius: 5px;
    }

    .add_task__input label {
        position: absolute;
        top: 5px;
        left: 30px;
        background-color: #fff;
        padding: 0 5px;
        color: grey;
    }

    .add_task__btn {
        width: 150px;
        height: 45px;
        margin: 0px 4px;
        border: 2px solid lightgreen;
        background: white;
        color: lightgreen;
        border-radius: 5px;
    }

        .add_task__btn:hover {
            cursor: pointer;
            border-radius: 4px;
            background-color: #2f485811;
        }
</style>