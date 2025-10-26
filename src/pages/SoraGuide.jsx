import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GuideHeader from './GuideHeader'

function SoraGuide() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef(null)

  // Dữ liệu các slide - bạn có thể thay đổi URL hình ảnh và chú thích tại đây
  const slides = [
    {
      image: 'https://via.placeholder.com/800x600/E91E63/FFFFFF?text=Bước+1',
      caption: 'Bước 1: Truy cập Sora - Truy cập vào trang web Sora hoặc ứng dụng Sora trên thiết bị của bạn.'
    },
    {
      image: 'https://via.placeholder.com/800x600/F44336/FFFFFF?text=Bước+2',
      caption: 'Bước 2: Nhập prompt - Nhập mô tả chi tiết về video bạn muốn tạo vào ô nhập prompt. Càng chi tiết càng tốt.'
    },
    {
      image: 'https://via.placeholder.com/800x600/FF5722/FFFFFF?text=Bước+3',
      caption: 'Bước 3: Tạo video - Nhấn nút tạo video và chờ Sora xử lý. Video sẽ được tạo ra dựa trên prompt của bạn.'
    },
    {
      image: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Bước+4',
      caption: 'Bước 4: Tải về và chỉnh sửa - Sau khi video được tạo, bạn có thể tải về và chỉnh sửa thêm nếu cần.'
    },
    {
      image: 'https://via.placeholder.com/800x600/FFC107/FFFFFF?text=Bước+5',
      caption: 'Bước 5: Chia sẻ tác phẩm - Chia sẻ video AI của bạn với cộng đồng hoặc sử dụng cho mục đích cá nhân.'
    }
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
      <main className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-white p-4 sm:p-8 pb-3 sm:pb-4">
            Hướng dẫn sử dụng Sora để tạo video bằng AI
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
                      ? 'w-8 bg-pink-500'
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
                    : 'bg-pink-600 text-white hover:bg-pink-700'
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
                    : 'bg-pink-600 text-white hover:bg-pink-700'
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

export default SoraGuide
