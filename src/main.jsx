import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import RootLayout from './RootLayout/RootLayout.jsx'
import { router } from './router/router';
import AuthProvider from './Contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      <RootLayout/>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
