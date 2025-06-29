import React from 'react';

interface SecurityModalProps {
  onClose: () => void;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-6 mx-4 max-w-sm w-full animate-slide-up shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">安全中心</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 4L12 12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Security Features */}
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-green-50 rounded-xl">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 6.25L8.75 13.75L3.75 8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">本地存储</h3>
              <p className="text-sm text-gray-600">私钥本地加密存储</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-blue-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10L7.5 12.5L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">开源代码</h3>
              <p className="text-sm text-gray-600">代码完全开源透明</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-yellow-50 rounded-xl">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.25L12.5 6.25L18.75 7.5L14.375 11.875L15.625 18.125L10 15.625L4.375 18.125L5.625 11.875L1.25 7.5L7.5 6.25L10 1.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">多重验证</h3>
              <p className="text-sm text-gray-600">支持多种验证方式</p>
            </div>
          </div>
        </div>

        {/* Security Tips */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <h4 className="font-medium text-gray-900 mb-2">安全建议</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 定期备份助记词</li>
            <li>• 使用强密码保护钱包</li>
            <li>• 不要在公共网络使用</li>
            <li>• 及时更新应用版本</li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-[#2D65F8] text-white py-3 rounded-xl font-medium"
        >
          了解了
        </button>
      </div>
    </div>
  );
};

export default SecurityModal;