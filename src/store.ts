import { create } from 'zustand'

type State = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const useStore = create<State>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set((state: any) => ({ ...state, loading })),
}))

export default useStore