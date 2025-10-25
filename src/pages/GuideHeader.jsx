import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function GuideHeader({ title, iconBgClass, icon }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className={`h-8 w-8 ${iconBgClass} rounded-full flex items-center justify-center mr-3`}>
              {icon}
            </div>
            <h1 className="text-xl font-semibold text-white">{title}</h1>
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
  )
}

export default GuideHeader