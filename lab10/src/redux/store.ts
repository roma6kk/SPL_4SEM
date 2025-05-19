import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducer.ts';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;