// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

interface ITodo {
  id: number;
  title: string;
  isFinished: boolean;
}

interface ITodos {
  todos: Array<ITodo>[] | undefined;
  filter: "all" | "finished" | "unfinished";
  nextId: 0;
}

export const useTodos = defineStore({
  id: "todos",
  state: (): ITodos => ({
    todos: [],
    filter: "all",
    nextId: 0,
  }),
  getters: {
    filteredTodos: (state) => {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
});
