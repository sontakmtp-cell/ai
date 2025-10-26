import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GuideHeader from './GuideHeader'

function AndroidGuide() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef(null)

  // Dữ liệu các slide - bạn có thể thay đổi URL hình ảnh và chú thích tại đây
  const slides = [
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510263430e0c76ba32ccb5aacad967e11d8c4.jpg',
      caption: 'Bước 1: Truy cập cửa hàng ứng dụng CHPlay - Tải và cài đặt ChatGPT.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026083fe3922978ea3404b6bd8b06679c87.jpg',
      caption: 'Bước 2: Tải và cài đặt Kiwi VPN.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026c2ba6bce4eacce9c7a7177cb089ab9c4.jpg',
      caption: 'Bước 3: Tải và cài đặt Gemini, đăng nhập bằng tài khoản google của bạn.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102623c898016f4c3882ea90ffbfd5156f2f.jpg',
      caption: 'Bước 4: Mở Kiwi VPN lên.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510269f176f7d7935cf004168861e8c9c6271.jpg',
      caption: 'Bước 5: Nhấp vào nút VPN.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510260caefd0add67d225ec1cd5232bd49024.jpg',
      caption: 'Bước 6: Chọn Optimal Location'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510260172603b81a132207e466e94b829148b.jpg',
      caption: 'Bước 7: Chọn 1 vùng nào đó của nước Mỹ là được, ưu tiên rẻ nhất.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026eabe682738aef0d3ffc504ef4d14c7a4.jpg',
      caption: 'Bước 8: Đợi kết nối với máy chủ.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510265d231c07d2a46528022c93604f216071.jpg',
      caption: 'Bước 9: Kiểm tra trên thanh trạng thái thấy đã kết nối là OK.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102670d69b734aab78abd748ea4120a7cfc5.jpg',
      caption: 'Bước 10: Mở trình duyệt của bạn lên, ở đây mình dùng trình duyệt Cốc Cốc cho tiện.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026a1292b8ba1a4e8a4ef709158db43114f.jpg',
      caption: 'Bước 11: Truy cập vào https://sora.chatgpt.com/ chọn Login. Lưu ý vì chúng ta sử dụng VPN nên sẽ rất lag, đây là điều bình thường'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102671fc10f2a35fa5717e2de7b849eed1d7.jpg',
      caption: 'Bước 12: Đăng nhập bằng tài khoản google hoặc ChatGPT của bạn.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510268dd92c29d6dd41b7577ebb97b53ef2e8.jpg',
      caption: 'Bước 13: Đăng nhập bằng tài khoản google hoặc ChatGPT của bạn.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026b619705f9c68323d2ba542fe98ac7290.jpg',
      caption: 'Bước 14: Nhấn dấu + để tạo video mới.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102647d9d8017901645a81fd24756da6be8f.jpg',
      caption: 'Bước 15: Nhập lời nhắc (prompt) chọn khổ ngang hay dọc và chọn thời gian video.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102648e438d2c6cdac7d8bd27d21c3655c3b.jpg',
      caption: 'Bước 16: Đợi AI tạo video cho bạn.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_2025102601ed05fd9d84cac32d1dc089b22cf6b5.jpg',
      caption: 'Bước 17: Sau khi tạo video xong bạn có thể nhấn Post để chia sẻ hoặc nhấn nút ... để tải về hoặc xoá video.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026143b18a7108b6fb16fd636a6e9fe94c4.jpg',
      caption: 'Bước 18: Sau khi nhấn Post bạn có thể nhấn nút Remix để chỉnh sửa 1 số nội dung nhỏ trong video.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510263df6200f97e5ade764b9a9f5d5ef295d.jpg',
      caption: 'Bước 19: Bạn có thể remix nhiều lần nhưng mỗi lần chỉ nên thay đổi 1 nội dung nhỏ thôi.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_202510261524d5cd3ce7c3449f0415f172093931.jpg',
      caption: 'Bước 20: Và đây là kết quả sau khi remix, bạn có thể post và tiếp tục remix nó nữa.'
    },
    {
      image: 'https://sf-static.upanhlaylink.com/img/image_20251026739f29def05a24dc5f702721bfe4b0d3.jpg',
      caption: 'Bước 21: Sau khi có nhiều phiên bản remix các bạn dùng Capcut để cắt ghép, chèn nhạc tạo video dài theo kịch bản mà các bạn muốn.'
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Xử lý touch events cho swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide()
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide()
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  // Hỗ trợ keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        prevSlide()
      } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        nextSlide()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-gray-900">
      <GuideHeader
        title="Hướng dẫn cho Android"
        iconBgClass="bg-green-600"
        icon={
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
      />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-white p-4 sm:p-8 pb-3 sm:pb-4">
            Hướng dẫn sử dụng AI trên Android
          </h2>
          
          {/* Slideshow Container */}
          <div className="relative">
            {/* Image Display with Swipe Support */}
            <div 
              ref={slideRef}
              className="relative bg-gray-900 flex items-center justify-center overflow-hidden touch-pan-y select-none"
              style={{ minHeight: '60vh' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-contain max-h-[70vh]"
                draggable="false"
              />
              
              {/* Previous Button - Hidden on mobile */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 items-center justify-center"
                aria-label="Previous slide"
                disabled={currentSlide === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button - Hidden on mobile */}
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 items-center justify-center"
                aria-label="Next slide"
                disabled={currentSlide === slides.length - 1}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Counter */}
              <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                {currentSlide + 1} / {slides.length}
              </div>

              {/* Swipe Hint - Only show on first slide on mobile */}
              {currentSlide === 0 && (
                <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs flex items-center gap-2 animate-pulse">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Vuốt để xem tiếp
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>

            {/* Caption Area */}
            <div className="bg-gray-800 p-4 sm:p-6 min-h-[80px]">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                {slides[currentSlide].caption}
              </p>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 p-4 sm:p-6 bg-gray-800 border-t border-gray-700">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-green-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-6 bg-gray-800 border-t border-gray-700">
            <Link
              to="/homepage"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại trang chủ
            </Link>

            {/* Desktop Navigation Buttons */}
            <div className="hidden sm:flex gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentSlide === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                ← Trước
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentSlide === slides.length - 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Tiếp →
              </button>
            </div>

            {/* Mobile Navigation Buttons - Full Width */}
            <div className="flex sm:hidden gap-3 w-full">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentSlide === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                ← Trước
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentSlide === slides.length - 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Tiếp →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AndroidGuide
