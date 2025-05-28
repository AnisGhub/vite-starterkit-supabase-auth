import { create } from 'zustand'
import { supabase, type User } from '@/lib/supabase'

type AuthStore = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  initialize: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  signIn: async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    if (data.user) {
      set({ user: data.user })
    }
  },
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },
  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      set({ user: session?.user ?? null, isLoading: false })
      
      // Setup auth listener
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ user: session?.user ?? null })
      })
    } finally {
      set({ isLoading: false })
    }
  },
}))
