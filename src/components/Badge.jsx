import React from 'react';

/**
 * Badge component để highlight các thông tin quan trọng
 * Types: tip (xanh dương), warning (vàng), example (xanh lá), error (đỏ)
 */
const Badge = ({ type = 'tip', children, icon }) => {
  const styles = {
    tip: {
      container: 'bg-blue-900/20 border-blue-700/50',
      border: 'border-l-blue-500',
      text: 'text-gray-200',
      icon: '💡'
    },
    warning: {
      container: 'bg-yellow-900/20 border-yellow-700/50',
      border: 'border-l-yellow-500',
      text: 'text-gray-200',
      icon: '⚠️'
    },
    example: {
      container: 'bg-green-900/20 border-green-700/50',
      border: 'border-l-green-500',
      text: 'text-gray-200',
      icon: '✅'
    },
    error: {
      container: 'bg-red-900/20 border-red-700/50',
      border: 'border-l-red-500',
      text: 'text-gray-200',
      icon: '❌'
    },
    success: {
      container: 'bg-emerald-900/20 border-emerald-700/50',
      border: 'border-l-emerald-500',
      text: 'text-gray-200',
      icon: '🎉'
    },
    info: {
      container: 'bg-purple-900/20 border-purple-700/50',
      border: 'border-l-purple-500',
      text: 'text-gray-200',
      icon: 'ℹ️'
    }
  };

  const selectedStyle = styles[type] || styles.tip;
  const displayIcon = icon || selectedStyle.icon;

  return (
    <div
      className={`
        border-l-4 ${selectedStyle.border}
        border ${selectedStyle.container}
        p-4 my-4 rounded-r-lg
        transition-all duration-200
        hover:shadow-md
      `}
    >
      <div className="flex items-start gap-3">
        {displayIcon && (
          <span className="text-2xl flex-shrink-0 leading-none">
            {displayIcon}
          </span>
        )}
        <div className={`flex-1 prose prose-sm max-w-none ${selectedStyle.text}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Badge;
