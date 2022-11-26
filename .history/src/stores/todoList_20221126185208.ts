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
  text: string;
  isFinished: boolean;
}

interface ITodos {
  todos: ITodo[];
  filter: "all" | "finished" | "unfinished";
  nextId: 0;
}

export const useTodoStore = defineStore({
  id: "todos",
  state: (): ITodos => ({
    todos: [],
    filter: "all",
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unFinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos(): ITodo[] {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "finished") {
        return this.finishedTodos;
      } else {
        return this.unFinishedTodos;
      }
    },
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({
        text,
        id: this.nextId++,
        isFinished: false,
      });
    },
    toggleTodoFinished(id: number) {
      const finishedStatus = this.todos.find(
        (todo) => todo.id === id
      )!.isFinished;
      console.log("finishedStatus: ", finishedStatus);
      this.todos.find((todo) => todo.id === id)!.isFinished = true;
    },
    removeTodoById(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
