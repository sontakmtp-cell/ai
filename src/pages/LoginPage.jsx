import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Iridescence from '../components/Iridescence'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login(email, password)
    
    if (result.success) {
      navigate('/homepage')
    } else {
      setError(result.message)
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Iridescence Background */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      
      {/* Login Form */}
      <div className="max-w-md w-full space-y-8 p-8 relative z-10">
        <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="mx-auto h-16 w-16 bg-indigo-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white drop-shadow-lg">
            AI - Kỹ Thuật Vàng
          </h2>
          <p className="mt-2 text-sm text-gray-100 drop-shadow">
            Đăng nhập để truy cập hệ thống AI
          </p>
        </div>
        
        <form className="mt-8 space-y-6 backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-200 rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm backdrop-blur-sm"
                placeholder="Địa chỉ email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-200 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm backdrop-blur-sm"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/50 text-red-100 px-4 py-3 rounded-md text-sm shadow-lg">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600/80 hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm shadow-lg transition-all"
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
