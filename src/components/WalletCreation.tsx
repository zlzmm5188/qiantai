import React, { useState } from 'react';
import { Screen } from '../App';

interface WalletCreationProps {
  onNavigate: (screen: Screen) => void;
}

const WalletCreation: React.FC<WalletCreationProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<'create' | 'backup' | 'verify'>('create');
  const [walletName, setWalletName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [verifyWords, setVerifyWords] = useState<{ [key: number]: string }>({});

  // 生成助记词
  const generateMnemonic = () => {
    const words = [
      'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract',
      'absurd', 'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid',
      'acoustic', 'acquire', 'across', 'act', 'action', 'actor', 'actress', 'actual'
    ];
    
    const randomWords = [];
    for (let i = 0; i < 12; i++) {
      randomWords.push(words[Math.floor(Math.random() * words.length)]);
    }
    setMnemonic(randomWords);
  };

  const handleCreateWallet = () => {
    if (!walletName || !password || !confirmPassword) {
      alert('请填写所有必填字段');
      return;
    }

    if (password !== confirmPassword) {
      alert('密码不匹配');
      return;
    }

    generateMnemonic();
    setStep('backup');
  };

  const handleBackupComplete = () => {
    setStep('verify');
  };

  const handleVerifyComplete = () => {
    alert('钱包创建成功！');
    onNavigate('home');
  };

  const renderCreateStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-[#2D65F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L30 10V30L20 35L10 30V10L20 5Z" fill="white"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">创建新钱包</h2>
        <p className="text-gray-600">设置您的钱包名称和密码</p>
      </div>

      <div className="space-y-4">
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

      <button
        onClick={handleCreateWallet}
        className="w-full bg-[#2D65F8] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        创建钱包
      </button>
    </div>
  );

  const renderBackupStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8.33333V20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M20 28.3333H20.0167" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7952 29.2048 3.33333 20 3.33333C10.7952 3.33333 3.33333 10.7952 3.33333 20C3.33333 29.2048 10.7952 36.6667 20 36.6667Z" stroke="white" strokeWidth="3"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">备份助记词</h2>
        <p className="text-gray-600">请按顺序记录下面的助记词</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.33333V8.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 11.3333H8.00667" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-red-800 mb-1">重要提示</h4>
            <p className="text-sm text-red-700">
              助记词是恢复钱包的唯一方式，请务必安全保存，不要截图或在线存储。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {mnemonic.map((word, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-xl text-center">
            <span className="text-xs text-gray-500">{index + 1}</span>
            <p className="font-medium text-gray-900">{word}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleBackupComplete}
        className="w-full bg-[#2D65F8] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        我已安全备份
      </button>
    </div>
  );

  const renderVerifyStep = () => {
    const verifyIndices = [2, 5, 8]; // 验证第3、6、9个词

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 20L18.3333 25L26.6667 16.6667" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7952 29.2048 3.33333 20 3.33333C10.7952 3.33333 3.33333 10.7952 3.33333 20C3.33333 29.2048 10.7952 36.6667 20 36.6667Z" stroke="white" strokeWidth="3"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">验证助记词</h2>
          <p className="text-gray-600">请输入指定位置的助记词</p>
        </div>

        <div className="space-y-4">
          {verifyIndices.map((index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                第 {index + 1} 个词
              </label>
              <input
                type="text"
                value={verifyWords[index] || ''}
                onChange={(e) => setVerifyWords({ ...verifyWords, [index]: e.target.value })}
                placeholder={`输入第 ${index + 1} 个助记词`}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D65F8] focus:border-transparent"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleVerifyComplete}
          className="w-full bg-[#2D65F8] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          完成验证
        </button>
      </div>
    );
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
          <h1 className="text-xl font-bold text-gray-900">创建钱包</h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${step === 'create' ? 'bg-[#2D65F8]' : 'bg-gray-300'}`} />
            <div className={`w-8 h-1 ${step !== 'create' ? 'bg-[#2D65F8]' : 'bg-gray-300'}`} />
            <div className={`w-3 h-3 rounded-full ${step === 'backup' ? 'bg-[#2D65F8]' : step === 'verify' ? 'bg-[#2D65F8]' : 'bg-gray-300'}`} />
            <div className={`w-8 h-1 ${step === 'verify' ? 'bg-[#2D65F8]' : 'bg-gray-300'}`} />
            <div className={`w-3 h-3 rounded-full ${step === 'verify' ? 'bg-[#2D65F8]' : 'bg-gray-300'}`} />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          {step === 'create' && renderCreateStep()}
          {step === 'backup' && renderBackupStep()}
          {step === 'verify' && renderVerifyStep()}
        </div>
      </div>
    </div>
  );
};

export default WalletCreation;