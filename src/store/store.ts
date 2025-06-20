import { create } from 'zustand';

type Todo = { id: number; todo: string; completed: boolean; userId: number };

interface TodoState {
  todos: Todo[];
  completedCount: number;
  totalCount:number;
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
  toggleComplete: (id: number) => void;
  updateTask: (id:number, task:string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  completedCount: 0,
  totalCount: 0,
  setTodos: (todos) => set({
    todos,
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
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),

  removeTodo: (id) => set((state) => {
    const updated = state.todos.filter(t => t.id !== id);
    return {
      todos: updated,
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
      completedCount: updated.filter(t => t.completed).length,
      totalCount: updated.length
    };
  }),
}));
