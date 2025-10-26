import React from 'react'
import { Link } from 'react-router-dom'
import GuideHeader from './GuideHeader'

function IOSGuide() {
  return (
    <div className="min-h-screen bg-gray-900">
      <GuideHeader
        title="Hướng dẫn cho Iphone (iOS)"
        iconBgClass="bg-purple-600"
        icon={
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hướng dẫn sử dụng AI trên iPhone (iOS)
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 1: Cài đặt ứng dụng</h3>
                <p>Tải và cài đặt ứng dụng từ App Store trên iPhone của bạn.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 2: Đăng nhập</h3>
                <p>Mở ứng dụng và nhập thông tin đăng nhập để truy cập vào hệ thống.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 3: Sử dụng AI</h3>
                <p>Sau khi đăng nhập thành công, bạn có thể bắt đầu sử dụng các tính năng AI trên thiết bị iOS.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <Link
              to="/homepage"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default IOSGuide
