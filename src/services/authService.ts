import { fetchApi } from '@/shared/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  token: string;
  refreshToken: string;
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    // Store tokens
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    }

    return data;
  },

  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await fetchApi('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    // Store tokens
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    }

    return data;
  },

  logout: async (): Promise<void> => {
    try {
      await fetchApi('/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      // Even if the request fails, we should clear local tokens
      console.error('Logout request failed:', error);
    } finally {
      // Clear tokens from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
      }
    }
  },

  refreshToken: async (): Promise<string> => {
    const refreshToken =
      typeof window !== 'undefined'
        ? localStorage.getItem('refreshToken')
        : null;

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetchApi('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });

    const data = await response.json();

    // Update stored token
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', data.token);
      if (data.refreshToken) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }
    }

    return data.token;
  },

  verifyEmail: async (token: string): Promise<void> => {
    await fetchApi('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  },

  forgotPassword: async (email: string): Promise<void> => {
    await fetchApi('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await fetchApi('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password: newPassword }),
    });
  },
};
