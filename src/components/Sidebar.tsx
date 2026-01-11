import React from 'react';
import {  TabletSmartphone } from 'lucide-react';
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
        <TabletSmartphone size={24} />
      </button>
      <button 
        className={`sidebar-btn ${orientation === 'landscape' ? 'active' : ''}`}
        onClick={onRotateClick}
        title="Rotate Device"
      >
       <img src="/rotate.png" alt="rotate-img"/>
      </button>
    </div>
  );
};

export default Sidebar;
