import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

type Exercise = {
  id: number
  name: string
  description: string
  created_at: string
}

// This hook fetches is an example of fetching data from a Supabase table
export function useExercises() {
  return useQuery({
    queryKey: ['exercises'],
    queryFn: async (): Promise<Exercise[]> => {
      const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
  })
}
