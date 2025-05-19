import React from 'react';
import { Post } from '../features/posts/postsAPI';
import styles from './PostItem.module.css';

interface PostItemProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onEdit, onDelete }) => {
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className={styles.buttons}>
        <button onClick={() => onEdit(post)} className={styles.editButton}>
          Edit
        </button>
        <button onClick={() => onDelete(post.id)} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;