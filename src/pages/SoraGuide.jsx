import React from 'react'
import GuideHeader from './GuideHeader'

function SoraGuide() {
  return (
    <div className="min-h-screen bg-gray-900">
      <GuideHeader
        title="Hướng dẫn sử dụng Sora"
        iconBgClass="bg-pink-600"
        icon={
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        }
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hướng dẫn sử dụng Sora để tạo video bằng AI
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 1: Truy cập Sora</h3>
                <p>Truy cập vào trang web Sora hoặc ứng dụng Sora trên thiết bị của bạn.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 2: Nhập prompt</h3>
                <p>Nhập mô tả chi tiết về video bạn muốn tạo vào ô nhập prompt. Càng chi tiết càng tốt.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 3: Tạo video</h3>
                <p>Nhấn nút tạo video và chờ Sora xử lý. Video sẽ được tạo ra dựa trên prompt của bạn.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Bước 4: Tải về và chỉnh sửa</h3>
                <p>Sau khi video được tạo, bạn có thể tải về và chỉnh sửa thêm nếu cần.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <a
              href="/homepage"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại trang chủ
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SoraGuide
