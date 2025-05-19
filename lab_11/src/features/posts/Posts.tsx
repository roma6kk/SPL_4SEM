import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { 
  fetchPostsAsync, 
  createPostAsync, 
  updatePostAsync, 
  deletePostAsync 
} from './postsSlice';
import { Post, NewPost } from './postsAPI';
import PostItem from '../../components/PostItem';
import PostForm from '../../components/PostForm';
import styles from './Posts.module.css';

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deletePostAsync(id));
  };

  const handleSubmit = (post: NewPost | Post) => {
    if ('id' in post) {
      dispatch(updatePostAsync(post));
    } else {
      dispatch(createPostAsync(post));
    }
    setShowForm(false);
    setEditingPost(null);
  };

  return (
    <div className={styles.container}>
      <h1>Posts Manager</h1>
      
      <button 
        onClick={() => setShowForm(true)} 
        className={styles.addButton}
      >
        Add New Post
      </button>

      {(showForm || editingPost) && (
        <PostForm
          existingPost={editingPost || undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingPost(null);
          }}
        />
      )}

      {status === 'loading' && <div>Loading...</div>}
      
      <div className={styles.postsList}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onEdit={setEditingPost}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;