import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AndroidGuide from './pages/AndroidGuide'
import IOSGuide from './pages/IOSGuide'
import PromptGuide from './pages/PromptGuide'
import DownloadGuide from './pages/DownloadGuide'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/" replace />
}

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 dark">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/homepage" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/android" 
            element={
              <ProtectedRoute>
                <AndroidGuide />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/ios" 
            element={
              <ProtectedRoute>
                <IOSGuide />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/prompt" 
            element={
              <ProtectedRoute>
                <PromptGuide />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/download" 
            element={
              <ProtectedRoute>
                <DownloadGuide />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
