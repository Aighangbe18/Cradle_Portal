import { create } from 'zustand';
import {type User, type UserRole} from "../types/auth"

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  role: UserRole;
  login: (user: User) => void;
  logout: () => void;
  checkAuth: () => void; // To check auth status on app load
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  role: null,

  login: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true, role: user.role });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false, role: null });
  },

  checkAuth: () => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user: User = JSON.parse(storedUser);
        set({ user, isAuthenticated: true, role: user.role });
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('user'); // Clear corrupted data
      set({ user: null, isAuthenticated: false, role: null });
    }
  },
}));