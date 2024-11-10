import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { QuizProvider } from './contexts/QuizContext.tsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QuizProvider>
        <App />
        <ToastContainer />
      </QuizProvider>
    </AuthProvider>
  </StrictMode>,
)
