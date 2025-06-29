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
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="#374151"/>
              <path d="M10 4C11.1046 4 12 3.10457 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 3.10457 8.89543 4 10 4Z" fill="#374151"/>
              <path d="M10 20C11.1046 20 12 19.1046 12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20Z" fill="#374151"/>
            </svg>
          </button>
          
          <button 
            onClick={() => onNavigate('settings')}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1667 12.5C16.0578 12.7513 16.0223 13.0302 16.0642 13.3005C16.106 13.5708 16.2233 13.8202 16.4 14.0167L16.45 14.0667C16.5945 14.2111 16.7069 14.3819 16.7801 14.5701C16.8534 14.7583 16.8858 14.9602 16.8858 15.1637C16.8858 15.3672 16.8534 15.569 16.7801 15.7572C16.7069 15.9454 16.5945 16.1162 16.45 16.2607C16.3055 16.4051 16.1347 16.5175 15.9465 16.5908C15.7583 16.6641 15.5565 16.6965 15.353 16.6965C15.1495 16.6965 14.9477 16.6641 14.7595 16.5908C14.5713 16.5175 14.4005 16.4051 14.256 16.2607L14.206 16.2107C14.0095 16.034 13.7601 15.9167 13.4898 15.8748C13.2195 15.833 12.9406 15.8685 12.6893 15.9773C12.4436 16.0807 12.2335 16.2477 12.0819 16.4606C11.9303 16.6735 11.8434 16.9239 11.8307 17.1833V17.3333C11.8307 17.7536 11.6637 18.1567 11.3668 18.4535C11.07 18.7504 10.6669 18.9173 10.2467 18.9173C9.82641 18.9173 9.42331 18.7504 9.12648 18.4535C8.82965 18.1567 8.66268 17.7536 8.66268 17.3333V17.2583C8.64432 16.9895 8.54703 16.7315 8.38375 16.5188C8.22047 16.3061 7.99854 16.1484 7.74601 16.0667C7.49468 15.9579 7.21578 15.9234 6.94548 15.9652C6.67518 16.007 6.42578 16.1243 6.22935 16.301L6.17935 16.351C6.03488 16.4954 5.86407 16.6078 5.67588 16.6811C5.48769 16.7544 5.28588 16.7868 5.08235 16.7868C4.87882 16.7868 4.677 16.7544 4.48881 16.6811C4.30062 16.6078 4.12982 16.4954 3.98535 16.351C3.84088 16.2065 3.72851 16.0357 3.65521 15.8475C3.58191 15.6593 3.54951 15.4575 3.54951 15.254C3.54951 15.0505 3.58191 14.8487 3.65521 14.6605C3.72851 14.4723 3.84088 14.3015 3.98535 14.157L4.03535 14.107C4.21202 13.9105 4.32935 13.6611 4.37118 13.3908C4.41302 13.1205 4.37752 12.8416 4.26868 12.5903C4.16535 12.3446 3.99835 12.1345 3.78548 11.9829C3.57262 11.8313 3.32218 11.7444 3.06268 11.7317H2.91268C2.49241 11.7317 2.08931 11.5647 1.79248 11.2679C1.49565 10.9711 1.32868 10.568 1.32868 10.1477C1.32868 9.72741 1.49565 9.32431 1.79248 9.02748C2.08931 8.73065 2.49241 8.56368 2.91268 8.56368H2.98768C3.25651 8.55099 3.51451 8.45369 3.72718 8.28041C3.93985 8.10713 4.09752 7.8652 4.17935 7.59368C4.28818 7.34235 4.32368 7.06345 4.28185 6.79315C4.24002 6.52285 4.12268 6.27345 3.94601 6.07702L3.89601 6.02702C3.75154 5.88255 3.63917 5.71174 3.56587 5.52355C3.49257 5.33536 3.46017 5.13355 3.46017 4.93002C3.46017 4.72649 3.49257 4.52467 3.56587 4.33648C3.63917 4.14829 3.75154 3.97749 3.89601 3.83302C4.04048 3.68855 4.21129 3.57618 4.39948 3.50288C4.58767 3.42958 4.78948 3.39718 4.99301 3.39718C5.19654 3.39718 5.39836 3.42958 5.58655 3.50288C5.77474 3.57618 5.94554 3.68855 6.09001 3.83302L6.14001 3.88302C6.33645 4.05969 6.58585 4.17702 6.85615 4.21885C7.12645 4.26069 7.40535 4.22519 7.65668 4.11635H7.74601C7.99168 4.01302 8.20185 3.84602 8.35345 3.63315C8.50505 3.42029 8.59201 3.16985 8.60468 2.91035V2.76035C8.60468 2.34008 8.77165 1.93698 9.06848 1.64015C9.36531 1.34332 9.76841 1.17635 10.1887 1.17635C10.6089 1.17635 11.012 1.34332 11.3089 1.64015C11.6057 1.93698 11.7727 2.34008 11.7727 2.76035V2.83535C11.7853 3.09485 11.8723 3.34529 12.0239 3.55815C12.1755 3.77102 12.3855 3.93802 12.6313 4.04135C12.8827 4.15019 13.1616 4.18569 13.4319 4.14385C13.7022 4.10202 13.9516 3.98469 14.148 3.80802L14.198 3.75802C14.3425 3.61355 14.5133 3.50118 14.7015 3.42788C14.8897 3.35458 15.0915 3.32218 15.295 3.32218C15.4985 3.32218 15.7003 3.35458 15.8885 3.42788C16.0767 3.50118 16.2475 3.61355 16.392 3.75802C16.5365 3.90249 16.6488 4.07329 16.7221 4.26148C16.7954 4.44967 16.8278 4.65149 16.8278 4.85502C16.8278 5.05855 16.7954 5.26036 16.7221 5.44855C16.6488 5.63674 16.5365 5.80755 16.392 5.95202L16.342 6.00202C16.1653 6.19845 16.048 6.44785 16.0062 6.71815C15.9643 6.98845 15.9998 7.26735 16.1087 7.51868V7.60802C16.212 7.85369 16.379 8.06385 16.5919 8.21545C16.8047 8.36705 17.0552 8.45402 17.3147 8.46668H17.4647C17.8849 8.46668 18.288 8.63365 18.5849 8.93048C18.8817 9.22731 19.0487 9.63041 19.0487 10.0507C19.0487 10.4709 18.8817 10.874 18.5849 11.1709C18.288 11.4677 17.8849 11.6347 17.4647 11.6347H17.3897C17.1302 11.6473 16.8797 11.7343 16.6669 11.8859C16.454 12.0375 16.287 12.2475 16.1837 12.4933Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

          <button 
            onClick={() => onNavigate('create')}
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22C55E" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">创建钱包</p>
          </button>

          <button 
            onClick={() => onNavigate('transactions')}
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21L19 13H5L3 3Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 16.5C16 17.8807 14.8807 19 13.5 19C12.1193 19 11 17.8807 11 16.5C11 15.1193 12.1193 14 13.5 14C14.8807 14 16 15.1193 16 16.5Z" stroke="#EAB308" strokeWidth="2"/>
                <path d="M9 19.5C9 20.8807 7.88071 22 6.5 22C5.11929 22 4 20.8807 4 19.5C4 18.1193 5.11929 17 6.5 17C7.88071 17 9 18.1193 9 19.5Z" stroke="#EAB308" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">交易记录</p>
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