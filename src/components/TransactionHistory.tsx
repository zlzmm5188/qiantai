import React from 'react';
import { Screen } from '../App';

interface TransactionHistoryProps {
  onNavigate: (screen: Screen) => void;
}

interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: string;
  currency: string;
  address: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ onNavigate }) => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'receive',
      amount: '0.5',
      currency: 'ETH',
      address: '0x1234...5678',
      timestamp: '2024-01-15 14:30',
      status: 'completed'
    },
    {
      id: '2',
      type: 'send',
      amount: '100',
      currency: 'USDT',
      address: '0xabcd...efgh',
      timestamp: '2024-01-14 09:15',
      status: 'completed'
    },
    {
      id: '3',
      type: 'receive',
      amount: '0.001',
      currency: 'BTC',
      address: '1A1zP1...eP2sh',
      timestamp: '2024-01-13 16:45',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'pending':
        return '处理中';
      case 'failed':
        return '失败';
      default:
        return '未知';
    }
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
          <h1 className="text-xl font-bold text-gray-900">交易记录</h1>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 mb-6 shadow-lg">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-medium bg-white text-[#2D65F8] shadow-sm">
              全部
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-medium text-gray-600">
              发送
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-medium text-gray-600">
              接收
            </button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    tx.type === 'send' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {tx.type === 'send' ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.33333V16.6667" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.6667 10L10 16.6667L3.33333 10" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16.6667V3.33333" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.33333 10L10 3.33333L16.6667 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-gray-900 mr-2">
                        {tx.type === 'send' ? '发送' : '接收'} {tx.currency}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(tx.status)}`}>
                        {getStatusText(tx.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{tx.address}</p>
                    <p className="text-xs text-gray-500">{tx.timestamp}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${tx.type === 'send' ? 'text-red-500' : 'text-green-500'}`}>
                    {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {transactions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#9CA3AF" strokeWidth="2"/>
                  <path d="M16 10.6667V21.3333" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10.6667 16H21.3333" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无交易记录</h3>
              <p className="text-gray-600">您的交易记录将显示在这里</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;