window.todoStore = {
    todos: JSON.parse(localStorage.getItem('todo-store') || '[]'),

    save(){
        localStorage.setItem('todo-store', JSON.stringify(this.todos))
    }
}
Vue.createApp({
    data(){
        return {
            ...todoStore,
            newTodo: '',
        }
    },
    computed:{
        active(){
            return this.todos.filter(todo => ! todo.completed)
        },

        completed(){
            return this.todos.filter(todo => todo.completed)
        }
    },
    methods: {
        addTodo(){
            if( ! this.newTodo ){
                return;
            }

            this.todos.push({
                id: Date.now(),
                title: this.newTodo,
                completed: false
            })

            this.newTodo = ''

            this.save()
        },
        deleteTodo(todo){
            let position = this.todos.indexOf(todo);

            this.todos.splice(position, 1);

            this.save()
        },
        toggleCompletion(todo) {
            todo.completed = ! todo.completed;

            this.save()
        },

        clearCompletedTodos(){
            this.todos = this.active

            this.save()
        }
    }
})