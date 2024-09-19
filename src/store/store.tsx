import { create } from 'zustand';

interface AuthState {
  token: string;
  setToken: (payload: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: '',

  setToken: (payload: string) => set(() => ({ token: payload })),
}));
