import React, { useState } from 'react'

const MobileToC = ({ sections, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    })
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile ToC Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-20 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-40"
        aria-label="Mở mục lục"
        title="Mục lục"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-800 border-l border-gray-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-4 py-4 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white">Mục lục</h4>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Đóng mục lục"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <nav className="p-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-left py-3 px-3 rounded transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-xl flex-shrink-0">{section.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{section.title}</div>
                  <div className={`text-xs mt-0.5 ${
                    activeSection === section.id ? 'text-indigo-200' : 'text-gray-500'
                  }`}>
                    {section.readTime}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileToC
