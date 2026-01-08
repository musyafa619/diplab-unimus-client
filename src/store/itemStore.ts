import { create } from 'zustand';

type BookingStoreState = {
  selectedItems: {
    id: string;
    quantity: number;
  }[];
  startDate: Date | null;
  endDate: Date | null;
};

type BookingStoreActions = {
  setSelectedItems: (item: { id: string; quantity: number }[]) => void;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  reset: () => void;
};

type ItemStore = BookingStoreState & BookingStoreActions;

export const useBookingStore = create<ItemStore>((set) => ({
  selectedItems: [],
  startDate: null,
  endDate: null,
  setSelectedItems: (items) =>
    set(() => ({
      selectedItems: items,
    })),
  setStartDate: (date) =>
    set(() => ({
      startDate: date,
    })),
  setEndDate: (date) =>
    set(() => ({
      endDate: date,
    })),
  reset: () =>
    set(() => ({
      selectedItems: [],
      startDate: null,
      endDate: null,
    })),
}));
