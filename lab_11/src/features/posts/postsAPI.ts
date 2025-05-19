import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export interface NewPost {
  title: string;
  body: string;
  userId?: number;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createPost = async (post: NewPost): Promise<Post> => {
  const response = await axios.post(BASE_URL, post);
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await axios.put(`${BASE_URL}/${post.id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};