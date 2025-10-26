import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function GuideHeader({ title, iconBgClass, icon }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700 sticky top-1 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Left side - Title and Icon */}
          <div className="flex items-center min-w-0 flex-1">
            <div className={`h-7 w-7 sm:h-8 sm:w-8 ${iconBgClass} rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0`}>
              {icon}
            </div>
            <h1 className="text-base sm:text-xl font-semibold text-white truncate">{title}</h1>
          </div>
          
          {/* Right side - User info and Logout */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 ml-2">
            {/* Hide user greeting on very small screens */}
            <div className="hidden sm:block text-sm text-gray-300 whitespace-nowrap">
              Xin chào, <span className="font-medium">{user?.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GuideHeader