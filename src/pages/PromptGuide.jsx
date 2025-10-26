import React, { useState } from 'react'
import GuideHeader from './GuideHeader'
import PromptGlossary from './PromptGlossary'
import ProgressBar from '../components/ProgressBar'
import BackToTop from '../components/BackToTop'
import MobileToC from '../components/MobileToC'
import Badge from '../components/Badge'

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative">
      <pre className="bg-gray-900 p-4 rounded text-gray-300 overflow-x-auto text-sm whitespace-pre-wrap pr-16">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs font-semibold py-1 px-2 rounded-md transition-colors"
      >
        {copied ? 'Đã chép!' : 'Chép'}
      </button>
    </div>
  )
}

const PromptGuide = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "thinking", title: "1. Tư duy đúng trước khi bắt đầu", icon: "🧠", readTime: "5 phút" },
    { id: "formula", title: "Công thức Prompt Tiêu chuẩn", icon: "📐", readTime: "4 phút" },
    { id: "ai-capabilities", title: "2. Những thứ AI hiểu và không hiểu", icon: "🤖", readTime: "5 phút" },
    { id: "scene-description", title: "3. Mô tả cảnh vật: Phải 'thấy được'", icon: "🎬", readTime: "6 phút" },
    { id: "action-description", title: "4. Mô tả hành động: Phải 'đo được'", icon: "🎯", readTime: "5 phút" },
    { id: "camera-control", title: "5. Điều khiển máy quay", icon: "📹", readTime: "7 phút" },
    { id: "lighting-color", title: "6. Ánh sáng và Màu sắc", icon: "💡", readTime: "6 phút" },
    { id: "reference-images", title: "7. Cách dùng ảnh mẫu", icon: "🖼️", readTime: "3 phút" },
    { id: "dialogue-sound", title: "8. Lời thoại và Âm thanh", icon: "🔊", readTime: "4 phút" },
    { id: "refinement", title: "9. Sửa và Tinh chỉnh", icon: "✨", readTime: "5 phút" },
    { id: "common-errors", title: "10. Những lỗi thường gặp", icon: "⚠️", readTime: "6 phút" },
    { id: "terminology", title: "Phụ lục: Từ điển thuật ngữ", icon: "📚", readTime: "10 phút" }
  ]

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (!el) continue
      const sectionTop = el.offsetTop - 120
      const sectionBottom = sectionTop + el.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(s.id)
        return
      }
    }
    // if none matched, clear
    setActiveSection("")
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      <ProgressBar />
      <BackToTop />
      <MobileToC sections={sections} activeSection={activeSection} />
      <GuideHeader
        title="Hướng dẫn viết lời nhắc cho AI"
        iconBgClass="bg-orange-600"
        icon={
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        }
      />

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="flex gap-8">
          {/* Table of Contents - Fixed Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20 bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4">
              <h4 className="text-lg font-semibold text-white mb-4">Mục lục</h4>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block py-2 px-3 rounded transition-all duration-200 group ${
                      activeSection === section.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    title={`${section.title} - ${section.readTime}`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-lg flex-shrink-0">{section.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{section.title}</div>
                        <div className={`text-xs mt-0.5 ${
                          activeSection === section.id ? 'text-indigo-200' : 'text-gray-500'
                        }`}>
                          {section.readTime}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Hướng dẫn làm đạo diễn tạo video AI
          </h2>
          
          <div className="prose prose-invert prose-custom max-w-none">
            <Badge type="info" icon="💡">
              <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Lời khuyên</h4>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>Nếu có thời gian, bạn nên học cách viết lời nhắc (prompt) chuẩn sách giáo khoa dưới đây. Nếu không, hãy sử dụng công cụ <strong className="text-yellow-300 font-bold">Trợ lí AI</strong> để nó viết lời nhắc (prompt) giúp bạn, bạn chỉ việc copy và sử dụng.</li>
                <li>Mỗi lần tạo video là 1 lần tung xúc xắc, cùng 1 lời nhắc nhưng kết quả có thể khác nhau khá nhiều. Nếu video bạn tạo ra chưa ưng ý, hãy thử tạo lại bằng prompt cũ. Nếu kết quả vẫn không tốt hơn, hãy cải thiện prompt.</li>
              </ul>
            </Badge>

            {/* Section 1 */}
            <div id="thinking" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[0].icon}</span>
                <h3 className="text-2xl font-semibold text-white">1. Tư duy đúng trước khi bắt đầu</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <Badge type="tip" icon="🎯">
                  <p><strong className="text-yellow-300">Bạn là Đạo diễn, AI là người quay phim:</strong> Hãy tưởng tượng AI là một người quay phim rất giỏi về kỹ thuật, nhưng lại hoàn toàn không biết kịch bản hay ý đồ của bạn là gì. Nhiệm vụ của bạn là "dặn dò" thật kỹ (bằng lời nhắc prompt). Bạn càng rõ ràng, AI càng dễ "thực thi" chính xác.</p>
                </Badge>
                
                <Badge type="success" icon="👑">
                  <p><strong className="text-yellow-300">Chi tiết là Vua:</strong> Nếu bạn nói chung chung, AI sẽ phải tự "bịa" ra.</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><em className="text-red-300 font-semibold">Ví dụ tư duy kém:</em> "Làm video con mèo." (AI không biết làm con mèo gì, ở đâu, đang làm gì. Vì vậy nó sẽ tự động tạo ra video con mèo trong công viên hoặc con mèo phong cách hoạt hình...).</li>
                    <li><em className="text-green-300 font-semibold">Ví dụ tư duy tốt:</em> "Mình muốn một video cận cảnh con mèo mướp đang ngáp, ánh nắng chiếu xiên làm rõ bộ lông."</li>
                    <li><em className="text-blue-300 font-semibold">Một ví dụ khác:</em> Thay vì "cảnh rừng", hãy viết "một khu rừng rậm rạp, ẩm ướt sau cơn mưa, với những tia nắng xuyên qua tán lá dày, mặt đất phủ đầy rêu xanh."</li>
                  </ul>
                </Badge>

                <Badge type="info" icon="⚖️">
                  <p><strong className="text-yellow-300">Biết lúc nào cần kỹ, lúc nào nên thả lỏng:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-cyan-300">Cần kỹ:</strong> Những thứ bạn *bắt buộc* phải có. Đây là những "điểm neo" không thể thay đổi. (ví dụ: "PHONG CÁCH YOUTUBER", "nhân vật phải mặc áo phi công đeo phù hiệu cờ Việt Nam").</li>
                    <li><strong className="text-cyan-300">Thả lỏng:</strong> Những thứ bạn muốn AI tự do sáng tạo. Bạn chỉ cần mô tả "đường phố đông đúc", "có vài người đang làm việc quanh đó", bạn không cần mô tả từng người một.</li>
                  </ul>
                </Badge>

                <Badge type="warning" icon="🔄">
                  <p><strong className="text-yellow-300">Sẵn sàng làm lại (Thử và Sai):</strong> Việc tạo video bằng AI là một quá trình sáng tạo, không phải một lệnh cắm-là-chạy. Chỉ cần bạn thay đổi một chi tiết nhỏ như "ánh sáng" hay "góc máy", kết quả có thể khác một trời một vực. Đừng nản! Hãy xem mỗi lần tạo là một thử nghiệm để hiểu AI hơn.</p>
                </Badge>
              </div>
            </div>

            {/* Công thức prompt */}
            <div id="formula" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[1].icon}</span>
                <h3 className="text-2xl font-semibold text-white">CÔNG THỨC PROMPT TIÊU CHUẨN</h3>
              </div>
              <Badge type="success" icon="📋">
                <p className="font-semibold mb-3 text-yellow-300">Có đủ 5 hạng mục sau:</p>
                <ol className="space-y-3">
                  <li><strong className="text-cyan-300">1. PHONG CÁCH:</strong> Quyết định phong cách tổng thể trước (ví dụ: "phong cách youtuber", "hoạt hình Ghibli", "MC dẫn chương trình", "góc nhìn từ camera an ninh").</li>
                  <li><strong className="text-cyan-300">2. BỐI CẢNH:</strong> Nhân vật chính là Ai, đang ở đâu? Thời tiết và Ánh sáng thế nào? (ví dụ: "@sontak, trên đường phố đêm, mưa, ánh đèn neon")</li>
                  <li><strong className="text-cyan-300">3. HÀNH ĐỘNG:</strong> Nhân vật làm gì? Mô tả cụ thể, có nhịp điệu (ví dụ: "@sontak bước 3 bước, dừng lại, ngước nhìn lên")</li>
                  <li><strong className="text-cyan-300">4. ĐIỀU KHIỂN MÁY QUAY:</strong> Máy quay nhìn từ đâu (góc máy) và di chuyển thế nào? (ví dụ: "quay cận mặt, lia chậm từ trái sang")</li>
                  <li><strong className="text-cyan-300">5. ÂM THANH & TINH CHỈNH:</strong> Thêm âm thanh nền hoặc lời thoại (nếu cần) và sẵn sàng sửa lại prompt để có kết quả tốt nhất.</li>
                </ol>
              </Badge>
            </div>

            {/* Ví dụ */}
            <div className="mb-8 bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Ví dụ Minh Họa Áp Dụng Công Thức:</h3>
              
              <div className="mb-4">
                <p className="text-white font-semibold mb-2">Ví dụ 1: Prompt đơn giản (ưu tiên sử dụng phương pháp này)</p>
                <CodeBlock code={`Phong cách youtuber, năng lượng cao.
@sontak là phi công đứng cạnh máy bay tiêm kích Su-57 trên đường băng, anh ta đang review chiếc máy bay.`} />
              </div>

              <div>
                <p className="text-white font-semibold mb-2">Ví dụ 2: Nâng cao (Chỉ dành cho đạo diễn chuyên nghiệp)</p>
                <CodeBlock code={`Phong cách vlog ENG (máy quay tin tức) cầm tay, năng lượng cao, có chủ đích. @sontak, mặc đồ bay, đứng trên đường băng bê tông dưới ánh nắng gắt. Bên cạnh anh là một chiếc tiêm kích Su-57, thân máy bay lấp lánh dưới nắng.

Kỹ thuật quay phim:
Cảnh quay: Cận cảnh trung bình (medium close-up), ngang tầm mắt, rung tay micro vừa phải để tạo cảm giác chân thực.
Ống kính: Ống kính 35mm (ảo) để có góc nhìn rộng tự nhiên.
Ánh sáng: Nắng trưa gay gắt, tạo bóng sắc nét.
Không khí: Năng động, phấn khích, nhiều thông tin.

Hành động:
- @sontak chỉ tay dứt khoát vào phần động cơ Su-57.
- Anh ấy quay nhanh về phía máy ảnh, mắt mở to và cười rạng rỡ.
- Anh ấy đập nhẹ vào thân máy bay (chỉ một cái) rồi giơ ngón tay cái lên.

Hội thoại:
- @sontak: "Và đây! Các bạn nhìn xem! Đây chính là sức mạnh không thể tin nổi của Su-57!"`} />
              </div>
            </div>

            {/* Section 2 */}
            <div id="ai-capabilities" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[2].icon}</span>
                <h3 className="text-2xl font-semibold text-white">2. Những thứ AI hiểu và không hiểu</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <Badge type="success" icon="✅">
                  <p className="font-semibold text-yellow-300 mb-2">Những thứ AI điều khiển được (Nên viết):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chủ thể (Nhân vật, con vật, đồ vật)</li>
                    <li>Bối cảnh (Nơi chốn, thời tiết, thời gian)</li>
                    <li>Hành động (Nhân vật đang làm gì)</li>
                    <li>Bố cục (Quay gần, quay xa, quay từ trên xuống...)</li>
                    <li>Chuyển động máy quay (Zoom, lia máy, đi theo nhân vật...)</li>
                    <li>Ánh sáng & Tông màu</li>
                    <li>Phong cách</li>
                    <li>Lời thoại và Âm thanh nền</li>
                  </ul>
                </Badge>

                <Badge type="error" icon="❌">
                  <p className="font-semibold text-yellow-300 mb-2">Những thứ AI không điều khiển được (Đừng viết):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-red-300">Độ dài video:</strong> Đừng bao giờ viết "làm video 12 giây"</li>
                    <li><strong className="text-red-300">Độ phân giải / Kích thước:</strong> Đừng viết "video 1080x120" hay "Full HD"</li>
                  </ul>
                </Badge>

                <Badge type="example" icon="📝">
                  <p className="font-semibold text-yellow-300 mb-2">Ví dụ về yêu cầu TỐT và KHÔNG TỐT:</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-red-400 font-bold">❌ KHÔNG NÊN:</span> "Làm một video 10 giây, 1080p, cảnh bãi biển thật đẹp."</p>
                    <p><span className="text-green-400 font-bold">✅ NÊN:</span> "Cảnh bãi biển lúc hoàng hôn. Sóng vỗ nhẹ vào bờ cát trắng. Máy quay lia chậm từ trái sang phải, ngang tầm mắt."</p>
                  </div>
                  <div className="space-y-2 text-sm mt-3">
                    <p><span className="text-red-400 font-bold">❌ KHÔNG NÊN:</span> "Video 5 giây quay con chó chạy."</p>
                    <p><span className="text-green-400 font-bold">✅ NÊN:</span> "Một con chó Corgi chạy hết tốc lực trên bãi cỏ xanh, tai vẫy vẫy. Phong cách video slow-motion (chuyển động chậm)."</p>
                  </div>
                </Badge>
              </div>
            </div>

            {/* Section 3 */}
            <div id="scene-description" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[3].icon}</span>
                <h3 className="text-2xl font-semibold text-white">3. Mô tả cảnh vật: Phải "thấy được"</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <Badge type="tip" icon="👁️">
                  <p>Khi mô tả, hãy dùng những từ ngữ mà mắt có thể nhìn thấy được. Hãy vẽ một bức tranh bằng lời.</p>
                </Badge>
                
                <Badge type="example">
                  <p className="text-red-400 font-bold mb-2">❌ Không tốt:</p>
                  <p>"Một đường phố đẹp."</p>
                  <p className="text-green-400 font-bold mt-3 mb-2">✅ Tốt:</p>
                  <p>"Một đường phố ban đêm, mặt đường ướt sũng, phản chiếu ánh đèn neon màu hồng và xanh từ các biển hiệu."</p>
                </Badge>

                <Badge type="example">
                  <p className="text-red-400 font-bold mb-2">❌ Không tốt:</p>
                  <p>"Một căn phòng bừa bộn."</p>
                  <p className="text-green-400 font-bold mt-3 mb-2">✅ Tốt:</p>
                  <p>"Một căn phòng ký túc xá, quần áo vứt trên giường, sách vở mở tung trên bàn học, vài vỏ lon nước ngọt nằm lăn lóc dưới sàn nhà."</p>
                </Badge>

                <Badge type="info" icon="🎨">
                  <p><strong className="text-yellow-300">Nói rõ "Phong cách" ngay từ đầu:</strong> Hãy quyết định phong cách trước tiên. Đây là "bộ lọc" tổng thể cho video.</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>"phong cách anime Ghibli" (màu sắc tươi sáng, nét vẽ tay)</li>
                    <li>"Video tài liệu IMAX hoành tráng" (góc quay rộng, hình ảnh siêu nét)</li>
                    <li>"Video quay bằng điện thoại cầm tay bị rung" (hiệu ứng rung lắc tự nhiên)</li>
                  </ul>
                </Badge>
              </div>
            </div>

            {/* Section 4 */}
              <div id="action-description" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[4].icon}</span>
                <h3 className="text-2xl font-semibold text-white">4. Mô tả hành động: Phải "đo được"</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <Badge type="tip" icon="⏱️">
                  <p>Hành động càng cụ thể, AI càng dễ nắm bắt nhịp điệu (timing) của video.</p>
                </Badge>

                <Badge type="example">
                  <p className="text-red-400 font-bold mb-2">❌ Không tốt: "Nhân vật di chuyển nhanh."</p>
                  <p className="text-green-400 font-bold mt-3 mb-2">✅ Tốt:</p>
                  <p>"Nhân vật đạp xe 3 vòng, thắng gấp, dừng lại ở vạch trắng."</p>
                </Badge>

                <Badge type="example">
                  <p className="text-red-400 font-bold mb-2">❌ Không tốt: "Cô gái uống nước."</p>
                  <p className="text-green-400 font-bold mt-3 mb-2">✅ Tốt:</p>
                  <p>"Cô gái từ từ nhấc ly nước thủy tinh lên, đưa lên môi, uống một ngụm nhỏ, rồi cẩn thận đặt ly xuống bàn."</p>
                </Badge>

                <Badge type="warning" icon="1️⃣➕1️⃣">
                  <p><strong className="text-yellow-300">Nguyên tắc vàng 1+1:</strong> Để AI không bị bối rối, mỗi cảnh (shot) chỉ nên có <strong className="text-yellow-300">1 chuyển động máy chính + 1 hành động chính của chủ thể</strong>.</p>
                </Badge>
              </div>
            </div>

            {/* Section 5 */}
              <div id="camera-control" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[5].icon}</span>
                <h3 className="text-2xl font-semibold text-white">5. Điều khiển máy quay</h3>
              </div>
              <Badge type="warning" icon="🎓">
                <p className="font-semibold">Phần này nên để AI tự quyết định, chỉ can thiệp khi bạn là chuyên gia</p>
              </Badge>
              <div className="space-y-4 text-gray-300 mt-4">
                <Badge type="info" icon="🎥">
                  <p>Đây là cách bạn "dẫn" mắt người xem và tạo cảm xúc.</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-cyan-300">Khung hình & Góc máy:</strong> Wide (rộng), Medium (trung), Close-up (cận), Extreme Close-up (siêu cận), Low angle (dưới lên), High angle (trên xuống).</li>
                    <li><strong className="text-cyan-300">Độ sâu trường ảnh (DOF):</strong> Nông (Shallow - nền mờ) hoặc Sâu (Deep - nét toàn cảnh).</li>
                    <li><strong className="text-cyan-300">Chuyển động máy:</strong> Chỉ chọn 1 chuyển động rõ ràng cho mỗi shot (ví dụ: "Tracking từ trái sang phải", "Dolly-in chậm").</li>
                  </ul>
                </Badge>

                <Badge type="example" icon="📹">
                  <p className="font-semibold text-yellow-300 mb-2">Ví dụ một cụm dặn dò máy quay:</p>
                  <ul className="list-none space-y-1 text-gray-200 font-mono text-sm">
                    <li>Cinematography:</li>
                    <li>- Shot: Medium close-up (quay cận trung, thấy từ ngực lên)</li>
                    <li>- Angle: Low angle (góc máy từ dưới lên)</li>
                    <li>- Motion: Slow dolly-in (máy quay từ từ tiến lại gần)</li>
                    <li>- DOF: Shallow (nét ở mặt nhân vật, nền mờ)</li>
                  </ul>
                </Badge>
              </div>
            </div>

            {/* Section 6 */}
              <div id="lighting-color" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[6].icon}</span>
                <h3 className="text-2xl font-semibold text-white">6. Ánh sáng và Màu sắc (Tâm trạng)</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <Badge type="tip" icon="✨">
                  <p className="font-semibold">Ánh sáng quyết định 80% cảm xúc của video.</p>
                </Badge>

                <Badge type="info">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-cyan-300">Chất lượng & Nguồn sáng:</strong> Mô tả ánh sáng từ đâu và có đặc điểm gì? (ví dụ: "ánh sáng tự nhiên từ cửa sổ, mềm mại", "ánh đèn neon nhấp nháy").</li>
                    <li><strong className="text-cyan-300">Bảng màu (Neo màu):</strong> Chọn 3-5 màu chủ đạo để "neo" tông màu cho video (ví dụ: "Tông màu chủ đạo là vàng hổ phách, màu kem, và màu nâu gỗ").</li>
                  </ul>
                </Badge>

                <Badge type="warning">
                  <p><strong className="text-yellow-300">Đừng tự mâu thuẫn:</strong> Đừng viết "ánh sáng chiều vàng ươm" nhưng lại kèm "bầu trời đêm mưa xanh lạnh" trong cùng một cảnh.</p>
                </Badge>
              </div>
            </div>

            {/* Section 7 */}
              <div id="reference-images" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[7].icon}</span>
                <h3 className="text-2xl font-semibold text-white">7. Cách dùng ảnh mẫu (Nếu có)</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <Badge type="info">
                  <p>Bạn có thể đưa 1 ảnh mẫu để làm "neo" (tham khảo) cho khung hình đầu tiên. Việc này giúp "khóa" lại các yếu tố thị giác như thiết kế nhân vật, quần áo, và phong cách mỹ thuật.</p>
                </Badge>
                <Badge type="warning">
                  <p><strong className="text-white">Lưu ý:</strong> Ảnh chỉ khóa <em>vẻ bề ngoài</em>. Bạn vẫn phải dùng chữ để mô tả <em>hành động</em> và <em>chuyển động</em>.</p>
                </Badge>
              </div>
            </div>

            {/* Section 8 */}
              <div id="dialogue-sound" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[8].icon}</span>
                <h3 className="text-2xl font-semibold text-white">8. Lời thoại và Âm thanh</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <Badge type="tip" icon="💬">
                  <p><strong className="text-yellow-300">Lời thoại (Dialogue):</strong> Đặt trong khu vực riêng, nên ngắn và tự nhiên. Ghi rõ trạng thái cảm xúc.</p>
                </Badge>
                <Badge type="tip" icon="🎵">
                  <p><strong className="text-yellow-300">Âm thanh nền (Background sound):</strong> Giúp tạo ra không khí và chiều sâu (ví dụ: "Tiếng gió rít xa xa", "tiếng chim hót ríu rít trong rừng").</p>
                </Badge>
                <Badge type="example">
                  <p className="font-semibold text-yellow-300 mb-2">Ví dụ một cụm dặn dò âm thanh:</p>
                  <ul className="list-none space-y-1 text-gray-200 font-mono text-sm">
                    <li>Dialogue:</li>
                    <li>- Nhân vật A (nói mệt mỏi): "Cuối cùng cũng xong."</li>
                    <li className="mt-2">Background sound: Tiếng mưa rơi rả rích bên ngoài cửa sổ.</li>
                  </ul>
                </Badge>
              </div>
            </div>

            {/* Section 9 */}
              <div id="refinement" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[9].icon}</span>
                <h3 className="text-2xl font-semibold text-white">9. Sửa và Tinh chỉnh (Làm lại)</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <Badge type="success" icon="🎯">
                  <p><strong className="text-yellow-300">Khi video gần đúng ý (Remix):</strong> Giữ nguyên những phần đã ổn, và chỉ yêu cầu AI thay đổi <strong className="text-yellow-300">một thứ duy nhất</strong> mỗi lần.</p>
                </Badge>
                
                <Badge type="example">
                  <div className="space-y-2 text-sm">
                    <div className="relative">
                      <p><em className="text-gray-200">Prompt gốc:</em> "Cận cảnh bông hoa hồng đỏ, máy quay đứng yên, ánh sáng ban ngày."</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("Cận cảnh bông hoa hồng đỏ, máy quay đứng yên, ánh sáng ban ngày.")}
                        className="absolute -top-1 -right-1 bg-gray-600 hover:bg-gray-500 text-gray-300 text-xs font-semibold py-1 px-2 rounded-md transition-colors opacity-50 hover:opacity-100"
                        title="Chép prompt gốc"
                      >
                        Chép
                      </button>
                    </div>
                    <div className="relative">
                      <p><em className="text-gray-200">Prompt tinh chỉnh (Remix):</em> "Giữ nguyên cảnh bông hoa hồng đỏ, nhưng đổi thành ánh sáng hoàng hôn vàng ấm, và thêm hiệu ứng slow-motion khi cánh hoa rơi."</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("Giữ nguyên cảnh bông hoa hồng đỏ, nhưng đổi thành ánh sáng hoàng hôn vàng ấm, và thêm hiệu ứng slow-motion khi cánh hoa rơi.")}
                        className="absolute -top-1 -right-1 bg-gray-600 hover:bg-gray-500 text-gray-300 text-xs font-semibold py-1 px-2 rounded-md transition-colors opacity-50 hover:opacity-100"
                        title="Chép prompt tinh chỉnh"
                      >
                        Chép
                      </button>
                    </div>
                  </div>
                </Badge>

                <Badge type="warning" icon="🔄">
                  <p><strong className="text-yellow-300">Khi video sai hoàn toàn:</strong> <strong className="text-red-400">ĐƠN GIẢN HÓA!</strong> Hãy quay về cơ bản: Khóa máy quay, 1 hành động đơn giản, bảng màu 3 màu. Khi có "cảnh gốc" ưng ý, hãy bắt đầu thêm từng lớp chi tiết một.</p>
                </Badge>
              </div>
            </div>

            {/* Section 10 */}
              <div id="common-errors" className="mb-8 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sections[10].icon}</span>
                <h3 className="text-2xl font-semibold text-white">10. Những lỗi thường gặp và Cách sửa nhanh</h3>
              </div>
              <Badge type="error" icon="🐛">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-red-400">Lỗi: Mô tả mơ hồ.</strong> (Ví dụ: "cảnh buồn")<br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Thêm chi tiết nhìn thấy được (Ví dụ: "căn phòng tối, nhân vật cúi gằm, ánh trăng mờ chiếu qua cửa sổ").</em>
                  </li>
                  <li>
                    <strong className="text-red-400">Lỗi: Tham lam, bắt làm quá nhiều hành động.</strong><br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Tách ra. Giữ 1 hành động chính cho mỗi cảnh.</em>
                  </li>
                  <li>
                    <strong className="text-red-400">Lỗi: Máy quay di chuyển lộn xộn.</strong> (Ví dụ: "vừa zoom vào, vừa lia trái")<br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Chọn 1 chuyển động duy nhất.</em>
                  </li>
                  <li>
                    <strong className="text-red-400">Lỗi: Ánh sáng mâu thuẫn.</strong><br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Chọn 1 logic ánh sáng chính và thống nhất tông màu.</em>
                  </li>
                  <li>
                    <strong className="text-red-400">Lỗi: Nhân vật không nhất quán.</strong><br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Chốt 1 cụm mô tả (ví dụ: "chàng trai mặc áo khoác đỏ") và lặp lại ở các shot sau.</em>
                  </li>
                  <li>
                    <strong className="text-red-400">Lỗi: Đòi thay đổi thông số kỹ thuật.</strong> (Ví dụ: "làm video 10 giây", "video 4K")<br/>
                    <em className="text-green-400 font-semibold">✅ Sửa: Xóa ngay lập tức. Bạn đang nói chuyện với một "nghệ sĩ thị giác", không phải "kỹ thuật viên".</em>
                  </li>
                </ol>
              </Badge>
            </div>

            {/* Kết luận */}
            <Badge type="success" icon="🎓">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Kết luận</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Một prompt tốt là một yêu cầu mà bạn có thể <strong className="text-yellow-300">nhắm mắt lại và "thấy" được</strong> cảnh đó trong đầu. Hãy viết cụ thể, chi tiết vừa đủ để kiểm soát những gì quan trọng, nhưng cũng đủ gọn gàng để AI có không gian "thở" (sáng tạo).
                </li>
                <li>
                  Nếu cảm thấy hướng dẫn ở trên quá khó khăn, hãy sử dụng công cụ <strong className="text-yellow-300">Trợ lí AI</strong> để tạo lời nhắc cho bạn. Bạn chỉ cần viết phong cách và ý tưởng, nó sẽ cho bạn prompt cơ bản và prompt nâng cao.
                </li>
              </ul>
            </Badge>

            {/* Phụ lục */}
              <div id="terminology" className="mb-8 scroll-mt-20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{sections[11].icon}</span>
                  <h3 className="text-2xl font-semibold text-white">PHỤ LỤC: TỪ ĐIỂN THUẬT NGỮ (TRA CỨU NHANH)</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  <strong className="text-yellow-300">Hướng dẫn sử dụng:</strong> Thêm từ khóa tiếng Việt vào đầu lời nhắc để AI hiểu rõ phong cách và kỹ thuật bạn muốn áp dụng.
                </p>

                {/* Render the extracted glossary component */}
                <PromptGlossary />
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
        </div>
      </main>
    </div>
  )
}

export default PromptGuide
