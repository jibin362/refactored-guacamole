import create from 'zustand';

const useModalStore = create((set) => ({
  show: false,
  toggleShow: () =>
    set((state) => ({
      show: !state.show
    }))
}));

export { useModalStore };
