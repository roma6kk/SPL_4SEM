import { createStore } from 'redux';
import todoReducer from './reducer.ts';

const store = createStore(todoReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;