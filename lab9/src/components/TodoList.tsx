import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TodoItem from './TodoItem.tsx';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state); 

  return (
    <ul className={styles['todo-list']}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;