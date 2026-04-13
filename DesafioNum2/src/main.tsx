import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Instagram from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Instagram />
  </StrictMode>
)
