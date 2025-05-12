import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../redux/actions.ts';
import { Todo } from '../types/todo';
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.text);

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      dispatch(editTodo(todo.id, text));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className={styles.checkbox}
      />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles['edit-input']}
        />
      ) : (
        <span className={styles['todo-text']}>{todo.text}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit} className={'${styles.btn} ${styles["btn-edit"]}'}>
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </button>
        <button onClick={handleDelete} className={'${styles.btn} ${styles["btn-delete"]}'}>Удалить</button>
      </div>
    </li>
  );
};

export default TodoItem;