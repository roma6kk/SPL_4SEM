import { Todo } from '../types/todo';
import { TodoAction } from './actions';

type InitialState = Todo[];

const initialState: InitialState = [];

const todoReducer = (state: InitialState = initialState, action: TodoAction): InitialState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;