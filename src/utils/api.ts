import { type User } from '../types/auth';

interface LoginResponse {
  success: boolean;
  user?: User;
  message?: string;
}

export const mockLogin = async (username: string, password: string): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        resolve({
          success: true,
          user: { id: '1', username: 'admin', email: 'admin@school.com', role: 'admin', token: 'fake-admin-token' },
        });
      } else if (username === 'teacher' && password === 'teacher123') {
        resolve({
          success: true,
          user: { id: '2', username: 'teacher', email: 'teacher@school.com', role: 'teacher', token: 'fake-teacher-token' },
        });
      } else if (username === 'student' && password === 'student123') {
        resolve({
          success: true,
          user: { id: '3', username: 'student', email: 'student@school.com', role: 'student', token: 'fake-student-token' },
        });
      } else {
        resolve({
          success: false,
          message: 'Invalid username or password',
        });
      }
    }, 1000); // Simulate network delay
  });
};