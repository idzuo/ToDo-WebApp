import TodoCreate from "./TodoCreate.js";
import TodoList from "./TodoList.js"
export default {
    components: {TodoList, TodoCreate},
    template: `
        <header class="w-1/3 flex flex-col items-center space-y-10">
            <h2 class="text-5xl font-bold leading-tight text-white">todos</h2>
            <todo-create v-on:addTodo="addTodo"></todo-create>
        </header>
        
        <section class="w-full flex justify-around mt-32">
            <todo-list v-on:deleteFromTodo="deleteTodo" title="Active" :todos="filters.inProgress"></todo-list>
            <todo-list v-on:deleteFromTodo="deleteTodo" title="Completed" :todos="filters.completed"></todo-list>
        </section>
      
        
        <span class="text-xs text-slate-400 font-light fixed bottom-5 right-5">Created by @d855</span>
    `,
    data() {
        return {
            todos: [
                { id: 1, title: 'Do something', completed: false },
                { id: 2, title: 'Do something2', completed: true },
                { id: 3, title: 'Do something3', completed: true },
                { id: 4, title: 'Do something4', completed: true },
            ],
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.todos.filter(todo => !todo.completed),
                completed: this.todos.filter(todo => todo.completed)
            }
        }
    },
    methods: {
        addTodo(todo) {
            if (!todo) {
                return;
            }

            this.todos.push({
                id: Date.now(),
                title: todo,
                completed: false
            })
        },
        deleteTodo(todo){
            let position = this.todos.indexOf(todo)
            this.todos.splice(position, 1)
        },
        clearCompletedTodos() {
            this.todos = this.filters.inProgress
        }
    }
}
