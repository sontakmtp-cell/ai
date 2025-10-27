import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { QRCodeSVG } from 'qrcode.react'

const cardData = [
  {
    title: 'Bước 1: Hướng dẫn cho Android',
    description: 'Hướng dẫn chi tiết dành cho người dùng Android',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    path: '/android',
    color: 'green',
  },
  {
    title: 'Bước 2: Hướng dẫn cho Iphone (iOS)',
    description: 'Hướng dẫn chi tiết dành cho người dùng Iphone (iOS)',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    path: '/ios',
    color: 'purple',
  },
  {
    title: 'Bước 3: Hướng dẫn viết lời nhắc cho AI',
    description: 'Hướng dẫn chi tiết về nghệ thuật viết prompt để tạo video bằng AI',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    path: '/prompt',
    color: 'orange',
  },
  {
    title: 'Bước 4: Tải video hướng dẫn',
    description: 'Tải xuống video hướng dẫn để xem offline',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    path: '/download',
    color: 'blue',
  },
  {
    title: 'Bước 5: Trợ lí AI',
    description: 'Trò chuyện với AI để sáng tạo kịch bản và nhận tư vấn kỹ thuật dựng video bằng AI',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    link: 'https://gemini.google.com/gem/1Rs-tHSUZuCkk2c_yQziKPCTSaKsFGfZQ?usp=sharing',
    color: 'indigo',
    qrCode: true,
  },
];

const FeatureCard = ({ card, index, navigate }) => {
  const { title, description, icon, path, link, color, qrCode } = card;
  const animationDelay = `${index * 100}ms`;

  const handleClick = () => {
    if (path) navigate(path);
    if (link) window.open(link, '_blank');
  };

  return (
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
      <div
        onClick={handleClick}
        style={{ animationDelay }}
        className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 
                 hover:after:duration-500 hover:after:translate-x-24 
                 hover:before:translate-y-12 hover:before:-translate-x-32 
                 hover:duration-500 
                 after:absolute after:w-24 after:h-24 after:bg-sky-700 
                 after:rounded-full after:blur-xl after:bottom-32 after:right-16 
                 after:w-12 after:h-12
                 before:absolute before:w-20 before:h-20 before:bg-sky-400 
                 before:rounded-full before:blur-xl before:top-20 before:right-16 
                 before:w-12 before:h-12
                 hover:rotate-12 flex flex-col justify-center items-center h-[480px] w-full
                 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8 
                 animate-fade-in-up opacity-0"
      >
        <div className="z-10 flex flex-col items-center gap-4 p-8">
          <div className={`h-16 w-16 bg-${color}-600 rounded-lg flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white text-center">{title}</h3>
          <p className="text-gray-300 text-center text-base leading-relaxed">{description}</p>
          {qrCode && (
            <div className="flex justify-center mt-6">
              <QRCodeSVG value={link} size={140} bgColor="transparent" fgColor="#ffffff" level="M" includeMargin={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* Header */}
      <header className={`bg-gray-800 shadow-sm border-b border-gray-700 animate-fade-in-down ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
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
        <div className={`text-center mb-12 animate-fade-in-up ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4 leading-relaxed py-2">
            🔥 BÙNG NỔ SÁNG TẠO: SORA ĐÃ ĐẾN! 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium mb-4">
            KHÔNG CÒN LÀ MƠ ƯỚC, ĐÂY LÀ CUỘC CÁCH MẠNG VIDEO TIẾP THEO!
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Xin trân trọng giới thiệu: Mô hình tạo video SORA - Mạng xã hội video AI đột phá, nơi hội tụ cảm hứng không giới hạn và sức mạnh công nghệ tối thượng! Hãy quên đi những giới hạn cũ, bởi vì Sora chính là TikTok X AI Siêu Cấp, mở khóa cánh cổng để bạn trở thành nhà làm phim vĩ đại nhất của chính mình!
          </p>
          <div className="text-lg text-gray-300 max-w-3xl mx-auto space-y-4">
            <p className="font-medium">Điều kỳ diệu nằm ở đây:</p>
            <p>Chỉ cần <span className="text-yellow-400">MÔ TẢ</span>, và trong chớp mắt, Sora sẽ biến bạn thành <span className="text-yellow-400">NHÂN VẬT CHÍNH</span> trong bất kỳ kịch bản nào, với chất lượng điện ảnh kinh ngạc!</p>
            <ul className="space-y-2">
              <li>✨ Muốn làm Siêu Anh Hùng Marvel bay lượn trên bầu trời New York? <span className="text-green-400">Xong!</span></li>
              <li>✨ Muốn trở thành Vũ công Ballet biểu diễn dưới ánh trăng huyền ảo? <span className="text-green-400">Hoàn thành!</span></li>
              <li>✨ Muốn Thám hiểm Vũ Trụ hay Phiêu lưu trong Rừng Sâu bí ẩn? <span className="text-green-400">Đã có Sora lo!</span></li>
            </ul>
            <p className="font-medium text-xl text-center mt-6">Hãy sẵn sàng để <span className="text-yellow-400">TẠO NỘI DUNG</span> và <span className="text-yellow-400">THỐNG TRỊ MỌI NỀN TẢNG!</span></p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 mb-8">
            {cardData.map((card, index) => (
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <FeatureCard key={card.title} card={card} index={index} navigate={navigate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
