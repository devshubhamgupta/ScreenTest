import React from 'react';
import { Smartphone, RotateCw } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  onDeviceClick: () => void;
  onRotateClick: () => void;
  orientation: 'portrait' | 'landscape';
}

const Sidebar: React.FC<SidebarProps> = ({ onDeviceClick, onRotateClick, orientation }) => {
  return (
    <div className="sidebar">
      <button 
        className="sidebar-btn" 
        onClick={onDeviceClick}
        title="Select Device"
      >
        <Smartphone size={24} />
      </button>
      <button 
        className={`sidebar-btn ${orientation === 'landscape' ? 'active' : ''}`}
        onClick={onRotateClick}
        title="Rotate Device"
      >
        <RotateCw size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
