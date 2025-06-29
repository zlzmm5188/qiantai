import React from 'react';
import { Screen } from '../App';

interface HomePageProps {
  onNavigate: (screen: Screen) => void;
  onShowSecurity: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onShowSecurity }) => {
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#2D65F8] rounded-xl flex items-center justify-center mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L18 6V18L12 22L6 18V6L12 2Z" fill="white"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">imToken</h1>
              <p className="text-sm text-gray-600">数字钱包</p>
            </div>
          </div>
          
          <button 
            onClick={onShowSecurity}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="#374151"/>
              <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#374151"/>
              <path d="M10 20C11.1046 20 12 19.1046 12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20Z" fill="#374151"/>
            </svg>
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 mb-6 shadow-lg">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">总资产 (USD)</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">$0.00</h2>
            <div className="flex justify-center space-x-4">
              <button className="flex-1 bg-[#2D65F8] text-white py-3 rounded-xl font-medium">
                接收
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
                发送
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button 
            onClick={() => onNavigate('import')}
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2D65F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#2D65F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#2D65F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">导入钱包</p>
          </button>

          <button className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22C55E" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">创建钱包</p>
          </button>

          <button className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 1Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">收藏</p>
          </button>
        </div>

        {/* Assets List */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">我的资产</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">₿</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Bitcoin</p>
                  <p className="text-sm text-gray-600">BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$0.00</p>
                <p className="text-sm text-gray-600">0 BTC</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">Ξ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ethereum</p>
                  <p className="text-sm text-gray-600">ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">$0.00</p>
                <p className="text-sm text-gray-600">0 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;