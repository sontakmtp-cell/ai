import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Kiểm tra token trong localStorage khi app khởi động
    const token = localStorage.getItem('auth_token')
    const userData = localStorage.getItem('user_data')
    
    if (token && userData) {
      setIsAuthenticated(true)
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Giả lập API call - thay thế bằng API thực tế
      if (email === 'admin@kythuatvang.com' && password === 'admin123') {
        const userData = {
          id: 1,
          email: email,
          name: 'Administrator',
          role: 'admin'
        }
        
        const token = 'mock_jwt_token_' + Date.now()
        
        localStorage.setItem('auth_token', token)
        localStorage.setItem('user_data', JSON.stringify(userData))
        
        setIsAuthenticated(true)
        setUser(userData)
        
        return { success: true }
      } else {
        return { success: false, message: 'Email hoặc mật khẩu không đúng' }
      }
    } catch (error) {
      return { success: false, message: 'Có lỗi xảy ra khi đăng nhập' }
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
    setIsAuthenticated(false)
    setUser(null)
  }

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
