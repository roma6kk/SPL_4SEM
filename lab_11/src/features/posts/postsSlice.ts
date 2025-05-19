import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post, NewPost } from './postsAPI';
import { fetchPosts, createPost, updatePost, deletePost } from './postsAPI';

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  return await fetchPosts();
});

export const createPostAsync = createAsyncThunk('posts/createPost', async (post: NewPost) => {
  return await createPost(post);
});

export const updatePostAsync = createAsyncThunk('posts/updatePost', async (post: Post) => {
  return await updatePost(post);
});

export const deletePostAsync = createAsyncThunk('posts/deletePost', async (id: number) => {
  await deletePost(id);
  return id;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;