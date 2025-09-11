import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import { ThemeProvider } from './AppContext/Theme/ThemeProvider.jsx'
import AuthProvider from './AppContext/Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider >
        <RouterProvider router={router}>

        </RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
