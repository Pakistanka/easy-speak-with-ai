import { fetchApi } from '@/shared/api';

export const postService = {
  getPosts: async (query: string = '', category?: string, sortBy: string = 'newest') => {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (category) params.append('category', category);
    if (sortBy) params.append('sortBy', sortBy);

    const url = params.toString() ? `/posts?${params.toString()}` : '/posts';
    const response = await fetchApi(url, {
      method: 'GET',
    });

    return response.json();
  },

  createPost: async (data: {
    title: string;
    content: string;
    authorId: string;
  }) => {
    const response = await fetchApi('/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response.json();
  },

  getPostById: async (id: string) => {
    const response = await fetchApi(`/posts/${id}`, {
      method: 'GET',
    });

    return response.json();
  },

  updatePost: async (id: string, data: {
    title?: string;
    content?: string;
  }) => {
    const response = await fetchApi(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deletePost: async (id: string) => {
    const response = await fetchApi(`/posts/${id}`, {
      method: 'DELETE',
    });

    return response.json();
  },
};
