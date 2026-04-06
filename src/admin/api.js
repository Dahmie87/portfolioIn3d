import axios from 'axios';

// Backend URL - change based on environment
const API_URL = import.meta.env.VITE_ADMIN_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ===== CONTACTS =====

export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contacts'),
  delete: (id) => api.delete(`/contacts/${id}`),
};

// ===== BLOG POSTS =====

export const blogAPI = {
  create: (data) => api.post('/posts', data),
  getAll: () => api.get('/posts'),
  getBySlug: (slug) => api.get(`/posts/${slug}`),
  update: (id, data) => api.put(`/posts/${id}`, data),
  delete: (id) => api.delete(`/posts/${id}`),
};

// ===== VISITORS =====

export const visitorAPI = {
  log: (data) => api.post('/log-visitor', data),
  getStats: () => api.get('/stats'),
};

// ===== AUTHENTICATION =====
// Simple token-based auth (stored in localStorage)

export const authAPI = {
  login: (username, password) => {
    // Simple hardcoded auth for demo
    // In production, create a real auth endpoint
    if (username === 'admin' && password === 'admin') {
      const token = 'fake_jwt_token_' + Date.now();
      localStorage.setItem('authToken', token);
      return Promise.resolve({ token, username });
    }
    return Promise.reject(new Error('Invalid credentials'));
  },

  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },

  getToken: () => localStorage.getItem('authToken'),

  isAuthenticated: () => !!localStorage.getItem('authToken'),
};

// ===== ERROR HANDLING =====

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.detail || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default api;
