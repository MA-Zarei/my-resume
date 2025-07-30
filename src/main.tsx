import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const redirectParam = window.location.search;
if (redirectParam) {
  const realPath = decodeURIComponent(redirectParam.slice(1));
  window.history.replaceState(null, '', realPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
