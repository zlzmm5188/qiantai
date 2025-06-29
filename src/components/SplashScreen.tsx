import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-white/70 to-white/50 flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/30 to-white/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-[#2D65F8] rounded-2xl flex items-center justify-center shadow-xl">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L36 12V36L24 44L12 36V12L24 4Z" fill="white"/>
              <path d="M24 12L30 16V32L24 36L18 32V16L24 12Z" fill="#2D65F8"/>
            </svg>
          </div>
        </div>
        
        {/* App Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">imToken</h1>
        <p className="text-gray-600 text-center px-8">安全的数字钱包</p>
        
        {/* Loading Indicator */}
        <div className="mt-12">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-[#2D65F8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#2D65F8] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#2D65F8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;