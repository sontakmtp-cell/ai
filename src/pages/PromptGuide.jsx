import React, { useState } from 'react'
import GuideHeader from './GuideHeader'

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

function PromptGuide() {
  return (
    <div className="min-h-screen bg-gray-900">
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
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hướng dẫn làm đạo diễn tạo video AI
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                  <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Lời khuyên</h4>
                  <ul className="list-disc list-inside space-y-2 text-indigo-200">
                    <li>Nếu có thời gian, bạn nên học cách viết lời nhắc (prompt) chuẩn sách giáo khoa dưới đây. Nếu không, hãy sử dụng công cụ <strong className="text-white">Trợ lí AI</strong> để nó viết lời nhắc (prompt) giúp bạn, bạn chỉ việc copy và sử dụng.</li>
                    <li>Mỗi lần tạo video là 1 lần tung xúc xắc, cùng 1 lời nhắc nhưng kết quả có thể khác nhau khá nhiều. Nếu video bạn tạo ra chưa ưng ý, hãy thử tạo lại bằng prompt cũ. Nếu kết quả vẫn không tốt hơn, hãy cải thiện prompt.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">1. Tư duy đúng trước khi bắt đầu</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Bạn là Đạo diễn, AI là người quay phim:</strong> Hãy tưởng tượng AI là một người quay phim rất giỏi về kỹ thuật, nhưng lại hoàn toàn không biết kịch bản hay ý đồ của bạn là gì. Nhiệm vụ của bạn là "dặn dò" thật kỹ (bằng lời nhắc prompt). Bạn càng rõ ràng, AI càng dễ "thực thi" chính xác.</p>
                
                <p><strong className="text-white">Chi tiết là Vua:</strong> Nếu bạn nói chung chung, AI sẽ phải tự "bịa" ra.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><em className="text-gray-400">Ví dụ tư duy kém:</em> "Làm video con mèo." (AI không biết làm con mèo gì, ở đâu, đang làm gì. Vì vậy nó sẽ tự động tạo ra video con mèo trong công viên hoặc con mèo phong cách hoạt hình...).</li>
                  <li><em className="text-gray-400">Ví dụ tư duy tốt:</em> "Mình muốn một video cận cảnh con mèo mướp đang ngáp, ánh nắng chiếu xiên làm rõ bộ lông."</li>
                  <li><em className="text-gray-400">Một ví dụ khác:</em> Thay vì "cảnh rừng", hãy viết "một khu rừng rậm rạp, ẩm ướt sau cơn mưa, với những tia nắng xuyên qua tán lá dày, mặt đất phủ đầy rêu xanh."</li>
                </ul>

                <p><strong className="text-white">Biết lúc nào cần kỹ, lúc nào nên thả lỏng:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Cần kỹ:</strong> Những thứ bạn *bắt buộc* phải có. Đây là những "điểm neo" không thể thay đổi. (ví dụ: "PHONG CÁCH YOUTUBER", "nhân vật phải mặc áo phi công đeo phù hiệu cờ Việt Nam").</li>
                  <li><strong className="text-white">Thả lỏng:</strong> Những thứ bạn muốn AI tự do sáng tạo. Bạn chỉ cần mô tả "đường phố đông đúc", "có vài người đang làm việc quanh đó", bạn không cần mô tả từng người một.</li>
                </ul>

                <p><strong className="text-white">Sẵn sàng làm lại (Thử và Sai):</strong> Việc tạo video bằng AI là một quá trình sáng tạo, không phải một lệnh cắm-là-chạy. Chỉ cần bạn thay đổi một chi tiết nhỏ như "ánh sáng" hay "góc máy", kết quả có thể khác một trời một vực. Đừng nản! Hãy xem mỗi lần tạo là một thử nghiệm để hiểu AI hơn.</p>
              </div>
            </div>

            {/* Công thức prompt */}
            <div className="mb-8 bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">CÔNG THỨC PROMPT TIÊU CHUẨN (có đủ 5 hạng mục sau):</h3>
              <ol className="space-y-3 text-gray-300">
                <li><strong className="text-white">PHONG CÁCH:</strong> Quyết định phong cách tổng thể trước (ví dụ: "phong cách youtuber", "hoạt hình Ghibli", "MC dẫn chương trình", "góc nhìn từ camera an ninh").</li>
                <li><strong className="text-white">BỐI CẢNH:</strong> Nhân vật chính là Ai, đang ở đâu? Thời tiết và Ánh sáng thế nào? (ví dụ: "@sontak, trên đường phố đêm, mưa, ánh đèn neon")</li>
                <li><strong className="text-white">HÀNH ĐỘNG:</strong> Nhân vật làm gì? Mô tả cụ thể, có nhịp điệu (ví dụ: "@sontak bước 3 bước, dừng lại, ngước nhìn lên")</li>
                <li><strong className="text-white">ĐIỀU KHIỂN MÁY QUAY:</strong> Máy quay nhìn từ đâu (góc máy) và di chuyển thế nào? (ví dụ: "quay cận mặt, lia chậm từ trái sang")</li>
                <li><strong className="text-white">ÂM THANH & TINH CHỈNH:</strong> Thêm âm thanh nền hoặc lời thoại (nếu cần) và sẵn sàng sửa lại prompt để có kết quả tốt nhất.</li>
              </ol>
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
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">2. Những thứ AI hiểu và không hiểu</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-2">Những thứ AI điều khiển được (Nên viết):</p>
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
                </div>

                <div>
                  <p className="font-semibold text-white mb-2">Những thứ AI không điều khiển được (Đừng viết):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong className="text-white">Độ dài video:</strong> Đừng bao giờ viết "làm video 12 giây"</li>
                    <li><strong className="text-white">Độ phân giải / Kích thước:</strong> Đừng viết "video 1080x120" hay "Full HD"</li>
                  </ul>
                </div>

                <div className="bg-gray-700 p-4 rounded">
                  <p className="font-semibold text-white mb-2">Ví dụ về yêu cầu TỐT và KHÔNG TỐT:</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-red-400">KHÔNG NÊN:</span> "Làm một video 10 giây, 1080p, cảnh bãi biển thật đẹp."</p>
                    <p><span className="text-green-400">NÊN:</span> "Cảnh bãi biển lúc hoàng hôn. Sóng vỗ nhẹ vào bờ cát trắng. Máy quay lia chậm từ trái sang phải, ngang tầm mắt."</p>
                  </div>
                  <div className="space-y-2 text-sm mt-2">
                    <p><span className="text-red-400">KHÔNG NÊN:</span> "Video 5 giây quay con chó chạy."</p>
                    <p><span className="text-green-400">NÊN:</span> "Một con chó Corgi chạy hết tốc lực trên bãi cỏ xanh, tai vẫy vẫy. Phong cách video slow-motion (chuyển động chậm)."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">3. Mô tả cảnh vật: Phải "thấy được"</h3>
              <div className="space-y-4 text-gray-300">
                <p>Khi mô tả, hãy dùng những từ ngữ mà mắt có thể nhìn thấy được. Hãy vẽ một bức tranh bằng lời.</p>
                
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400 mb-2">Không tốt:</p>
                  <p>"Một đường phố đẹp."</p>
                  <p className="text-white font-semibold mt-3 mb-2">Tốt:</p>
                  <p>"Một đường phố ban đêm, mặt đường ướt sũng, phản chiếu ánh đèn neon màu hồng và xanh từ các biển hiệu."</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400 mb-2">Không tốt:</p>
                  <p>"Một căn phòng bừa bộn."</p>
                  <p className="text-white font-semibold mt-3 mb-2">Tốt:</p>
                  <p>"Một căn phòng ký túc xá, quần áo vứt trên giường, sách vở mở tung trên bàn học, vài vỏ lon nước ngọt nằm lăn lóc dưới sàn nhà."</p>
                </div>

                <p><strong className="text-white">Nói rõ "Phong cách" ngay từ đầu:</strong> Hãy quyết định phong cách trước tiên. Đây là "bộ lọc" tổng thể cho video.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>"phong cách anime Ghibli" (màu sắc tươi sáng, nét vẽ tay)</li>
                  <li>"Video tài liệu IMAX hoành tráng" (góc quay rộng, hình ảnh siêu nét)</li>
                  <li>"Video quay bằng điện thoại cầm tay bị rung" (hiệu ứng rung lắc tự nhiên)</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">4. Mô tả hành động: Phải "đo được"</h3>
              <div className="space-y-4 text-gray-300">
                <p>Hành động càng cụ thể, AI càng dễ nắm bắt nhịp điệu (timing) của video.</p>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400 mb-2">Không tốt: "Nhân vật di chuyển nhanh."</p>
                  <p className="text-white font-semibold mt-3 mb-2">Tốt:</p>
                  <p>"Nhân vật đạp xe 3 vòng, thắng gấp, dừng lại ở vạch trắng."</p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400 mb-2">Không tốt: "Cô gái uống nước."</p>
                  <p className="text-white font-semibold mt-3 mb-2">Tốt:</p>
                  <p>"Cô gái từ từ nhấc ly nước thủy tinh lên, đưa lên môi, uống một ngụm nhỏ, rồi cẩn thận đặt ly xuống bàn."</p>
                </div>
                <p><strong className="text-white">Nguyên tắc vàng 1+1:</strong> Để AI không bị bối rối, mỗi cảnh (shot) chỉ nên có <strong>1 chuyển động máy chính + 1 hành động chính của chủ thể</strong>.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">5. Điều khiển máy quay (Phần này nên để AI tự quyết định, chỉ can thiệp khi bạn là chuyên gia)</h3>
              <div className="space-y-4 text-gray-300">
                <p>Đây là cách bạn "dẫn" mắt người xem và tạo cảm xúc.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Khung hình & Góc máy:</strong> Wide (rộng), Medium (trung), Close-up (cận), Extreme Close-up (siêu cận), Low angle (dưới lên), High angle (trên xuống).</li>
                  <li><strong className="text-white">Độ sâu trường ảnh (DOF):</strong> Nông (Shallow - nền mờ) hoặc Sâu (Deep - nét toàn cảnh).</li>
                  <li><strong className="text-white">Chuyển động máy:</strong> Chỉ chọn 1 chuyển động rõ ràng cho mỗi shot (ví dụ: "Tracking từ trái sang phải", "Dolly-in chậm").</li>
                </ul>
                <p className="font-semibold text-white mt-4">Ví dụ một cụm dặn dò máy quay:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-400">
                  <li>Cinematography:</li>
                  <li>- Shot: Medium close-up (quay cận trung, thấy từ ngực lên)</li>
                  <li>- Angle: Low angle (góc máy từ dưới lên)</li>
                  <li>- Motion: Slow dolly-in (máy quay từ từ tiến lại gần)</li>
                  <li>- DOF: Shallow (nét ở mặt nhân vật, nền mờ)</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">6. Ánh sáng và Màu sắc (Tâm trạng)</h3>
              <div className="space-y-4 text-gray-300">
                <p>Ánh sáng quyết định 80% cảm xúc của video.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Chất lượng & Nguồn sáng:</strong> Mô tả ánh sáng từ đâu và có đặc điểm gì? (ví dụ: "ánh sáng tự nhiên từ cửa sổ, mềm mại", "ánh đèn neon nhấp nháy").</li>
                  <li><strong className="text-white">Bảng màu (Neo màu):</strong> Chọn 3-5 màu chủ đạo để "neo" tông màu cho video (ví dụ: "Tông màu chủ đạo là vàng hổ phách, màu kem, và màu nâu gỗ").</li>
                  <li><strong className="text-white">Đừng tự mâu thuẫn:</strong> Đừng viết "ánh sáng chiều vàng ươm" nhưng lại kèm "bầu trời đêm mưa xanh lạnh" trong cùng một cảnh.</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">7. Cách dùng ảnh mẫu (Nếu có)</h3>
              <div className="space-y-3 text-gray-300">
                <p>Bạn có thể đưa 1 ảnh mẫu để làm "neo" (tham khảo) cho khung hình đầu tiên. Việc này giúp "khóa" lại các yếu tố thị giác như thiết kế nhân vật, quần áo, và phong cách mỹ thuật.</p>
                <p><strong className="text-white">Lưu ý:</strong> Ảnh chỉ khóa <em>vẻ bề ngoài</em>. Bạn vẫn phải dùng chữ để mô tả <em>hành động</em> và <em>chuyển động</em>.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">8. Lời thoại và Âm thanh</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Lời thoại (Dialogue):</strong> Đặt trong khu vực riêng, nên ngắn và tự nhiên. Ghi rõ trạng thái cảm xúc.</p>
                <p><strong className="text-white">Âm thanh nền (Background sound):</strong> Giúp tạo ra không khí và chiều sâu (ví dụ: "Tiếng gió rít xa xa", "tiếng chim hót ríu rít trong rừng").</p>
                <p className="font-semibold text-white mt-4">Ví dụ một cụm dặn dò âm thanh:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-400">
                  <li>Dialogue:</li>
                  <li>- Nhân vật A (nói mệt mỏi): "Cuối cùng cũng xong."</li>
                  <li>Background sound: Tiếng mưa rơi rả rích bên ngoài cửa sổ.</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">9. Sửa và Tinh chỉnh (Làm lại)</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Khi video gần đúng ý (Remix):</strong> Giữ nguyên những phần đã ổn, và chỉ yêu cầu AI thay đổi <strong>một thứ duy nhất</strong> mỗi lần.</p>
                <div className="bg-gray-700 p-4 rounded text-sm space-y-2">
                  <div className="relative">
                    <p><em className="text-gray-400">Prompt gốc:</em> "Cận cảnh bông hoa hồng đỏ, máy quay đứng yên, ánh sáng ban ngày."</p>
                    <button
                      onClick={() => navigator.clipboard.writeText("Cận cảnh bông hoa hồng đỏ, máy quay đứng yên, ánh sáng ban ngày.")}
                      className="absolute -top-1 -right-1 bg-gray-600 hover:bg-gray-500 text-gray-300 text-xs font-semibold py-1 px-2 rounded-md transition-colors opacity-50 hover:opacity-100"
                      title="Chép prompt gốc"
                    >
                      Chép
                    </button>
                  </div>
                  <div className="relative">
                    <p><em className="text-gray-400">Prompt tinh chỉnh (Remix):</em> "Giữ nguyên cảnh bông hoa hồng đỏ, nhưng đổi thành ánh sáng hoàng hôn vàng ấm, và thêm hiệu ứng slow-motion khi cánh hoa rơi."</p>
                    <button
                      onClick={() => navigator.clipboard.writeText("Giữ nguyên cảnh bông hoa hồng đỏ, nhưng đổi thành ánh sáng hoàng hôn vàng ấm, và thêm hiệu ứng slow-motion khi cánh hoa rơi.")}
                      className="absolute -top-1 -right-1 bg-gray-600 hover:bg-gray-500 text-gray-300 text-xs font-semibold py-1 px-2 rounded-md transition-colors opacity-50 hover:opacity-100"
                      title="Chép prompt tinh chỉnh"
                    >
                      Chép
                    </button>
                  </div>
                </div>
                <p><strong className="text-white">Khi video sai hoàn toàn:</strong> <strong>ĐƠN GIẢN HÓA!</strong> Hãy quay về cơ bản: Khóa máy quay, 1 hành động đơn giản, bảng màu 3 màu. Khi có "cảnh gốc" ưng ý, hãy bắt đầu thêm từng lớp chi tiết một.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">10. Những lỗi thường gặp và Cách sửa nhanh</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Lỗi: Mô tả mơ hồ.</strong> (Ví dụ: "cảnh buồn")<br/>
                  <em className="text-gray-400">Sửa: Thêm chi tiết nhìn thấy được (Ví dụ: "căn phòng tối, nhân vật cúi gằm, ánh trăng mờ chiếu qua cửa sổ").</em>
                </li>
                <li>
                  <strong className="text-white">Lỗi: Tham lam, bắt làm quá nhiều hành động.</strong><br/>
                  <em className="text-gray-400">Sửa: Tách ra. Giữ 1 hành động chính cho mỗi cảnh.</em>
                </li>
                <li>
                  <strong className="text-white">Lỗi: Máy quay di chuyển lộn xộn.</strong> (Ví dụ: "vừa zoom vào, vừa lia trái")<br/>
                  <em className="text-gray-400">Sửa: Chọn 1 chuyển động duy nhất.</em>
                </li>
                <li>
                  <strong className="text-white">Lỗi: Ánh sáng mâu thuẫn.</strong><br/>
                  <em className="text-gray-400">Sửa: Chọn 1 logic ánh sáng chính và thống nhất tông màu.</em>
                </li>
                <li>
                  <strong className="text-white">Lỗi: Nhân vật không nhất quán.</strong><br/>
                  <em className="text-gray-400">Sửa: Chốt 1 cụm mô tả (ví dụ: "chàng trai mặc áo khoác đỏ") và lặp lại ở các shot sau.</em>
                </li>
                <li>
                  <strong className="text-white">Lỗi: Đòi thay đổi thông số kỹ thuật.</strong> (Ví dụ: "làm video 10 giây", "video 4K")<br/>
                  <em className="text-gray-400">Sửa: Xóa ngay lập tức. Bạn đang nói chuyện với một "nghệ sĩ thị giác", không phải "kỹ thuật viên".</em>
                </li>
              </ol>
            </div>

            {/* Kết luận */}
            <div className="mb-8 bg-indigo-900/50 border border-indigo-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Kết luận</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>
                  Một prompt tốt là một yêu cầu mà bạn có thể <strong>nhắm mắt lại và "thấy" được</strong> cảnh đó trong đầu. Hãy viết cụ thể, chi tiết vừa đủ để kiểm soát những gì quan trọng, nhưng cũng đủ gọn gàng để AI có không gian "thở" (sáng tạo).
                </li>
                <li>
                  Nếu cảm thấy hướng dẫn ở trên quá khó khăn, hãy sử dụng công cụ <strong className="text-white">Trợ lí AI</strong> để tạo lời nhắc cho bạn. Bạn chỉ cần viết phong cách và ý tưởng, nó sẽ cho bạn prompt cơ bản và prompt nâng cao.
                </li>
              </ul>
            </div>

            {/* Phụ lục */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">PHỤ LỤC: TỪ ĐIỂN THUẬT NGỮ (TRA CỨU NHANH)</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Hướng dẫn sử dụng:</strong> Thêm từ khóa tiếng Việt vào đầu lời nhắc để AI hiểu rõ phong cách và kỹ thuật bạn muốn áp dụng.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Hạng mục</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Từ khóa (Tiếng Việt)</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tiếng Anh</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Đặc điểm chính</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ứng dụng phổ biến</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700 text-sm">
                    <tr><td colSpan="5" className="px-4 py-2 font-bold text-white">I. PHONG CÁCH / THẨM MỸ (Aesthetic Style)</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách YouTuber / Vlog</td><td className="px-4 py-2">YouTuber / Vlogging Style</td><td className="px-4 py-2">Hình ảnh trực tiếp, năng lượng cao, thường có người dẫn chuyện (host) nhìn thẳng vào camera, cắt dựng nhanh, nhạc nền sôi động.</td><td className="px-4 py-2">Vlog cá nhân, review sản phẩm, video giải trí trên YouTube.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Cầm tay (góc nhìn từ camera hoặc gậy tự sướng)</td><td className="px-4 py-2">Handheld / Shaky Cam</td><td className="px-4 py-2">Máy quay được cầm trực tiếp, tạo ra độ rung nhẹ, mô phỏng góc nhìn chủ quan, tăng tính chân thực và kịch tính.</td><td className="px-4 py-2">Phim tài liệu, phim hành động, cảnh chiến đấu/rượt đuổi, vlog.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Góc nhìn Thứ nhất</td><td className="px-4 py-2">Point of View (POV)</td><td className="px-4 py-2">Máy quay mô phỏng chính xác góc nhìn của nhân vật (hoặc người quay). Người xem cảm thấy như đang trực tiếp trải nghiệm.</td><td className="px-4 py-2">Video game, trải nghiệm mạo hiểm, video ngắn trên TikTok/Reels.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Điện ảnh</td><td className="px-4 py-2">Cinematic Style</td><td className="px-4 py-2">Sử dụng màu sắc, ánh sáng, độ sâu trường ảnh (shallow Depth of Field) và chuyển động máy quay tinh tế để tạo cảm giác chất lượng phim nhựa cao cấp.</td><td className="px-4 py-2">Phim truyện, MV ca nhạc, TVC quảng cáo thương hiệu.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Cảnh quay từ Camera An ninh</td><td className="px-4 py-2">Surveillance Style / CCTV</td><td className="px-4 py-2">Chất lượng hình ảnh kém (độ phân giải thấp, nén mạnh), góc máy cố định hoặc tự động lia, tông màu trắng đen hoặc ám xanh/xám, có hiển thị thời gian/ngày tháng (time code)</td><td className="px-4 py-2">Phim kinh dị, giật gân, tài liệu giả tưởng, cảnh hồi tưởng trong phim điện ảnh.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Tự nhiên/Khoảnh khắc</td><td className="px-4 py-2">Candid Style</td><td className="px-4 py-2">Bắt trọn cảm xúc, hành động tự nhiên, không sắp đặt. Hình ảnh sống động, gần gũi.</td><td className="px-4 py-2">Quay phim sự kiện (cưới, hội nghị), phim tài liệu.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Tối giản/Cân bằng</td><td className="px-4 py-2">Minimalist / Static</td><td className="px-4 py-2">Hạn chế chuyển động máy quay, tập trung vào bố cục tĩnh, đối xứng và sự tương phản giữa chủ thể và không gian.</td><td className="px-4 py-2">Phim nghệ thuật, video giới thiệu sản phẩm cao cấp, kiến trúc.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Chân dung cá nhân</td><td className="px-4 py-2">Talking Head (Solo Interview)</td><td className="px-4 py-2">Chủ thể ngồi hoặc đứng nói chuyện/trình bày một mình. Thường sử dụng bố cục quy tắc một phần ba, ánh sáng cơ bản (3 điểm sáng), tập trung vào người nói.</td><td className="px-4 py-2">Video giáo dục, bài giảng, podcast video, video giới thiệu (About Me).</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Phim ngắn (Chất lượng cao)</td><td className="px-4 py-2">High-Quality Short Film</td><td className="px-4 py-2">Tập trung vào kể chuyện bằng hình ảnh, sử dụng màu sắc, ánh sáng và bố cục phức tạp, chuyên nghiệp như điện ảnh nhưng với thời lượng ngắn.</td><td className="px-4 py-2">TVC, MV ca nhạc, phim ngắn nghệ thuật.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Truyền hình Trực tiếp</td><td className="px-4 py-2">Live Broadcast Style</td><td className="px-4 py-2">Ưu tiên tính thời sự và liên tục. Ít cắt dựng đột ngột, sử dụng nhiều máy quay cố định hoặc máy quay trên cần trục/ray để chuyển cảnh mượt.</td><td className="px-4 py-2">Tin tức, sự kiện thể thao, ca nhạc trực tiếp.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách MC Truyền hình</td><td className="px-4 py-2">News Anchor Style</td><td className="px-4 py-2">Bố cục tĩnh, cận cảnh/trung cảnh cố định. Ánh sáng mạnh, rõ ràng. Background đơn giản (thường là phông xanh, bảng tin). Tập trung tối đa vào thông tin và người dẫn.</td><td className="px-4 py-2">Bản tin thời sự, chương trình phỏng vấn studio.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Game Show / Talk Show</td><td className="px-4 py-2">Game Show / Talk Show Style</td><td className="px-4 py-2">Sử dụng nhiều góc máy, chuyển cảnh nhanh giữa MC, người chơi/khách mời và khán giả. Ánh sáng mạnh, nhiều màu sắc, sân khấu lớn và năng động.</td><td className="px-4 py-2">Các chương trình giải trí truyền hình.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Phỏng vấn đối thoại</td><td className="px-4 py-2">Interview / Sincere Style</td><td className="px-4 py-2">Hai người (phóng viên và nhân vật) cùng xuất hiện hoặc cắt xen kẽ (Over the Shoulder). Ánh sáng dịu, bố cục mở, tạo cảm giác thân mật, chân thành.</td><td className="px-4 py-2">Phóng sự tài liệu, chương trình đối thoại chuyên sâu.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Phóng sự / Tài liệu</td><td className="px-4 py-2">Documentary / Observational</td><td className="px-4 py-2">Ưu tiên tính chân thực. Thường dùng kỹ thuật cầm tay (handheld), ít ánh sáng nhân tạo, bố cục đôi khi không hoàn hảo để bắt kịp khoảnh khắc tự nhiên, sống động.</td><td className="px-4 py-2">Phim tài liệu, phóng sự điều tra, video khám phá.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Lãng mạn / Mềm mại</td><td className="px-4 py-2">Dreamy / Soft Focus</td><td className="px-4 py-2">Sử dụng ánh sáng mềm (soft light), thường có hiệu ứng mờ nhòe nhẹ ở các góc hoặc độ sâu trường ảnh cực nông để tạo cảm giác mơ màng, lãng mạn.</td><td className="px-4 py-2">Quay cưới, MV ballad, phim tình cảm.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Phong cách Cổ điển/Hoài cổ</td><td className="px-4 py-2">Vintage / Retro</td><td className="px-4 py-2">Sử dụng bộ lọc màu ấm, độ tương phản thấp, hiệu ứng hạt (grain) hoặc mô phỏng chất lượng video cũ.</td><td className="px-4 py-2">MV, video kỷ niệm, quảng cáo sản phẩm mang tính hoài niệm.</td></tr>
                    
                    <tr><td colSpan="5" className="px-4 py-2 font-bold text-white">II. KỸ THUẬT VỀ KÍCH CỠ KHUNG HÌNH (Shot Size Techniques)</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Cận cảnh Đặc tả</td><td className="px-4 py-2">Extreme Close-Up (ECU)</td><td className="px-4 py-2">Đặc tả một phần rất nhỏ của chủ thể (ví dụ: mắt, môi, chi tiết sản phẩm), nhấn mạnh cảm xúc hoặc chi tiết quan trọng.</td><td className="px-4 py-2">Drama, kinh dị, quảng cáo sản phẩm.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Cận cảnh</td><td className="px-4 py-2">Close-Up (CU)</td><td className="px-4 py-2">Chiếm toàn bộ khuôn mặt hoặc đầu của nhân vật, tập trung vào cảm xúc.</td><td className="px-4 py-2">Hội thoại, phản ứng cảm xúc.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Trung cảnh</td><td className="px-4 py-2">Medium Shot (MS)</td><td className="px-4 py-2">Chiếm từ thắt lưng trở lên của nhân vật. Phổ biến nhất trong các cảnh hội thoại và hành động.</td><td className="px-4 py-2">Phim truyền hình, phóng sự, vlog.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Toàn cảnh</td><td className="px-4 py-2">Long Shot (LS / Full Shot)</td><td className="px-4 py-2">Chiếm toàn bộ cơ thể nhân vật và một phần bối cảnh xung quanh.</td><td className="px-4 py-2">Thể hiện ngôn ngữ cơ thể, tương tác giữa nhân vật và môi trường.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Cảnh Toàn Viễn</td><td className="px-4 py-2">Extreme Wide Shot (EWS)</td><td className="px-4 py-2">Nhân vật rất nhỏ so với bối cảnh rộng lớn (cảnh vật, thành phố). Dùng để thiết lập không gian hoặc nhấn mạnh sự cô đơn/nhỏ bé của nhân vật.</td><td className="px-4 py-2">Cảnh mở đầu, thiết lập bối cảnh.</td></tr>
                    
                    <tr><td colSpan="5" className="px-4 py-2 font-bold text-white">III. KỸ THUẬT VỀ GÓC QUAY (Camera Angles)</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Góc ngang tầm mắt</td><td className="px-4 py-2">Eye-Level Shot</td><td className="px-4 py-2">Máy quay ngang tầm mắt chủ thể. Tạo cảm giác khách quan, tự nhiên nhất.</td><td className="px-4 py-2">Phổ biến nhất trong mọi thể loại.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Góc thấp</td><td className="px-4 py-2">Low Angle Shot</td><td className="px-4 py-2">Máy quay đặt dưới, hướng lên chủ thể. Tăng sự to lớn, quyền lực, hoặc đe dọa.</td><td className="px-4 py-2">Cảnh giới thiệu nhân vật phản diện, siêu anh hùng.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Góc cao</td><td className="px-4 py-2">High Angle Shot</td><td className="px-4 py-2">Máy quay đặt trên, hướng xuống chủ thể. Thể hiện sự yếu đuối, sự kiểm soát, hoặc cho cái nhìn tổng quan.</td><td className="px-4 py-2">Cảnh chiến lược, nhìn từ xa.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Góc Nghiêng</td><td className="px-4 py-2">Dutch Angle Shot</td><td className="px-4 py-2">Đường chân trời bị nghiêng, tạo cảm giác bất ổn, tâm lý méo mó, hoặc kịch tính.</td><td className="px-4 py-2">Phim kinh dị, tâm lý, hành động.</td></tr>
                    
                    <tr><td colSpan="5" className="px-4 py-2 font-bold text-white">IV. KỸ THUẬT CHUYỂN ĐỘNG (Camera Movement)</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Lia ngang</td><td className="px-4 py-2">Pan (Panning)</td><td className="px-4 py-2">Máy quay cố định tại một điểm, xoay ngang (trái-phải) để theo dõi chủ thể hoặc quét không gian.</td><td className="px-4 py-2">Theo dõi nhân vật đi ngang, giới thiệu phong cảnh.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Quay dọc</td><td className="px-4 py-2">Tilt</td><td className="px-4 py-2">Máy quay cố định tại một điểm, xoay dọc (lên-xuống) để thể hiện chiều cao hoặc chiều sâu.</td><td className="px-4 py-2">Cảnh nhìn lên tòa nhà cao, nhìn xuống vực thẳm.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Di chuyển Tiến/Lùi</td><td className="px-4 py-2">Dolly / Push-in</td><td className="px-4 py-2">Máy quay di chuyển tịnh tiến vào gần hoặc lùi ra xa chủ thể (thường bằng dolly/gimbal).</td><td className="px-4 py-2">Nhấn mạnh tâm lý, tập trung sự chú ý, hoặc tạo hiệu ứng kinh điển (Dolly Zoom).</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Di chuyển Song song</td><td className="px-4 py-2">Tracking / Trucking Shot</td><td className="px-4 py-2">Máy quay di chuyển ngang, song song với chuyển động của chủ thể.</td><td className="px-4 py-2">Cảnh rượt đuổi, theo dõi nhân vật đi bộ.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Cảnh quay liền mạch</td><td className="px-4 py-2">One Shot / Long Take</td><td className="px-4 py-2">Một cảnh quay rất dài không bị cắt, tạo cảm giác thời gian thực và sự chân thực/kịch tính.</td><td className="px-4 py-2">MV, phim nghệ thuật, cảnh hành động phức tạp.</td></tr>
                    <tr><td className="px-4 py-2"></td><td className="px-4 py-2">Quay Drone</td><td className="px-4 py-2">Drone Shot / Aerial Shot</td><td className="px-4 py-2">Sử dụng thiết bị bay không người lái để quay từ trên không, mang lại góc nhìn rộng và độc đáo.</td><td className="px-4 py-2">Video du lịch, bất động sản, sự kiện quy mô lớn.</td></tr>
                  </tbody>
                </table>
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

export default PromptGuide
