import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem.tsx';
import { TodosState } from '../types';
import styles from './TodoList.module.css'
interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector((state: { todos: TodosState }) => state.todos.todos);

  return (
    <ul className={styles['todo-list']}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;