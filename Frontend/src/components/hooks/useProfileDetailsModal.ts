import { create } from 'zustand';

interface ProfileDetailsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useProfileDetailsModal = create<ProfileDetailsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useProfileDetailsModal;
