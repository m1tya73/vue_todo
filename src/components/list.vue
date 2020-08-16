<template>
    <div>
        <layout v-model="newTodoText"
                @keydown.enter="addTodo"
                @add="addTodo">
        </layout>

        <item v-for="(todo, index) in ITEMS"
              :key="todo.id"
              :todo="todo"
              @remove="removeTodo(index)">
        </item>
    </div>
</template>

<script>
    import item from './item.vue'
    import layout from './layout.vue'
    import {mapActions, mapGetters} from 'vuex'

    let nextTodoId = 4;
    
    export default {
        name: 'list',
        components: {
            item,
            layout
        },
        
        data() {
            return {
                newTodoText: '',
            }
        },

        computed: {
            ...mapGetters([
                'ITEMS'
            ]),
        },
        
        methods: {
            
            ...mapActions([
                'GET_ITEMS_FROM_API',
                'DELETE_FROM_ITEM'
            ]),
            addTodo() {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.ITEMS.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    localStorage.setItem('todos', JSON.stringify(this.ITEMS))
                    this.newTodoText = ''
                }

            },
            removeTodo(index) {
                this.DELETE_FROM_ITEM(index)
                localStorage.setItem('todos', JSON.stringify(this.ITEMS))
            }
            
        },

        mounted() {
            this.GET_ITEMS_FROM_API()
            
        }
    }
    
</script>

<style>
    
</style>