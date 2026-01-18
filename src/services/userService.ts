import { fetchApi } from '@/shared/api';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  avatar?: string;
}

export const userService = {
  getUsers: async (page: number = 1, limit: number = 10) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    const response = await fetchApi(`/users?${params.toString()}`, {
      method: 'GET',
    });

    return response.json();
  },

  getUserById: async (id: string): Promise<User> => {
    const response = await fetchApi(`/users/${id}`, {
      method: 'GET',
    });

    return response.json();
  },

  createUser: async (data: CreateUserData): Promise<User> => {
    const response = await fetchApi('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateUser: async (id: string, data: UpdateUserData): Promise<User> => {
    const response = await fetchApi(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteUser: async (id: string): Promise<void> => {
    await fetchApi(`/users/${id}`, {
      method: 'DELETE',
    });
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await fetchApi('/users/me', {
      method: 'GET',
    });

    return response.json();
  },
};
