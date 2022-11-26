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
  todos: Array<ITodo>[];
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
    finishedTodos: (state) => {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unFinishedTodos: (state) => {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "finished") {
        return this.finishedTodos;
      } else {
        return this.unFinishedTodos;
      }
    },
  },
});
