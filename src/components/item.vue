<template>
    <div class="task">
        <label class="container"><input type="checkbox" /><span class="checkmark"></span></label>
        <div>
            <h4 contenteditable="true" class="task_title">{{todo.text}}</h4>
        </div>
        <button class="task__done" @click="$emit('remove')">❌</button>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .task {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 10px 10px 10px;
        padding: 5px;
        max-width: 100%;
    }
    /*.task:hover {
        background-color: #2f485811;
    }*/

    .task_title {
        font-size: 15px;
        width: 550px;
        height: 20px;
        text-align: left;
        padding-top: 10px;
        overflow-x: hidden;
        outline: none;
    }

        .task_title:focus {
            font-size: 16px;
            padding-right: 70px;
            border-bottom: 2px solid mediumblue;
            margin-right: -35px;
        }



    .container {
        display: block;
        /*border: 1px solid black;*/
        position: relative;
        /*padding-left: 0px;*/
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 17px;
        width: 17px;
        border: 1px solid grey;
        background-color: white;
    }

    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    .container input:checked ~ .checkmark {
        background-color: #FF1493;
        border: 1px solid #FF1493;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 5px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .task__done {
        background-color: white;
        color: red;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 15px;
    }
</style>