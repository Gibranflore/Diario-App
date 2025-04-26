import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { JurnalApp } from './JurnalApp'

import './style.css'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <BrowserRouter>
          <JurnalApp />
      </BrowserRouter>
    </StrictMode>
)
