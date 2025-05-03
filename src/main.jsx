import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { JurnalApp } from './JurnalApp'

import './style.css'
import { Provider } from 'react-redux'
import { store } from './App'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
            <JurnalApp />
        </BrowserRouter>
      </Provider>
    </StrictMode>
)
