import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/plus-jakarta-sans'
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App.jsx'
import { CensorshipProvider } from './context/CensorshipContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CensorshipProvider>
          <App />
        </CensorshipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
