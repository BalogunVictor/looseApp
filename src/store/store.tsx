import { DashboardPayload } from '@/types/user';
import { create } from 'zustand';

interface AuthState {
  modal: boolean;
  token: string;
  user: DashboardPayload | null;
  setModal: (Payload: boolean) => void;
  setToken: (payload: string) => void;
  setUser: (payload: DashboardPayload) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  modal: false,
  token: '',
  user: null,
  setModal: (payload: boolean) => set({ modal: payload }),
  setToken: (payload: string) => set(() => ({ token: payload })),
  setUser: (payload: DashboardPayload) => set(() => ({ user: payload })),
  clearUser: () => set(() => ({ user: null })),
}));
