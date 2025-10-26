import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

function FlipCard({ 
  title, 
  description, 
  backContent, 
  icon, 
  bgColor, 
  borderColor, 
  onClick,
  showQR = false,
  qrValue = ''
}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="content">
        <div className="front">
          <div className="img">
            <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-80`}></div>
          </div>
          <div className="front-content">
            <div className="badge flex items-center justify-center" style={{ width: '60px', height: '60px' }}>
              {icon}
            </div>
            <div className="description">
              <div className="title">
                <p className="text-sm font-bold w-full">{title}</p>
              </div>
              <p className="card-footer mt-2 text-xs">{description}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            {showQR && qrValue ? (
              <QRCodeSVG 
                value={qrValue}
                size={120}
                bgColor="#151515"
                fgColor="#ffffff"
                level="M"
                includeMargin={false}
              />
            ) : (
              <>
                <p className="text-center px-4">{backContent}</p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-md text-white font-medium hover:opacity-90 transition-opacity">
                  Xem chi tiết
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
