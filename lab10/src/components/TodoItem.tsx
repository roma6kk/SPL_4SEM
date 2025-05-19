import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/reducer.ts';
import styles from './TodoItem.module.css';
import {Todo} from '../types.ts'

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [text, setText] = React.useState(todo.title);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo({ id: todo.id, title: text }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`${styles['todo-item']} ${todo.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
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
        <span className={styles['todo-text']}>{todo.title}</span>
      )}
      <div className={styles.actions}>
        <button onClick={handleEdit} className={`${styles.btn} ${styles['btn-edit']}`}>
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </button>
        <button onClick={handleDelete} className={`${styles.btn} ${styles['btn-delete']}`}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default TodoItem;