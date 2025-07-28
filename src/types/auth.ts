export type UserRole = 'admin' | 'teacher' | 'student' | null;

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  token: string;
}