import Todo from "./Todo.js"

export default {
    components: {Todo},
    template: `
        <section class="w-1/3 space-y-5 mb-20" v-show="todos.length">
            <h2 class="text-3xl font-semibold text-white">
                {{ title }}
                <span class="text-2xl">
                    ({{todos.length}})
                </span>
            </h2>
            <ul class="space-y-4">
                <todo @delete-todo="deleteTodo" v-for="todo in todos" :key="todo.id" :todo="todo"></todo>
            </ul>
        </section>
    `,
    props: {
        title: String,
        todos: Array
    },
    methods: {
        deleteTodo(todo) {
            this.$emit('deleteFromTodo', todo)
        }
    }
}