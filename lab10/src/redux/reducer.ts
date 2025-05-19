import { createSlice } from '@reduxjs/toolkit';
import { TodosState } from './types.ts';

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;