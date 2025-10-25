import React from 'react';

const glossaryData = [
  {
    category: 'I. PHONG CÁCH / THẨM MỸ (Aesthetic Style)',
    terms: [
      { vi: 'Phong cách YouTuber / Vlog', en: 'YouTuber / Vlogging Style', desc: 'Hình ảnh trực tiếp, năng lượng cao, thường có người dẫn chuyện (host) nhìn thẳng vào camera, cắt dựng nhanh, nhạc nền sôi động.', app: 'Vlog cá nhân, review sản phẩm, video giải trí trên YouTube.' },
      { vi: 'Phong cách Cầm tay (góc nhìn từ camera hoặc gậy tự sướng)', en: 'Handheld / Shaky Cam', desc: 'Máy quay được cầm trực tiếp, tạo ra độ rung nhẹ, mô phỏng góc nhìn chủ quan, tăng tính chân thực và kịch tính.', app: 'Phim tài liệu, phim hành động, cảnh chiến đấu/rượt đuổi, vlog.' },
      { vi: 'Phong cách Góc nhìn Thứ nhất', en: 'Point of View (POV)', desc: 'Máy quay mô phỏng chính xác góc nhìn của nhân vật (hoặc người quay). Người xem cảm thấy như đang trực tiếp trải nghiệm.', app: 'Video game, trải nghiệm mạo hiểm, video ngắn trên TikTok/Reels.' },
      { vi: 'Phong cách Điện ảnh', en: 'Cinematic Style', desc: 'Sử dụng màu sắc, ánh sáng, độ sâu trường ảnh (shallow Depth of Field) và chuyển động máy quay tinh tế để tạo cảm giác chất lượng phim nhựa cao cấp.', app: 'Phim truyện, MV ca nhạc, TVC quảng cáo thương hiệu.' },
      { vi: 'Cảnh quay từ Camera An ninh', en: 'Surveillance Style / CCTV', desc: 'Chất lượng hình ảnh kém (độ phân giải thấp, nén mạnh), góc máy cố định hoặc tự động lia, tông màu trắng đen hoặc ám xanh/xám, có hiển thị thời gian/ngày tháng (time code)', app: 'Phim kinh dị, giật gân, tài liệu giả tưởng, cảnh hồi tưởng trong phim điện ảnh.' },
      { vi: 'Phong cách Tự nhiên/Khoảnh khắc', en: 'Candid Style', desc: 'Bắt trọn cảm xúc, hành động tự nhiên, không sắp đặt. Hình ảnh sống động, gần gũi.', app: 'Quay phim sự kiện (cưới, hội nghị), phim tài liệu.' },
      { vi: 'Phong cách Tối giản/Cân bằng', en: 'Minimalist / Static', desc: 'Hạn chế chuyển động máy quay, tập trung vào bố cục tĩnh, đối xứng và sự tương phản giữa chủ thể và không gian.', app: 'Phim nghệ thuật, video giới thiệu sản phẩm cao cấp, kiến trúc.' },
      { vi: 'Phong cách Chân dung cá nhân', en: 'Talking Head (Solo Interview)', desc: 'Chủ thể ngồi hoặc đứng nói chuyện/trình bày một mình. Thường sử dụng bố cục quy tắc một phần ba, ánh sáng cơ bản (3 điểm sáng), tập trung vào người nói.', app: 'Video giáo dục, bài giảng, podcast video, video giới thiệu (About Me).' },
      { vi: 'Phong cách Phim ngắn (Chất lượng cao)', en: 'High-Quality Short Film', desc: 'Tập trung vào kể chuyện bằng hình ảnh, sử dụng màu sắc, ánh sáng và bố cục phức tạp, chuyên nghiệp như điện ảnh nhưng với thời lượng ngắn.', app: 'TVC, MV ca nhạc, phim ngắn nghệ thuật.' },
      { vi: 'Phong cách Truyền hình Trực tiếp', en: 'Live Broadcast Style', desc: 'Ưu tiên tính thời sự và liên tục. Ít cắt dựng đột ngột, sử dụng nhiều máy quay cố định hoặc máy quay trên cần trục/ray để chuyển cảnh mượt.', app: 'Tin tức, sự kiện thể thao, ca nhạc trực tiếp.' },
      { vi: 'Phong cách MC Truyền hình', en: 'News Anchor Style', desc: 'Bố cục tĩnh, cận cảnh/trung cảnh cố định. Ánh sáng mạnh, rõ ràng. Background đơn giản (thường là phông xanh, bảng tin). Tập trung tối đa vào thông tin và người dẫn.', app: 'Bản tin thời sự, chương trình phỏng vấn studio.' },
      { vi: 'Phong cách Game Show / Talk Show', en: 'Game Show / Talk Show Style', desc: 'Sử dụng nhiều góc máy, chuyển cảnh nhanh giữa MC, người chơi/khách mời và khán giả. Ánh sáng mạnh, nhiều màu sắc, sân khấu lớn và năng động.', app: 'Các chương trình giải trí truyền hình.' },
      { vi: 'Phong cách Phỏng vấn đối thoại', en: 'Interview / Sincere Style', desc: 'Hai người (phóng viên và nhân vật) cùng xuất hiện hoặc cắt xen kẽ (Over the Shoulder). Ánh sáng dịu, bố cục mở, tạo cảm giác thân mật, chân thành.', app: 'Phóng sự tài liệu, chương trình đối thoại chuyên sâu.' },
      { vi: 'Phong cách Phóng sự / Tài liệu', en: 'Documentary / Observational', desc: 'Ưu tiên tính chân thực. Thường dùng kỹ thuật cầm tay (handheld), ít ánh sáng nhân tạo, bố cục đôi khi không hoàn hảo để bắt kịp khoảnh khắc tự nhiên, sống động.', app: 'Phim tài liệu, phóng sự điều tra, video khám phá.' },
      { vi: 'Phong cách Lãng mạn / Mềm mại', en: 'Dreamy / Soft Focus', desc: 'Sử dụng ánh sáng mềm (soft light), thường có hiệu ứng mờ nhòe nhẹ ở các góc hoặc độ sâu trường ảnh cực nông để tạo cảm giác mơ màng, lãng mạn.', app: 'Quay cưới, MV ballad, phim tình cảm.' },
      { vi: 'Phong cách Cổ điển/Hoài cổ', en: 'Vintage / Retro', desc: 'Sử dụng bộ lọc màu ấm, độ tương phản thấp, hiệu ứng hạt (grain) hoặc mô phỏng chất lượng video cũ.', app: 'MV, video kỷ niệm, quảng cáo sản phẩm mang tính hoài niệm.' },
    ]
  },
  {
    category: 'II. KỸ THUẬT VỀ KÍCH CỠ KHUNG HÌNH (Shot Size Techniques)',
    terms: [
      { vi: 'Cận cảnh Đặc tả', en: 'Extreme Close-Up (ECU)', desc: 'Đặc tả một phần rất nhỏ của chủ thể (ví dụ: mắt, môi, chi tiết sản phẩm), nhấn mạnh cảm xúc hoặc chi tiết quan trọng.', app: 'Drama, kinh dị, quảng cáo sản phẩm.' },
      { vi: 'Cận cảnh', en: 'Close-Up (CU)', desc: 'Chiếm toàn bộ khuôn mặt hoặc đầu của nhân vật, tập trung vào cảm xúc.', app: 'Hội thoại, phản ứng cảm xúc.' },
      { vi: 'Trung cảnh', en: 'Medium Shot (MS)', desc: 'Chiếm từ thắt lưng trở lên của nhân vật. Phổ biến nhất trong các cảnh hội thoại và hành động.', app: 'Phim truyền hình, phóng sự, vlog.' },
      { vi: 'Toàn cảnh', en: 'Long Shot (LS / Full Shot)', desc: 'Chiếm toàn bộ cơ thể nhân vật và một phần bối cảnh xung quanh.', app: 'Thể hiện ngôn ngữ cơ thể, tương tác giữa nhân vật và môi trường.' },
      { vi: 'Cảnh Toàn Viễn', en: 'Extreme Wide Shot (EWS)', desc: 'Nhân vật rất nhỏ so với bối cảnh rộng lớn (cảnh vật, thành phố). Dùng để thiết lập không gian hoặc nhấn mạnh sự cô đơn/nhỏ bé của nhân vật.', app: 'Cảnh mở đầu, thiết lập bối cảnh.' },
    ]
  },
  {
    category: 'III. KỸ THUẬT VỀ GÓC QUAY (Camera Angles)',
    terms: [
      { vi: 'Góc ngang tầm mắt', en: 'Eye-Level Shot', desc: 'Máy quay ngang tầm mắt chủ thể. Tạo cảm giác khách quan, tự nhiên nhất.', app: 'Phổ biến nhất trong mọi thể loại.' },
      { vi: 'Góc thấp', en: 'Low Angle Shot', desc: 'Máy quay đặt dưới, hướng lên chủ thể. Tăng sự to lớn, quyền lực, hoặc đe dọa.', app: 'Cảnh giới thiệu nhân vật phản diện, siêu anh hùng.' },
      { vi: 'Góc cao', en: 'High Angle Shot', desc: 'Máy quay đặt trên, hướng xuống chủ thể. Thể hiện sự yếu đuối, sự kiểm soát, hoặc cho cái nhìn tổng quan.', app: 'Cảnh chiến lược, nhìn từ xa.' },
      { vi: 'Góc Nghiêng', en: 'Dutch Angle Shot', desc: 'Đường chân trời bị nghiêng, tạo cảm giác bất ổn, tâm lý méo mó, hoặc kịch tính.', app: 'Phim kinh dị, tâm lý, hành động.' },
    ]
  },
  {
    category: 'IV. KỸ THUẬT CHUYỂN ĐỘNG (Camera Movement)',
    terms: [
      { vi: 'Lia ngang', en: 'Pan (Panning)', desc: 'Máy quay cố định tại một điểm, xoay ngang (trái-phải) để theo dõi chủ thể hoặc quét không gian.', app: 'Theo dõi nhân vật đi ngang, giới thiệu phong cảnh.' },
      { vi: 'Quay dọc', en: 'Tilt', desc: 'Máy quay cố định tại một điểm, xoay dọc (lên-xuống) để thể hiện chiều cao hoặc chiều sâu.', app: 'Cảnh nhìn lên tòa nhà cao, nhìn xuống vực thẳm.' },
      { vi: 'Di chuyển Tiến/Lùi', en: 'Dolly / Push-in', desc: 'Máy quay di chuyển tịnh tiến vào gần hoặc lùi ra xa chủ thể (thường bằng dolly/gimbal).', app: 'Nhấn mạnh tâm lý, tập trung sự chú ý, hoặc tạo hiệu ứng kinh điển (Dolly Zoom).'},
      { vi: 'Di chuyển Song song', en: 'Tracking / Trucking Shot', desc: 'Máy quay di chuyển ngang, song song với chuyển động của chủ thể.', app: 'Cảnh rượt đuổi, theo dõi nhân vật đi bộ.' },
      { vi: 'Cảnh quay liền mạch', en: 'One Shot / Long Take', desc: 'Một cảnh quay rất dài không bị cắt, tạo cảm giác thời gian thực và sự chân thực/kịch tính.', app: 'MV, phim nghệ thuật, cảnh hành động phức tạp.' },
      { vi: 'Quay Drone', en: 'Drone Shot / Aerial Shot', desc: 'Sử dụng thiết bị bay không người lái để quay từ trên không, mang lại góc nhìn rộng và độc đáo.', app: 'Video du lịch, bất động sản, sự kiện quy mô lớn.' },
    ]
  }
];

function PromptGlossary() {
  return (
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
          {glossaryData.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <tr>
                <td colSpan="5" className="px-4 py-2 font-bold text-white">{section.category}</td>
              </tr>
              {section.terms.map((term, termIndex) => (
                <tr key={termIndex}>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">{term.vi}</td>
                  <td className="px-4 py-2">{term.en}</td>
                  <td className="px-4 py-2">{term.desc}</td>
                  <td className="px-4 py-2">{term.app}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PromptGlossary;