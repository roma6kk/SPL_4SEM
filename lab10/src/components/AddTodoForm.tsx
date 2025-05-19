import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducer.ts';
import styles from './AddTodoForm.module.css';
interface AddTodoFormProps {}

const AddTodoForm: React.FC<AddTodoFormProps> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['add-todo-form']}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите задачу..."
        className={styles['todo-input']}
      />
      <button type="submit" className={styles['btn']}>Добавить</button>
    </form>
  );
};

export default AddTodoForm;