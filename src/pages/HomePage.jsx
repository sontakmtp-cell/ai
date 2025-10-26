import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { QRCodeSVG } from 'qrcode.react'

function HomePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-white">AI - Kỹ Thuật Vàng</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-300">
                Xin chào, <span className="font-medium">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Chào mừng đến với khóa học tạo video bằng AI
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Thực hiện theo hướng dẫn từng bước để tạo video bằng AI một cách hiệu quả.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-purple-500 via-orange-500 via-blue-500 to-indigo-500 transform -translate-y-1/2 z-0" style={{ marginLeft: '3rem', marginRight: '3rem' }}></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 relative z-10">
          <div 
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl hover:border-green-500 transition-all cursor-pointer"
            onClick={() => navigate('/android')}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Bước 1: Hướng dẫn cho Android</h3>
            </div>
            <p className="text-gray-300">
              Hướng dẫn chi tiết dành cho người dùng Android
            </p>
          </div>

          <div 
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl hover:border-purple-500 transition-all cursor-pointer"
            onClick={() => navigate('/ios')}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Bước 2: Hướng dẫn cho Iphone (iOS)</h3>
            </div>
            <p className="text-gray-300">
              Hướng dẫn chi tiết dành cho người dùng Iphone (iOS)
            </p>
          </div>

          <div 
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl hover:border-orange-500 transition-all cursor-pointer"
            onClick={() => navigate('/prompt')}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Bước 3: Hướng dẫn viết lời nhắc cho AI</h3>
            </div>
            <p className="text-gray-300">
              Hướng dẫn chi tiết về nghệ thuật viết prompt để tạo video bằng AI
            </p>
          </div>

          <div 
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl hover:border-blue-500 transition-all cursor-pointer"
            onClick={() => navigate('/download')}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Bước 4: Tải video hướng dẫn</h3>
            </div>
            <p className="text-gray-300">
              Tải xuống video hướng dẫn để xem offline
            </p>
          </div>

          <div 
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl hover:border-indigo-500 transition-all cursor-pointer"
            onClick={() => window.open('https://gemini.google.com/gem/1Rs-tHSUZuCkk2c_yQziKPCTSaKsFGfZQ?usp=sharing', '_blank')}
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Bước 5: Trợ lí AI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Trò chuyện với AI để sáng tạo kịch bản và nhận tư vấn kỹ thuật dựng video bằng AI
            </p>
            <div className="flex justify-center">
              <QRCodeSVG 
                value="https://gemini.google.com/gem/1Rs-tHSUZuCkk2c_yQziKPCTSaKsFGfZQ?usp=sharing" 
                size={128}
                bgColor="#1f2937"
                fgColor="#ffffff"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
