import { createRoot } from 'react-dom/client'
import './index.css'
import MovieApp from './MovieApp.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  
  <QueryClientProvider client={queryClient}>
    
    <MovieApp />
  </QueryClientProvider>
  
)