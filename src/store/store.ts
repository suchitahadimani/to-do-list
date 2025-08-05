import { create } from 'zustand';

type Todo = { id: number; todo: string; completed: boolean; userId: number };

interface TodoState {
  todos: Todo[];
  completedCount: number;
  totalCount:number;
  finishedtodo: Todo[];
  newtodo: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
  toggleComplete: (id: number) => void;
  updateTask: (id:number, task:string) => void;
  appendTodos: (newTodos: Todo[]) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  completedCount: 0,
  totalCount: 0,
  finishedtodo: [],
  newtodo: [],
  setTodos: (todos) => set({
    todos,
    finishedtodo: todos.filter(t => t.completed),
    newtodo: todos.filter(t => !t.completed),
    completedCount: todos.filter(t => t.completed).length,
    totalCount: todos.length
  }),

  addTodo: (todoS) => set((state) => {
     const newTodo: Todo = {
          id: Date.now(),
          todo: todoS,
          completed: false,
          userId: 42
        };
    const updated = [newTodo, ...state.todos];
    return {
      todos: updated,
      finishedtodo: updated.filter(t => t.completed),
      newtodo: updated.filter(t => !t.completed),
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),

  removeTodo: (id) => set((state) => {
    const updated = state.todos.filter(t => t.id !== id);
    return {
      todos: updated,
      finishedtodo: updated.filter(t => t.completed),
      newtodo: updated.filter(t => !t.completed),
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),

  toggleComplete: (id) => set((state) => {
    const updated = state.todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    return {
      todos: updated,
      finishedtodo: updated.filter(t => t.completed),
      newtodo: updated.filter(t => !t.completed),
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),

  updateTask: (id, task) => set((state) => {
    const updated = state.todos.map(t =>
      t.id === id ? { ...t, todo: task } : t
    );
    return {
      todos: updated,
      finishedtodo: updated.filter(t => t.completed),
      newtodo: updated.filter(t => !t.completed),
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),

    appendTodos: (newTodos: Todo[]) => set((state) => {
    const updated =[...state.todos, ...newTodos];
    return {
      todos: updated,
      finishedtodo: updated.filter(t => t.completed),
      newtodo: updated.filter(t => !t.completed),
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),
}));
