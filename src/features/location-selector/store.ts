import { create } from 'zustand'
interface LocationStoreState {
  location: string
  setLocation: (location: string) => void
}

export const useLocationStore = create<LocationStoreState>((set) => ({
  location: 'Moscow',
  setLocation: (value) =>
    set(() => ({
      location: value,
    })),
}))
