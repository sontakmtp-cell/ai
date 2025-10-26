# Kế hoạch cải tiến giao diện PromptGuide.jsx

**Ngày tạo:** 26/10/2025  
**File mục tiêu:** `src/pages/PromptGuide.jsx`

---

## 📊 Phân tích hiện trạng

### Điểm mạnh
- ✅ Giao diện clean, sử dụng Tailwind CSS hiệu quả
- ✅ Có Table of Contents với active state tracking
- ✅ CodeBlock component với chức năng copy
- ✅ Nội dung chi tiết, đầy đủ

### Điểm cần cải thiện
- ⚠️ Navigation chưa tối ưu cho nội dung dài
- ⚠️ Thiếu visual feedback cho progress đọc
- ⚠️ Chưa có tính năng tương tác để thực hành
- ⚠️ Mobile experience chưa được tối ưu hoàn toàn
- ⚠️ Thiếu search/filter cho nội dung

---

## 🎯 Mục tiêu chung

1. **Tăng engagement:** Người dùng ở lại và hoàn thành việc đọc
2. **Cải thiện UX:** Dễ dàng điều hướng và tìm kiếm thông tin
3. **Tối ưu mobile:** Trải nghiệm tốt trên mọi thiết bị
4. **Thêm tính tương tác:** Học qua thực hành, không chỉ đọc
5. **Performance:** Tải nhanh, smooth scrolling

---

## 📋 Kế hoạch chi tiết từng bước

### **PHASE 1: Navigation & UX Fundamentals** 🎯
**Thời gian ước tính:** 8-12 giờ  
**Độ ưu tiên:** ⭐⭐⭐⭐⭐ CRITICAL

#### 1.1. Thêm Progress Bar
**Mô tả:** Thanh tiến trình hiển thị % nội dung đã đọc

**Implementation:**
```jsx
// Component mới: ProgressBar.jsx
const ProgressBar = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setProgress(scrollPercent)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

**Checklist:**
- [ ] Tạo component ProgressBar
- [ ] Integrate vào PromptGuide
- [ ] Test smooth animation
- [ ] Đảm bảo z-index đúng

---

#### 1.2. Cải thiện Table of Contents
**Mô tả:** ToC với icons, tooltips và responsive design

**Cải tiến:**
- Thêm icons cho mỗi section (từ lucide-react hoặc react-icons)
- Hiển thị số thứ tự rõ ràng
- Tooltip khi hover trên desktop
- Chuyển thành dropdown/drawer trên mobile
- Highlight section đang active rõ hơn
- Thêm estimated reading time cho mỗi section

**Implementation:**
```jsx
const sections = [
  { 
    id: "thinking", 
    title: "Tư duy đúng trước khi bắt đầu",
    icon: "🧠",
    readTime: "5 phút"
  },
  { 
    id: "formula", 
    title: "Công thức Prompt Tiêu chuẩn",
    icon: "📐",
    readTime: "8 phút"
  },
  // ...
]
```

**Checklist:**
- [ ] Thêm icon field vào sections array
- [ ] Thêm readTime cho mỗi section
- [ ] Design tooltip component
- [ ] Implement mobile drawer/accordion
- [ ] Tăng contrast cho active state
- [ ] Smooth scroll animation khi click

---

#### 1.3. Back to Top Button
**Mô tả:** Nút quay lên đầu trang, xuất hiện khi scroll xuống

**Implementation:**
```jsx
const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-40"
    >
      ↑
    </button>
  ) : null
}
```

**Checklist:**
- [ ] Tạo component BackToTop
- [ ] Fade in/out animation
- [ ] Responsive positioning
- [ ] Accessibility (aria-label)

---

#### 1.4. Typography & Readability Optimization
**Mô tả:** Cải thiện font, spacing và visual hierarchy

**Changes:**
- Line-height: 1.7 → 1.8 cho body text
- Font-size: Tăng từ 16px → 18px cho nội dung chính
- Sử dụng font Inter hoặc system-ui
- Thêm max-width cho đoạn văn (65-75 characters/line)
- Tăng contrast trong dark mode

**CSS Updates:**
```css
/* index.css hoặc Tailwind config */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.prose {
  font-size: 1.125rem;
  line-height: 1.8;
  max-width: 70ch;
}

.prose h2 {
  margin-top: 2.5em;
  margin-bottom: 1em;
}

.prose h3 {
  margin-top: 2em;
  margin-bottom: 0.75em;
}
```

**Checklist:**
- [ ] Update font trong index.css hoặc Tailwind config
- [ ] Điều chỉnh spacing cho headings
- [ ] Test readability trên nhiều devices
- [ ] Kiểm tra contrast ratios (WCAG AA)

---

### **PHASE 2: Interactive Features** ⚡
**Thời gian ước tính:** 12-16 giờ  
**Độ ưu tiên:** ⭐⭐⭐⭐ HIGH

#### 2.1. Interactive Code Examples
**Mô tả:** Cho phép user chỉnh sửa và thử prompt ngay trong page

**Features:**
- Nút "✨ Thử ngay" cho mỗi code example
- Modal popup với editable textarea
- Live preview (có thể giả lập output)
- Copy modified prompt
- Save to favorites

**Implementation:**
```jsx
const InteractiveCodeBlock = ({ code, example }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedCode, setEditedCode] = useState(code)
  
  return (
    <>
      <CodeBlock code={code} />
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-2 text-indigo-600 hover:text-indigo-800"
      >
        ✨ Thử ngay với prompt này
      </button>
      
      {isModalOpen && (
        <PromptPlayground 
          initialCode={code}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
```

**Checklist:**
- [ ] Tạo component PromptPlayground (modal)
- [ ] Implement editable textarea
- [ ] Add "Reset" và "Copy" buttons
- [ ] Mock output preview
- [ ] Responsive modal design

---

#### 2.2. Progress Checklist
**Mô tả:** User có thể check off các sections đã đọc

**Features:**
- Checkbox cho mỗi section
- Persist state trong localStorage
- Overall progress percentage
- "Hoàn thành" badge khi đủ 100%

**Implementation:**
```jsx
const useProgressTracking = () => {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('promptGuideProgress')
    return saved ? JSON.parse(saved) : []
  })
  
  const toggleSection = (sectionId) => {
    const newCompleted = completed.includes(sectionId)
      ? completed.filter(id => id !== sectionId)
      : [...completed, sectionId]
    
    setCompleted(newCompleted)
    localStorage.setItem('promptGuideProgress', JSON.stringify(newCompleted))
  }
  
  return { completed, toggleSection }
}
```

**Checklist:**
- [ ] Implement useProgressTracking hook
- [ ] Add checkbox UI to ToC
- [ ] Show overall progress (X/12 hoàn thành)
- [ ] Celebration animation khi 100%
- [ ] Reset progress button

---

#### 2.3. Search Functionality
**Mô tả:** Tìm kiếm nội dung trong guide

**Features:**
- Search input với keyboard shortcut (Ctrl+K / Cmd+K)
- Highlight kết quả tìm thấy
- Jump to section chứa keyword
- Recent searches

**Implementation:**
```jsx
const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  
  const handleSearch = (q) => {
    // Simple client-side search
    // Có thể upgrade với Fuse.js cho fuzzy search
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <input 
        type="text"
        placeholder="Tìm kiếm trong guide..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <SearchResults results={results} />
    </Modal>
  )
}
```

**Checklist:**
- [ ] Tạo SearchModal component
- [ ] Implement keyboard shortcut listener
- [ ] Basic text search trong sections
- [ ] Highlight matched text
- [ ] Responsive design

---

#### 2.4. Color-Coded Sections
**Mô tả:** Mỗi section có accent color riêng để dễ phân biệt

**Color Scheme:**
```jsx
const sectionColors = {
  thinking: 'purple',
  formula: 'blue',
  'ai-capabilities': 'indigo',
  'scene-description': 'green',
  'action-description': 'teal',
  'camera-control': 'cyan',
  'lighting-color': 'yellow',
  'reference-images': 'orange',
  'dialogue-sound': 'red',
  'refinement': 'pink',
  'common-errors': 'rose',
  'terminology': 'gray'
}
```

**Checklist:**
- [ ] Define color palette
- [ ] Add left border accent cho sections
- [ ] Update ToC với color indicators
- [ ] Ensure accessibility (không chỉ dựa vào màu)

---

### **PHASE 3: Visual Enhancements** 🎨
**Thời gian ước tính:** 10-14 giờ  
**Độ ưu tiên:** ⭐⭐⭐ MEDIUM

#### 3.1. Icons & Visual Hierarchy
**Mô tả:** Thêm icons và visual elements cho sections

**Implementation:**
- Install `lucide-react` hoặc `react-icons`
- Thêm icon cho mỗi heading
- Badge components cho "💡 Tip", "⚠️ Warning", "✅ Ví dụ tốt"
- Icons cho list items

**Badge Component:**
```jsx
const Badge = ({ type, children }) => {
  const styles = {
    tip: 'bg-blue-50 text-blue-700 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    example: 'bg-green-50 text-green-700 border-green-200'
  }
  
  return (
    <div className={`border-l-4 p-4 my-4 ${styles[type]}`}>
      {children}
    </div>
  )
}
```

**Checklist:**
- [ ] Install icon library
- [ ] Create Badge component
- [ ] Thêm icons vào headings
- [ ] Refactor nội dung để sử dụng Badge
- [ ] Ensure consistent visual language

---

#### 3.2. Illustrations & Diagrams
**Mô tả:** Visual aids cho concepts khó

**Cần tạo:**
- Diagram cho "Công thức Prompt Tiêu chuẩn"
- Before/After comparison cho ví dụ
- Icon pack cho camera angles, lighting types
- Timeline cho prompt refinement process

**Tools:**
- Figma/Excalidraw cho diagrams
- SVG cho flexibility
- Lazy load images

**Checklist:**
- [ ] Design diagrams
- [ ] Export as optimized SVGs
- [ ] Create LazyImage component
- [ ] Integrate vào relevant sections

---

#### 3.3. Animated Examples
**Mô tả:** GIF/video ngắn minh họa concepts

**Examples:**
- Camera movement animation
- Lighting changes demo
- Character action examples

**Implementation:**
```jsx
const AnimatedExample = ({ src, alt, caption }) => {
  const [inView, ref] = useInView({ triggerOnce: true })
  
  return (
    <figure ref={ref} className="my-6">
      {inView && (
        <img 
          src={src} 
          alt={alt}
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      )}
      <figcaption className="text-sm text-gray-600 mt-2">
        {caption}
      </figcaption>
    </figure>
  )
}
```

**Checklist:**
- [ ] Source/create animated examples
- [ ] Optimize file sizes (use WebP, compress)
- [ ] Implement lazy loading
- [ ] Add captions

---

### **PHASE 4: Mobile & Responsive** 📱
**Thời gian ước tính:** 8-10 giờ  
**Độ ưu tiên:** ⭐⭐⭐⭐ HIGH

#### 4.1. Mobile Navigation Improvements
**Mô tả:** Optimize navigation cho touch devices

**Changes:**
- ToC chuyển thành slide-in drawer (không phải sticky sidebar)
- Bottom navigation bar cho quick actions
- Swipe gestures (swipe right = open ToC, swipe left = close)
- Larger tap targets (min 44x44px)

**Implementation:**
```jsx
const MobileNav = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
      <div className="flex justify-around py-3">
        <button>📖 ToC</button>
        <button>🔍 Tìm</button>
        <button>⬆️ Top</button>
        <button>✓ Progress</button>
      </div>
    </div>
  )
}
```

**Checklist:**
- [ ] Design mobile navigation
- [ ] Implement drawer với Framer Motion
- [ ] Add swipe gestures
- [ ] Test trên real devices
- [ ] Ensure no interference với scrolling

---

#### 4.2. Responsive Code Blocks
**Mô tả:** Code blocks dễ đọc trên mobile

**Changes:**
- Horizontal scroll cho code dài
- Smaller font-size trên mobile
- Easier copy button placement
- Option to expand/collapse

**Checklist:**
- [ ] Update CodeBlock styles
- [ ] Test với code examples dài
- [ ] Ensure copy button accessible
- [ ] Add "Show more/less" cho long code

---

#### 4.3. Touch-Friendly UI
**Mô tả:** Tất cả interactive elements phải touch-friendly

**Guidelines:**
- Minimum tap target: 44x44px
- Spacing between tappable elements: 8px minimum
- No hover-only features (phải có alternative cho mobile)
- Test với fat fingers

**Checklist:**
- [ ] Audit tất cả buttons/links
- [ ] Increase sizes/padding where needed
- [ ] Remove hover-only tooltips (or add tap alternative)
- [ ] Test accessibility

---

### **PHASE 5: Performance & Accessibility** ⚙️
**Thời gian ước tính:** 6-8 giờ  
**Độ ưu tiên:** ⭐⭐⭐⭐ HIGH

#### 5.1. Performance Optimization
**Mô tả:** Đảm bảo page load nhanh và smooth

**Optimizations:**
- Lazy load images và heavy components
- Code splitting cho sections (nếu quá dài)
- Debounce scroll handlers
- Memoize expensive computations
- Virtual scrolling cho long lists (nếu cần)

**Checklist:**
- [ ] Implement lazy loading
- [ ] Add React.memo where appropriate
- [ ] Debounce scroll listeners
- [ ] Run Lighthouse audit
- [ ] Target: 90+ performance score

---

#### 5.2. Accessibility (a11y)
**Mô tả:** Đảm bảo mọi người đều dùng được

**Requirements:**
- ARIA labels đầy đủ
- Keyboard navigation (Tab, Enter, Esc)
- Screen reader friendly
- Focus indicators rõ ràng
- Color contrast ratios (WCAG AA: 4.5:1 for text)
- Alt text cho images

**Checklist:**
- [ ] Add ARIA labels
- [ ] Test keyboard navigation
- [ ] Test với screen reader (NVDA/JAWS)
- [ ] Check contrast ratios
- [ ] Add skip-to-content link
- [ ] Test với axe DevTools

---

#### 5.3. Dark Mode Optimization
**Mô tả:** Improve dark mode colors và transitions

**Improvements:**
- Better contrast ratios
- Smoother transitions
- Optimize code block colors
- Reduce eye strain với warmer colors

**Checklist:**
- [ ] Audit dark mode colors
- [ ] Adjust contrasts
- [ ] Test in low-light conditions
- [ ] Smooth theme transitions

---

### **PHASE 6: Advanced Features** ✨
**Thời gian ước tính:** 12-16 giờ  
**Độ ưu tiên:** ⭐⭐ LOW (Nice to have)

#### 6.1. Learning Path Tracker
**Mô tả:** Track progress và provide insights

**Features:**
- Time spent trên mỗi section
- Quiz nhỏ sau mỗi section
- Score/achievements
- Certificate of completion
- Export learning report

**Checklist:**
- [ ] Implement time tracking
- [ ] Create quiz questions
- [ ] Design achievements system
- [ ] Certificate template
- [ ] Analytics dashboard

---

#### 6.2. Export Options
**Mô tả:** Allow users to save content

**Options:**
- Download PDF
- Print-friendly version
- Share specific sections (deep links)
- Save favorites/bookmarks
- Export to Notion/Markdown

**Checklist:**
- [ ] Implement PDF export (react-pdf)
- [ ] Create print stylesheet
- [ ] Deep linking system
- [ ] Bookmark functionality
- [ ] Share buttons

---

#### 6.3. Community Features
**Mô tả:** Social learning features

**Ideas:**
- Comments trên sections
- Share your prompts
- Vote on examples
- Community gallery
- Tips from users

**Checklist:**
- [ ] Design comment system
- [ ] User-generated content moderation
- [ ] Integration với backend (nếu có)
- [ ] Social sharing

---

## 🚀 Implementation Roadmap

### Sprint 1 (Week 1-2)
- [ ] Phase 1: Navigation & UX Fundamentals
- [ ] Phase 4: Mobile & Responsive

**Deliverable:** Giao diện responsive, navigation tốt

---

### Sprint 2 (Week 3-4)
- [ ] Phase 2: Interactive Features
- [ ] Phase 5: Performance & Accessibility

**Deliverable:** Interactive, performant, accessible

---

### Sprint 3 (Week 5-6)
- [ ] Phase 3: Visual Enhancements
- [ ] Phase 6.1-6.2: Export & Learning tracker

**Deliverable:** Polish UI, thêm features

---

### Sprint 4 (Week 7-8) - Optional
- [ ] Phase 6.3: Community Features
- [ ] Bug fixes & optimization
- [ ] Documentation

**Deliverable:** Full-featured guide platform

---

## 📊 Success Metrics

### Quantitative
- [ ] Page load time < 2s
- [ ] Lighthouse score > 90
- [ ] Mobile usability score > 95
- [ ] Bounce rate giảm 30%
- [ ] Time on page tăng 50%
- [ ] Completion rate tăng 40%

### Qualitative
- [ ] User feedback positive
- [ ] Easier to navigate
- [ ] More engaging
- [ ] Better learning outcomes

---

## 🛠️ Tech Stack & Dependencies

### Current
- React
- Tailwind CSS
- Vite

### To Add
```json
{
  "dependencies": {
    "lucide-react": "^0.x.x",           // Icons
    "framer-motion": "^11.x.x",         // Animations
    "react-intersection-observer": "^9.x.x",  // Lazy loading
    "fuse.js": "^7.x.x",                // Fuzzy search
    "@headlessui/react": "^2.x.x",      // Accessible UI components
    "clsx": "^2.x.x",                   // Conditional classes
    "react-hot-toast": "^2.x.x"         // Notifications
  },
  "devDependencies": {
    "@axe-core/react": "^4.x.x"         // Accessibility testing
  }
}
```

---

## 📝 Notes & Considerations

### Breaking Changes
- None expected - all changes are additive

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- IE11 not supported

### Performance Budget
- Initial bundle size: < 200KB gzipped
- Images: < 100KB each, lazy loaded
- Fonts: System fonts hoặc subset Google Fonts

### Accessibility Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigable
- Screen reader tested

---

## ✅ Pre-Launch Checklist

### Testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Tablet testing
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Performance testing (Lighthouse)
- [ ] Accessibility audit (axe)

### Quality Assurance
- [ ] All links working
- [ ] All images loading
- [ ] All code examples correct
- [ ] Typography consistent
- [ ] Colors accessible
- [ ] Animations smooth

### Documentation
- [ ] Code comments
- [ ] Component documentation
- [ ] README updated
- [ ] Changelog created

---

## 🔄 Maintenance Plan

### Weekly
- [ ] Check for broken links
- [ ] Monitor performance metrics
- [ ] Review user feedback

### Monthly
- [ ] Update content nếu có
- [ ] Dependency updates
- [ ] Security patches

### Quarterly
- [ ] Feature additions based on feedback
- [ ] A/B testing new ideas
- [ ] Analytics review

---

## 📚 Resources & References

### Design Inspiration
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)

### Performance
- [Web.dev](https://web.dev/)
- [Core Web Vitals](https://web.dev/vitals/)

---

## 🤝 Team & Roles

### Required Skills
- React development
- Tailwind CSS
- UX/UI design
- Accessibility knowledge
- Performance optimization

### Estimated Effort
- **Total:** 56-76 giờ
- **Full-time:** 7-10 ngày làm việc
- **Part-time:** 3-4 tuần

---

## 💡 Future Ideas (Backlog)

- [ ] Multi-language support (English, Vietnamese)
- [ ] Video tutorials embedded
- [ ] AI-powered prompt suggestions
- [ ] Integration với Sora API (nếu có)
- [ ] Collaborative editing
- [ ] Version history
- [ ] Templates library
- [ ] Style presets

---

**Last Updated:** 26/10/2025  
**Status:** ✅ Ready for implementation  
**Next Step:** Begin Phase 1 - Navigation & UX Fundamentals
