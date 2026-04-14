import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import navBAR from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <navBAR />  
  

  </StrictMode>,
)
