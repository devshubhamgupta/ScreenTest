import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initGA, trackPageView } from './utils/analytics.ts'

// Initialize Google Analytics
initGA();

// Track initial page view
trackPageView('ScreenTest - Mobile Simulator');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
