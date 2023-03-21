export default {
    template: `
        <input @keyup.enter="addTodo"
                   class="p-4 w-full rounded-md placeholder-slate-400 border-0 shadow focus:outline-none focus:ring-2 ring-violet-400 text-lg"
                   placeholder="What needs to be done?"
                   type="text"
                   v-model="newTodo"
            >
    `,
    data(){
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo(){
            this.$emit('addTodo', this.newTodo);

            this.newTodo = ''
        }
    }
}