export default {
    template: `
        <li class="p-4 bg-white rounded-md flex justify-between items-center" :class="{'bg-gray-300': todo.completed }">
            <label class="w-full flex justify-between items-center cursor-pointer">
                <span :class="{'text-gray-500 line-through': todo.completed }">
                    {{ todo.title }}
                </span>
                
                <input type="checkbox" v-model="todo.completed" class="rounded-full cursor-pointer text-green-500 mr-2 focus:ring-green-400 focus:ring-opacity-25 border border-gray-300">
            </label>
            <button @click="$emit('deleteTodo', todo)">
                <svg  class="h-4 w-4 ml-px stroke-2 stroke-white bg-red-500 cursor-pointer rounded-full" fill="none"
                     stroke="currentColor"
                     stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

        </li>
    `,
    props: {
        todo: Object
    }
}