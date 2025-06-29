import React, { useState } from 'react';
import { Screen } from '../App';

interface ImportWalletProps {
  onNavigate: (screen: Screen) => void;
}

const ImportWallet: React.FC<ImportWalletProps> = ({ onNavigate }) => {
  const [importType, setImportType] = useState<'mnemonic' | 'privateKey'>('mnemonic');
  const [inputValue, setInputValue] = useState('');
  const [walletName, setWalletName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleImport = () => {
    if (!inputValue || !walletName || !password || !confirmPassword) {
      alert('请填写所有必填字段');
      return;
    }

    if (password !== confirmPassword) {
      alert('密码不匹配');
      return;
    }

    // Simulate import process
    alert('钱包导入成功！');
    onNavigate('home');
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-white/70 to-white/50 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      />
      
      {/* Header */}
      <div className="relative z-10 pt-[60px] px-6">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">导入钱包</h1>
        </div>

        {/* Import Type Selection */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 mb-6 shadow-lg">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setImportType('mnemonic')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                importType === 'mnemonic'
                  ? 'bg-white text-[#2D65F8] shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              助记词
            </button>
            <button
              onClick={() => setImportType('privateKey')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                importType === 'privateKey'
                  ? 'bg-white text-[#2D65F8] shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              私钥
            </button>
          </div>
        </div>

        {/* Import Form */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 mb-6 shadow-lg">
          <div className="space-y-4">
            {/* Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {importType === 'mnemonic' ? '助记词' : '私钥'}
              </label>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  importType === 'mnemonic'
                    ? '请输入12或24个助记词，用空格分隔'
                    : '请输入私钥'
                }
                className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#2D65F8] focus:border-transparent"
              />
            </div>

            {/* Wallet Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                钱包名称
              </label>
              <input
                type="text"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                placeholder="输入钱包名称"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D65F8] focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="设置钱包密码"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D65F8] focus:border-transparent"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                确认密码
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="再次输入密码"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D65F8] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.33333V8.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 11.3333H8.00667" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31811 11.6819 1.33333 8 1.33333C4.31811 1.33333 1.33333 4.31811 1.33333 8C1.33333 11.6819 4.31811 14.6667 8 14.6667Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">安全提示</h4>
              <p className="text-sm text-yellow-700">
                请确保在安全的环境中输入助记词或私钥。imToken 不会存储您的助记词，请妥善保管。
              </p>
            </div>
          </div>
        </div>

        {/* Import Button */}
        <button
          onClick={handleImport}
          className="w-full bg-[#2D65F8] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          导入钱包
        </button>
      </div>
    </div>
  );
};

export default ImportWallet;