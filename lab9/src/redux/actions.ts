import { Todo } from '../types/todo';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: Todo;
};

export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: number; // id
};

export type EditTodoAction = {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    text: string;
  };
};

export type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  payload: number; // id
};

export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | DeleteTodoAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const editTodo = (id: number, text: string): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});