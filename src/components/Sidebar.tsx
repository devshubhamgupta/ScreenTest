import React from 'react';
import { Smartphone, RotateCw } from 'lucide-react';

interface SidebarProps {
  onDeviceClick: () => void;
  onRotateClick: () => void;
  orientation: 'portrait' | 'landscape';
}

const Sidebar: React.FC<SidebarProps> = ({ onDeviceClick, onRotateClick, orientation }) => {
  const btnClass = "w-12 h-12 bg-[#f5f5f5] border border-[#d0d0d0] rounded-[10px] text-[#333] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#e8e8e8] hover:border-[#b0b0b0] hover:text-black hover:scale-105";

  return (
    <div className="fixed right-0 top-0 h-screen w-[70px] bg-white border-l border-[#e0e0e0] flex flex-col items-center py-5 gap-[15px] z-[100] shadow-[-2px_0_10px_rgba(0,0,0,0.1)]">
      <button 
        className={btnClass} 
        onClick={onDeviceClick}
        title="Select Device"
      >
        <Smartphone size={24} />
      </button>
      <button 
        className={`${btnClass} ${orientation === 'landscape' ? '!bg-[#007bff] !border-[#007bff] !text-white' : ''}`}
        onClick={onRotateClick}
        title="Rotate Device"
      >
        <RotateCw size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
