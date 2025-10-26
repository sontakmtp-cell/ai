import React from 'react'
import { Link } from 'react-router-dom'
import GuideHeader from './GuideHeader'

function DownloadGuide() {
  // Dữ liệu video hướng dẫn - bạn có thể cập nhật link Google Drive tại đây
  const videos = [
    {
      id: 1,
      title: 'Video hướng dẫn cho Android',
      description: 'Hướng dẫn chi tiết cách sử dụng AI trên thiết bị Android',
      driveLink: 'https://drive.google.com/file/d/YOUR_ANDROID_VIDEO_ID/view',
      downloadLink: 'https://drive.google.com/uc?export=download&id=YOUR_ANDROID_VIDEO_ID',
      thumbnail: 'https://via.placeholder.com/400x225/4CAF50/FFFFFF?text=Android+Guide',
      size: '25 MB',
      duration: '5:30',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'bg-green-600'
    },
    {
      id: 2,
      title: 'Video hướng dẫn cho iOS',
      description: 'Hướng dẫn chi tiết cách sử dụng AI trên iPhone và iPad',
      driveLink: 'https://drive.google.com/file/d/YOUR_IOS_VIDEO_ID/view',
      downloadLink: 'https://drive.google.com/uc?export=download&id=YOUR_IOS_VIDEO_ID',
      thumbnail: 'https://via.placeholder.com/400x225/9C27B0/FFFFFF?text=iOS+Guide',
      size: '30 MB',
      duration: '6:15',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-purple-600'
    },
    {
      id: 3,
      title: 'Video hướng dẫn viết Prompt',
      description: 'Nghệ thuật viết prompt hiệu quả cho AI',
      driveLink: 'https://drive.google.com/file/d/YOUR_PROMPT_VIDEO_ID/view',
      downloadLink: 'https://drive.google.com/uc?export=download&id=YOUR_PROMPT_VIDEO_ID',
      thumbnail: 'https://via.placeholder.com/400x225/FF9800/FFFFFF?text=Prompt+Guide',
      size: '28 MB',
      duration: '7:45',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-orange-600'
    },
    {
      id: 4,
      title: 'Video hướng dẫn Sora',
      description: 'Hướng dẫn sử dụng Sora để tạo video bằng AI',
      driveLink: 'https://drive.google.com/file/d/YOUR_SORA_VIDEO_ID/view',
      downloadLink: 'https://drive.google.com/uc?export=download&id=YOUR_SORA_VIDEO_ID',
      thumbnail: 'https://via.placeholder.com/400x225/E91E63/FFFFFF?text=Sora+Guide',
      size: '35 MB',
      duration: '8:20',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: 'bg-pink-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <GuideHeader
        title="Tải Video Hướng Dẫn"
        iconBgClass="bg-blue-600"
        icon={
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        }
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Video Hướng Dẫn Chi Tiết
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Tải xuống các video hướng dẫn để xem offline hoặc xem trực tuyến trên Google Drive. 
              Tất cả video đều được lưu trữ an toàn và có thể truy cập mọi lúc.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden hover:shadow-xl hover:border-blue-500 transition-all"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className={`${video.color} rounded-full p-4`}>
                      {video.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {video.description}
                  </p>

                  {/* Video Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>{video.size}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={video.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Xem Online
                    </a>
                    <a
                      href={video.downloadLink}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Tải Xuống
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Hướng dẫn tải video
                </h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li><strong>Xem Online:</strong> Nhấn nút "Xem Online" để xem video trực tiếp trên Google Drive</li>
                  <li><strong>Tải Xuống:</strong> Nhấn nút "Tải Xuống" để tải video về máy (có thể cần đăng nhập Google)</li>
                  <li>Nếu gặp vấn đề khi tải, hãy thử mở link trong trình duyệt khác hoặc chế độ ẩn danh</li>
                  <li>Video có thể mất một chút thời gian để tải tùy thuộc vào tốc độ mạng của bạn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="pt-6 border-t border-gray-700">
            <Link
              to="/homepage"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
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

export default DownloadGuide
