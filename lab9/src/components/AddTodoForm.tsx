import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions.ts';
import styles from './AddTodoForm.module.css'

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles['add-todo-form']}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу..."
        className={styles['todo-input']}
      />
      <button type="submit" className={styles['btn']}>Добавить</button>
    </form>
  );
};

export default AddTodoForm;