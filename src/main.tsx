import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './components/Home/HomePage.tsx'
import Movies from './components/Movies/Movies.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  
)
