import create from 'zustand';
import { addUser, deleteUser, getUsers } from '../services/UserRespositoy';

const useUserStore = create((set, get) => ({
  isLoading: true,
  showError: false,
  showNotification: false,
  users: [],
  error: null,
  notification: null,
  fetchUsers: async (cancelToken) => {
    try {
      set({ isLoading: true });
      const users = await getUsers(cancelToken);
      set({ users, isLoading: false });
    } catch (err) {
      set({ error: err.message, showError: true });
    }
  },
  addUserFetch: async (data) => {
    try {
      await addUser(data);
      set({ notification: 'User added!', showNotification: true });
      get().fetchUsers();
    } catch (err) {
      set({ error: err.message, showError: true });
    }
  },
  deleteUserFetch: async (id) => {
    try {
      await deleteUser(id);
      set({ notification: 'User deleted!', showNotification: true });
      get().fetchUsers();
    } catch (err) {
      set({ error: err.message, showError: true });
    }
  },
  hideError: () => {
    set({ showError: false, error: null });
  },
  hideNotification: () => {
    set({ showNotification: false, notification: null });
  }
}));

export { useUserStore };
