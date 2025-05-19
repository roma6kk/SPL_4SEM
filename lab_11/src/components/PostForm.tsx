import React, { useState } from 'react';
import { Post, NewPost } from '../features/posts/postsAPI';
import styles from './PostForm.module.css';

interface PostFormProps {
  existingPost?: Post;
  onSubmit: (post: NewPost | Post) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ existingPost, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(existingPost?.title || '');
  const [body, setBody] = useState(existingPost?.body || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post = existingPost 
      ? { id: existingPost.id, title, body }
      : { title, body };
    onSubmit(post);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className={styles.input}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
        className={styles.textarea}
      />
      <div className={styles.buttons}>
        <button type="submit" className={styles.submitButton}>
          {existingPost ? 'Update' : 'Create'}
        </button>
        <button type="button" onClick={onCancel} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;