import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'flowbite';
import '@/global.css';
import 'animate.css';

import App from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
