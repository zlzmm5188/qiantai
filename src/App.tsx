import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import ImportWallet from './components/ImportWallet';
import SecurityModal from './components/SecurityModal';

export type Screen = 'splash' | 'home' | 'import' | 'security';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [showSecurityModal, setShowSecurityModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleShowSecurity = () => {
    setShowSecurityModal(true);
  };

  const handleCloseSecurity = () => {
    setShowSecurityModal(false);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F8FAFF]">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'home' && <HomePage onNavigate={handleNavigate} onShowSecurity={handleShowSecurity} />}
      {currentScreen === 'import' && <ImportWallet onNavigate={handleNavigate} />}
      {currentScreen === 'security' && <ImportWallet onNavigate={handleNavigate} />}
      
      {showSecurityModal && (
        <SecurityModal onClose={handleCloseSecurity} />
      )}
    </div>
  );
}

export default App;